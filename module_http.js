const http = require('http')
const { connected } = require('process')

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('server listening')
        res.end('home page')
    }else if(req.url == '/about'){
        res.end('about page')
    }else{
        res.end(`<h1>Oops !!!</h1>
        <a href = "/">home</a>`)
    }
}).listen(3000,()=>{
    console.log('3000')
})
