// A10 block test: can our deployed Worker read Namu Wiki pages?
// Usage: node scripts/a10-probe.mjs <base-url>   → exit 1 if fewer than 18/20 succeed
const base = process.argv[2]?.replace(/\/$/, '')
if (!base) {
  console.error('usage: node scripts/a10-probe.mjs <base-url>')
  process.exit(2)
}
const NS = /^(틀|분류|파일|사용자|나무위키|토론|휴지통|특수기능):/
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const titles = new Set()
for (let round = 0; titles.size < 20 && round < 6; round++) {
  if (round) await sleep(30_000)
  const items = await (await fetch('https://namu.wiki/sidebar.json')).json()
  for (const it of items) if (!NS.test(it.document) && titles.size < 20) titles.add(it.document)
}

let ok = 0
let total = 0
for (const t of titles) {
  const start = Date.now()
  const res = await fetch(`${base}/api/card?title=${encodeURIComponent(t)}`)
  const ms = Date.now() - start
  total += ms
  const body = await res.text()
  if (res.ok) ok++
  console.log(`${res.status} ${ms}ms ${t} ${res.ok ? '' : body.slice(0, 80)}`)
  await sleep(1000)
}
console.log(`ok=${ok}/${titles.size} avg_ms=${Math.round(total / titles.size)}`)
process.exit(ok >= 18 ? 0 : 1)
