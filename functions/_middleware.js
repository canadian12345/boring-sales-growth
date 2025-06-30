// This file is required for @cloudflare/next-on-pages to work
export async function onRequest(context) {
  // This is handled by next-on-pages
  return context.next();
}