const path = require('path')

const AWS_S3 = `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: { domains: [AWS_S3] },
  reactStrictMode: true,
}
