const queryString = require("querystring")
module.exports = {
    urlencode:function(){
        return function(request,response,next){
            let postData = ''
            request.on('data',(data)=>{
                postData += data 
            })
        
            request.on('end',()=>{
                request.body = queryString.parse(postData);
                next() 
            })
        }
    }
}