module.exports = {
  outputDir: '../../../public/assets/app',
  
  publicPath: process.env.NODE_ENV === 'production'
    ? '/assets/app/'
    : '/',
  
  indexPath: process.env.NODE_ENV === 'production'
    ? '../../../resources/views/app.blade.php'
    : 'index.html'
}