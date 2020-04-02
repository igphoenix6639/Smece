const http = require('http')

const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.write('Ovo je basic crap')
    res.end()
}).listen(3000, '127.0.0.1', function(error){
    if(error){
        console.log('Some shit went wrong')
    }else console.log('Server is running at port 3000')
})