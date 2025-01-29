export async function GET() {
  const response = await fetch('https://simpleanalyticsbadges.com/arrayofsunshine.co.uk')
  const badge = await response.arrayBuffer()

  return new Response(badge, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=31536000',
    },
  })
}
