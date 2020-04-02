const http = require('http')
const Utils = require('./utils.js')

const server = http.createServer((req,res) =>{
    let url = Utils.sanitizer(req.url)
    
    switch(url){
        case "":
            res.end("Main page")
            break;
        case "ff":
            let c = new (require("./" + url + "Controller.js"))()
            let methodname = req.method.toLowerCase() + url
            c[methodname](req,res)
            break;
        default:
            res.end("Default crap")
            break;


    }
}).listen(3000, '127.0.0.1', function(error){
    if(error){
        console.log('Some shit went wrong')
    }else console.log('Server is running at port 3000')
})