module.exports = {
  style: {
    postcss: {
      env: {
        autoprefixer: {
          cascade: true
        },
        stage: 3,
        features: {
          'nesting-rules': true
        }
      }
    }
  }
}