export async function responseScript(basePath: string, filename: string): Promise<Response> {
  console.log(basePath, filename)
  const result = await Bun.build({
    entrypoints: [`${basePath}${filename}`]
  })
  if (result.success === false) {
    console.log(result.logs)
    return new Response('400 Bad Request', { status: 400 })
  }
  return new Response(result.outputs[0])
}
