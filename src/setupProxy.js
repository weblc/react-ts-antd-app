const proxy = require("http-proxy-middleware");

module.exports = function(app) {
 
  app.use(
    proxy("/api", {
      target: "https://douban.uieee.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
  // app.use(
  //   proxy("/local", {
  //     target: "http://localhost:3000",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/local": ""
  //     }
  //   })
  // );
};
