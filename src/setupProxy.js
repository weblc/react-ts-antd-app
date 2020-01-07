const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  console.log("==========")
  app.use(
    proxy("/api", {
      target: "https://douban.uieee.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
  app.use(
    proxy("/fans/**", {
      target: "https://douban.uieee.com",
      changeOrigin: true
    })
  );
};
