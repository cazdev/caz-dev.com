import { execFileSync } from 'node:child_process'

const KEYCHAIN_SERVICE = 'caz-dev.com/cloudflare-cache-purge'

export function getCloudflareCachePurgeToken() {
  const environmentToken = process.env.CLOUDFLARE_CACHE_PURGE_TOKEN?.trim()
  if (environmentToken) return environmentToken

  if (process.platform !== 'darwin') return ''

  try {
    return execFileSync(
      'security',
      ['find-generic-password', '-s', KEYCHAIN_SERVICE, '-w'],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    ).trim()
  } catch {
    return ''
  }
}

export function printMissingTokenMessage() {
  console.error(
    `CLOUDFLARE_CACHE_PURGE_TOKEN is required. Set it in the environment or store it in the macOS Keychain under ${KEYCHAIN_SERVICE}.`,
  )
}
