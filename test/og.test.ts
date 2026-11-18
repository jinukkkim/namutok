import { readHead, extractOg } from '../worker/og'

const stream = (chunks: string[], pulled: { n: number }) =>
  new ReadableStream<Uint8Array>({
    pull(c) {
      const s = chunks[pulled.n++]
      if (s === undefined) c.close()
      else c.enqueue(new TextEncoder().encode(s))
    },
  })

test('readHead: </head>에서 멈춘다', async () => {
  const pulled = { n: 0 }
  const head = await readHead(stream(['<html><head><meta a>', '</head><body>', 'x'.repeat(1000), 'y'], pulled))
  expect(head).toContain('</head>')
  expect(head).not.toContain('xxx')
  expect(pulled.n).toBeLessThanOrEqual(2)
})

test('readHead: </head>가 없으면 maxBytes까지만 읽는다', async () => {
  const head = await readHead(stream(['a'.repeat(100), 'b'.repeat(100), 'c'.repeat(100)], { n: 0 }), 150)
  expect(head.length).toBeLessThanOrEqual(200)
})

test('extractOg: 세 태그 추출과 엔티티 디코드', () => {
  const h =
    '<meta property="og:title" content="A &amp; B"><meta property="og:description" content="설명 &quot;x&quot;"><meta property="og:image" content="//i.namu.wiki/i/a">'
  expect(extractOg(h)).toEqual({ title: 'A & B', description: '설명 "x"', image: '//i.namu.wiki/i/a' })
})

test('extractOg: 없으면 null', () => {
  expect(extractOg('<head></head>')).toEqual({ title: null, description: null, image: null })
})
