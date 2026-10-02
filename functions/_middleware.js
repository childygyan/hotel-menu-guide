/**
 * Redirect non-canonical hostnames to the main custom domain.
 * - hotel-menu-guide.pages.dev -> https://hotelmenuguide.org (301, path-preserving)
 * - www.hotelmenuguide.org -> https://hotelmenuguide.org (301, path-preserving)
 * Preview deployments (*.hash.pages.dev) pass through untouched for testing.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (
    url.hostname === "hotel-menu-guide.pages.dev" ||
    url.hostname === "www.hotelmenuguide.org"
  ) {
    url.hostname = "hotelmenuguide.org";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
