import { type NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''

  const flyDomain = 'array-of-sunshine.fly.dev'
  const customDomain = 'arrayofsunshine.co.uk'

  if (hostname === flyDomain) {
    return NextResponse.redirect(
      `https://${customDomain}${request.nextUrl.pathname}${request.nextUrl.search}`,
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
