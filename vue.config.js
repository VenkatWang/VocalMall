module.exports = {
    configureWebpack: {
        resolve: {
            //配置 文件引用时不加后缀名
            // extensions:[]
            //配置别名
            alias:{
                //默认设置
                // '@':'src'
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}
