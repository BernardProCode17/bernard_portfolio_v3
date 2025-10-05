export async function generateMetadata() {
  return {
    other: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  };
}

export default function CachingHeaders() {
  // This is a middleware component to add caching headers
  // It doesn't render anything visible
  return null;
}