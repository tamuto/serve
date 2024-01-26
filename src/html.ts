const indexHtml = `
<!DOCTYPE html>
<html>
  <head>
    <title>infodb</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/entrypoint"></script>
  </body>
</html>
`

export function responseIndexHtml(): Response {
  return new Response(
    indexHtml,
    {
      headers: {
        'Content-Type': 'text/html'
      }
    }
  )
}
