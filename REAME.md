## 基本概念
1 module
2 chuck 
3 asset
4 file

## 内部
- Compiler  代表整个webpack对象
- Compilation 编译对象 每次新的编译生成新的compilation 里面会包含  module
chuck  asset  file

## 转换器
- 为什么需要loader  因为在webpack，我们要分析模块依赖，而分析需要把每个模块都变成js模块
- 图标 图片 less sass es6  将任意模块转换为js模块
