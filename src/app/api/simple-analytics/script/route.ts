export async function GET() {
  const response = await fetch('https://scripts.simpleanalyticscdn.com/latest.js')
  const script = await response.text()

  return new Response(script, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
