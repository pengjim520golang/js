const express = require("express")

const server = express()

server.listen(8888)


server.use("/news",require("./route/route_news")())
server.use("/artilces",require("./route/route_artilces")())


