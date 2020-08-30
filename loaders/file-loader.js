/*
* 默认情况下 source 是字符串
* 如果加载的是二进制文件，不能用webpack 转化为字符串
* file-loader 把源文件拷贝一份到打包后的目录
* 然后返回访问路径
*
* */
const { getOptions, interpolateName } = require('loader-utils')
function loader(content) {
  let options = getOptions(this) || {};
  let url = interpolateName(this,options.filename,{content})
  this.emitFile(url,content)
  // 最后返回一个js模块代码
  console.log(url,'urllllllllllll')
  return `module.exports = ${JSON.stringify(url)}`
}
loader.raw = true
module.exports = loader;
