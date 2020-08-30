const webpack = require('webpack')
const options = require('./webpack.config')

const compiler = webpack(options)
// 开始启动编译，编译完成后会执行回调用函数
compiler.run((err, status)=>{
  console.log(err)
  console.log(status.toJSON({
    entries:true, // 输出入口信息
    chunks:true,  // 输出代码块信息
    modules:true, // 输出模块信息 （数组
    _modules:true, // 输出模块信息 （对象
    assets:true //输出打包出来的资源信息
  })) // 保存编译信息

})
