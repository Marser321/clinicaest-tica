import { InsforgeMiddleware } from '@insforge/nextjs/middleware';

export default InsforgeMiddleware({
    baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL || 'https://eizdi5ax.us-west.insforge.app',
    publicRoutes: ['/', '/servicios'], // '/' = landing, '/servicios' = cubre /servicios y /servicios/*
});

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
