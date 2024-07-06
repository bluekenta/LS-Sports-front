const path = require( 'path' );
const outputPath = path.resolve('dist' )

module.exports = function ( alias, client ) {
  const CONFIG = {
    sports: {
      api: {
        // local: 'https://sportsfront.sportsdev1.com/',       // 开发环境
        // local: 'https://www.dpdev6.com/',     // 开发环境
        local: 'http://www.dpfat.com/',      // 测试环境
        // local: 'https://www.dpuat.com/',      // UAT环境
        // local: 'https://www.dppro6.com/',
        fat: 'http://sportsfront.sportsfat.com/',      // 测试环境
        desktop: {
          dev: '/',      // 测试 dev
          uat: '/',               // 测试 uat(预发布/灰度)
          prod: '/'               // 生产 prod
        },
        mobile: {
          dev: '/',
          uat: '/',
          prod: '/'
        }
      },
      apiVersion: '',
      entry: client === 'pc' ? 'sports/desktop' : 'sports/mobile',
      client: client === 'pc' ? 'desktop' : 'mobile',
      name: 'sports',
      base: 'sports',
      htmlName: 'index.html',
      buildPath: client === 'pc' ? path.resolve('dist/lssports-web') : path.resolve('dist/lssports-h5'),
      buildDir: client === 'pc' ? 'lssports-web' : 'lssports-h5',
    },
  }
  return CONFIG[alias];
}
