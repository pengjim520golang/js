const express = require("express")

const app = express();

app.listen(8895)

const serve = express.static
//http://localhost:8895/images/11.png
//http://localhost:8895/css/style.css
//http://localhost:8895/js/ok
//http://localhost:8895/aaa.html  (这种访问方式我们一般使用模板引擎完成)
app.use( serve( __dirname +  "/www") )