export { default } from "next-auth/middleware";

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|login|signup|favicon.ico|robots.txt|ads.txt|sitemap.xml|manifest.json|android-chrome-192x192.png|apple-touch-icon.png|browserconfig.xml|mstile-150x150.png|safari-pinned-tab.svg|site.webmanifest|favicon-.*.png|[^/]+/join/[0-9a-fA-F-]{36}).*)/",
};
