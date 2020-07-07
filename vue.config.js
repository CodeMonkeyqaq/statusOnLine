module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/", //部署应用包时的基本 URL
    outputDir: "dist", //打包目录
    indexPath: "index.html",
}