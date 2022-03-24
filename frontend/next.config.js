const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'localhost',
      process.env.NEXT_PUBLIC_STRAPI_API_URL
    ]
  },
  reactStrictMode: true,
}
