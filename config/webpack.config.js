module.exports={
  entry:'./app/app.js',
  output:{
    filename:'./build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  }
}
