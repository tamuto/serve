import { program } from 'commander'

import { responseIndexHtml } from './html'
import { responseScript } from './script'
import { responseFile } from './others'

program
  .version('0.0.5', '-v, --version', 'output the current version')
  .usage('[options]')
  .option('--base <path>', 'base directory', '.')
  .option('--port <port>', 'port number', '8080')
  .option('--host <hostname>', 'host name', 'localhost')
  .option('-e --entrypoint <file>', 'entrypoint file', 'index.tsx')
  .parse(process.argv)

const options = program.opts()

console.log('options: ', options)

Bun.serve({
  port: Number(options.port),
  hostname: options.host,
  development: true,
  fetch(req) {
    const url = new URL(req.url)
    if (url.pathname === '/') {
      return responseIndexHtml()
    }
    if (url.pathname === '/entrypoint') {
      return responseScript(options.base, `/${options.entrypoint}`)
    }
    return responseFile(options.base, url.pathname)
  }
})
