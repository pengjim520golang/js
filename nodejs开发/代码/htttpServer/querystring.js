const queryString = require("querystring")

let strUrl = "username=pengjin&password=123456"

let query = queryString.parse(strUrl)

console.log(query)