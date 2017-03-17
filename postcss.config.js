/* eslint-disable */

module.exports = {
  plugins: [
    require('cssnano')({ /* ...options */ }),
    require('postcss-assets')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ })
  ]
}
