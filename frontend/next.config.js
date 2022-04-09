const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true' && process.env.NODE_ENV === 'production',
})

const AWS_S3 = `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: { domains: [AWS_S3] },
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer(nextConfig)
