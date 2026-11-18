// Read only the <head> of a Namu Wiki page (stays under the Free plan's 10ms CPU) and pull og tags.

export async function readHead(body: ReadableStream<Uint8Array>, maxBytes = 262144): Promise<string> {
  const reader = body.getReader()
  const dec = new TextDecoder()
  let text = ''
  let bytes = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    bytes += value.byteLength
    text += dec.decode(value, { stream: true })
    const end = text.indexOf('</head>')
    if (end !== -1) {
      await reader.cancel()
      return text.slice(0, end + 7)
    }
    if (bytes >= maxBytes) {
      await reader.cancel()
      break
    }
  }
  return text
}

const ENTITIES: Record<string, string> = { amp: '&', quot: '"', '#39': "'", lt: '<', gt: '>' }

function decode(s: string): string {
  return s.replace(/&(amp|quot|#39|lt|gt|#\d+);/g, (m, e: string) =>
    ENTITIES[e] ?? (e.startsWith('#') ? String.fromCodePoint(Number(e.slice(1))) : m),
  )
}

export function extractOg(head: string): { title: string | null; description: string | null; image: string | null } {
  const get = (p: string) => {
    const m = head.match(new RegExp(`<meta property="og:${p}" content="([^"]*)"`))
    return m ? decode(m[1]).trim() : null
  }
  return { title: get('title'), description: get('description'), image: get('image') }
}
