// A10 retry on Vercel (Task 1b): same probe as worker/index.ts, same honest UA.
import { readHead, extractOg } from '../worker/og.js'

const UA = 'namutok/1.0 (+https://github.com/jinukkkim/namutok)'

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })

export async function GET(req: Request): Promise<Response> {
  const title = new URL(req.url).searchParams.get('title') ?? ''
  const res = await fetch('https://namu.wiki/w/' + encodeURIComponent(title), { headers: { 'User-Agent': UA } })
  if (res.status !== 200 || !res.body) return json({ error: 'blocked', status: res.status }, 503)
  const og = extractOg(await readHead(res.body))
  return og.title ? json(og, 200) : json({ error: 'blocked', status: 200 }, 503)
}
