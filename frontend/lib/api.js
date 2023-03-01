export function getStrapiURL(path = "", port) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || `http://localhost:${port}`
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path, options, port) {
  const requestUrl = getStrapiURL('/api' + path, port || 1337);
  const response = await fetch(requestUrl, options);
  const data = await response.json();
  return data;
}
