/*
* loader就是一个转换函数
*
*
* */
const bable = require('@babel/core')
function loader(source,inputSourceMap) {

  let options = {
    presets:['@babel/preset-env'],
    inputSourceMap,
    sourceMaps:true
  }
  let {code,map,ast} = bable.transform(source,options)
  // console.log(code, options)
  return source
  // return this.callback(null,code,map,ast)
}
module.exports = loader
