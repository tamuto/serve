export function responseFile(basePath: string, filename: string): Response {
  return new Response(Bun.file(`${basePath}${filename}`))
}
