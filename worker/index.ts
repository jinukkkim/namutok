import { readHead, extractOg } from './og'

export interface Env {
  ASSETS: Fetcher
  STATS: AnalyticsEngineDataset
}

// ponytail: temporary probe route for the A10 block test; Task 3 replaces it with worker/card.ts
const UA = 'namutok/1.0 (+https://github.com/jinukkkim/namutok)'

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url)
    if (url.pathname === '/api/card') {
      const title = url.searchParams.get('title') ?? ''
      const res = await fetch('https://namu.wiki/w/' + encodeURIComponent(title), { headers: { 'User-Agent': UA } })
      if (res.status !== 200 || !res.body) return json({ error: 'blocked', status: res.status }, 503)
      const og = extractOg(await readHead(res.body))
      return og.title ? json(og, 200) : json({ error: 'blocked', status: 200 }, 503)
    }
    return env.ASSETS.fetch(req)
  },
}
