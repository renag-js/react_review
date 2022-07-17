const {createProxyMiddleware} = require("http-proxy-middleware"); //高版本的引入方式，现在脚手架自带的都是高版本，要是用低版本的引入方式的话会导致项目成功启动，但是无法访问页面---小坑
// const proxy = require('http-proxy-middleware') // 低版本的引入方式 
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {  // 匹配到/api1前缀的请求，就会触发该代理配置
      target: "http://localhost:5000", // 请求转发到该地址
      changeOrigin: true, // 控制服务器（后端）收到的请求头中Host字段的值是target中的路径，也可以简单理解为是否允许跨域，但是这样理解不太准确），不是必须写
      pathRewrite: { "^/api1": "" }, // 重写请求路径（必须）
    }),
    createProxyMiddleware("/api2", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    })
  );
};
