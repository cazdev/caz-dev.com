import { getCloudflareCachePurgeToken, printMissingTokenMessage } from './cloudflare-token.mjs'

const token = getCloudflareCachePurgeToken()

if (!token) {
  printMissingTokenMessage()
  process.exit(1)
}

const response = await fetch(
  'https://api.cloudflare.com/client/v4/zones/f62a5a2f965f0cc2cee40aadb4ac10b3/purge_cache',
  {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      files: ['https://caz-dev.com/', 'https://caz-dev.com/index.html'],
    }),
  },
)

const result = await response.json()

if (!response.ok || !result.success) {
  console.error('Cloudflare cache purge failed.')
  console.error(result.errors ?? result)
  process.exit(1)
}

console.log('Cloudflare cache purged.')
