import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // ==========================================
  // 1. ADMIN PORTAL PROTECTOR (Strict Mode)
  // ==========================================
  if (url.pathname.startsWith('/admin')) {
    const hasAdminToken = request.cookies.has('adminToken');

    // A. Allow unauthenticated guests to see the login and register pages freely
    if (url.pathname === '/admin/login' || url.pathname === '/admin/register') {
      // Bonus: If they are ALREADY logged in and hit login again, seamlessly boot them to the dashboard
      if (hasAdminToken) {
        url.pathname = '/admin/dashboard';
        return NextResponse.redirect(url);
      }
      return NextResponse.next();
    }

    // B. Block all other admin dashboard/tools pages if no secure token exists!
    if (!hasAdminToken) {
       url.pathname = '/admin/login';
       return NextResponse.redirect(url);
    }
    
    // C. If an authenticated user types just '/admin', route them to the main dashboard module
    if (url.pathname === '/admin') {
      url.pathname = '/admin/dashboard';
      return NextResponse.redirect(url);
    }

    // D. Allow authenticated users through to admin sub-pages
    return NextResponse.next();
  }

  // ===========================================
  // 2. PUBLIC WEBSITE PASSTHROUGH
  // ===========================================
  
  // Maintenance mode logic has been migrated securely to Server Components 
  // inside src/app/(public)/layout.tsx to allow dynamic admin DB toggling!
  
  return NextResponse.next();
}

// Apply this to all routes globally
export const config = {
  matcher: '/:path*',
}
