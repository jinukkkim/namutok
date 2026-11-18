# namutok A4 experiment prototype builder.
# 1) poll /sidebar.json (robots.txt allows) N times every 30s  2) promote subpages to parent, drop namespaces
# 3) fetch og tags per doc (1s gap)  4) download + shrink og:image (sips)  5) inject into template.html
# Usage: python3 -I build.py OUT_DIR SNAPSHOTS MAX_CARDS
import json, os, re, sys, time, html, base64, subprocess, collections, urllib.request, urllib.parse
from datetime import datetime, timezone, timedelta

HERE = os.path.dirname(os.path.abspath(__file__))
OUT, N, MAX = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
IMG = os.path.join(OUT, 'img'); os.makedirs(IMG, exist_ok=True)
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'
NS = re.compile(r'^(틀|분류|파일|사용자|나무위키|토론|휴지통|특수기능|더미):')
FILE = re.compile(r'파일:.{1,60}?\.(png|jpe?g|gif|svg|webp)\s*', re.I)
LEAD = re.compile(r'^\s*((분류|상위 문서|하위 문서|관련 문서|이 문서는|다른 뜻|동음이의어)[^\n]{0,80}?\s+)+')
PART = re.compile(r'\s(의|을|를|에|에서|에게|와|과|으로|로|이자|이다|이며|라는|이라는)(?=[\s,.])')

def get(url, ref=None):
    h = {'User-Agent': UA}
    if ref: h['Referer'] = ref
    return urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=15).read()

def clean(d):
    d = FILE.sub('', d); d = LEAD.sub('', d)
    d = re.sub(r'\[\d+\]', '', d)
    d = re.sub(r'\s+', ' ', d).strip()
    d = re.sub(r'\s+([,.)」』:!?])', r'\1', d)
    d = re.sub(r'([(「『])\s+', r'\1', d)
    d = PART.sub(r'\1', d)
    return re.sub(r'(^|\s)#(\s|$)', ' ', d).strip()

def og(s, p):
    m = re.search(r'<meta property="og:%s" content="([^"]*)"' % p, s)
    return html.unescape(m.group(1)).strip() if m else ''

items = []
for i in range(N):
    try: items += json.loads(get('https://namu.wiki/sidebar.json'))
    except Exception as e: print('snap err', e)
    if i < N - 1: time.sleep(30)

docs = collections.OrderedDict()
for it in sorted(items, key=lambda x: -x['date']):
    if NS.match(it['document']): continue
    parent, _, sub = it['document'].partition('/')
    d = docs.setdefault(parent, {'title': parent, 'date': it['date'], 'subs': []})
    if sub and sub not in d['subs']: d['subs'].append(sub)
print('unique parents', len(docs))

cards = []
for d in list(docs.values())[:MAX]:
    try:
        s = get('https://namu.wiki/w/' + urllib.parse.quote(d['title'])).decode('utf-8', 'replace')
    except Exception as e:
        print('doc err', d['title'], str(e)[:60]); continue
    d['summary'] = clean(og(s, 'description')); d['img'] = ''
    src = og(s, 'image')
    src = 'https:' + src if src.startswith('//') else (src if src.startswith('http') else '')  # '/img/...' = site default
    adult = re.search(r'성인|19금|AV ?배우|야애니', d['summary'] + d['title'])  # ponytail: keyword guess, MVP needs the image blur toggle (4b)
    if src and not adult and not src.lower().split('?')[0].endswith('.svg'):
        n = len(cards); raw, jpg = os.path.join(IMG, f'{n:02d}.raw'), os.path.join(IMG, f'{n:02d}.jpg')
        try:
            open(raw, 'wb').write(get(src, 'https://namu.wiki/'))
            subprocess.run(['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '55', '-Z', '640', raw, '--out', jpg], check=True, capture_output=True)
            d['img'] = 'data:image/jpeg;base64,' + base64.b64encode(open(jpg, 'rb').read()).decode()
        except Exception as e:
            print('img err', d['title'], str(e)[:60])
    cards.append(d)
    time.sleep(1.0)

snap = datetime.fromtimestamp(max(c['date'] for c in cards), timezone(timedelta(hours=9)))
page = open(os.path.join(HERE, 'template.html'), encoding='utf-8').read()
page = page.replace('/*CARDS*/[]', json.dumps(cards, ensure_ascii=False).replace('</', '<\\/'))
page = page.replace('/*SNAP*/""', json.dumps(f'{snap.month}월 {snap.day}일'))
out = os.path.join(HERE, 'namutok-prototype.html')
open(out, 'w', encoding='utf-8').write(page)
print('cards', len(cards), 'with img', sum(bool(c['img']) for c in cards),
      'empty summary', sum(not c['summary'] for c in cards), 'subs', sum(bool(c['subs']) for c in cards),
      'page KB', os.path.getsize(out) // 1024)
