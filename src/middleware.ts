import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token');

  // Если токена нет и текущий путь не /auth, перенаправляем на /auth
  if (!token && !req.nextUrl.pathname.startsWith('/auth')) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = '/auth';
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico).*)'], // Все, кроме статики
};
