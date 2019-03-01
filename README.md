# 动态简历

## 在线观看

http://106.14.169.12:2019/

## 关于 features

- typescript
- 字体样式参考 prismjs
- prismjs + marked 处理代码转换
- 移动端使用了 better-scroll 优化体验


## 启动方式

```bash
# clone item
  git clone git@github.com:qiufeihong2018/qiufeihong_resume.git
  cd qiufeihong_resume
  
# install dependencies
  npm install
  
# serve with hot reload at localhost:2019
  gulp
```

## 修改

style 和 resume 在 `src/load/` 下的对应js中

也可以直接引用 `dist` 下的文件，使用参考 `src/scripts/index.ts`

## 打包

```bash
  gulp build
```

:::tip
参考：

 http://strml.net/

:::
