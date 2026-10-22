import { spawnSync } from 'node:child_process'
import { getCloudflareCachePurgeToken, printMissingTokenMessage } from './cloudflare-token.mjs'

const token = getCloudflareCachePurgeToken()

if (!token) {
  printMissingTokenMessage()
  process.exit(1)
}

function run(command, args, env = process.env) {
  const result = spawnSync(command, args, { env, stdio: 'inherit' })

  if (result.error) {
    console.error(result.error.message)
    process.exit(1)
  }

  if (result.status !== 0) process.exit(result.status ?? 1)
}

const purgeEnvironment = {
  ...process.env,
  CLOUDFLARE_CACHE_PURGE_TOKEN: token,
}

run('npm', ['run', 'build'])
run('npx', [
  'wrangler',
  'pages',
  'deploy',
  'dist',
  '--project-name',
  'caz-dev',
  '--commit-dirty',
  '--commit-message',
  'Deploy site',
])
run(process.execPath, ['scripts/cache-purge.mjs'], purgeEnvironment)
