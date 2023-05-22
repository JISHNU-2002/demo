//synchronous
const {readFileSync, writeFileSync} = require('fs')

console.log("synchronous start")
const first = readFileSync('/home/jishnu/Desktop/web dev/js/node js/txt/first.txt','utf8')
const second = readFileSync('/home/jishnu/Desktop/web dev/js/node js/txt/second.txt','utf8')

console.log(first+"-"+second)

let third = writeFileSync('/home/jishnu/Desktop/web dev/js/node js/txt/third.txt',
`Here is the result : ${first}, ${second},`,{flag : 'a'})
console.log("synchronous write done")
console.log(third)
console.log("synchronous end")



//asynchronous
const {readFile, writeFile} = require('fs')

console.log("asynchronous start")
readFile('/home/jishnu/Desktop/web dev/js/node js/txt/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return 
    }
    
    const first = result
    console.log(first)

    readFile('/home/jishnu/Desktop/web dev/js/node js/txt/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return 
        }
        
        const second = result
        console.log(second)

        writeFile('/home/jishnu/Desktop/web dev/js/node js/txt/four.txt',
            `Result : ${first},${second}`, (err,result)=>{
                if(err){
                    console.log(err)
                    return 
                }
                
                const four = result
                console.log(four)
                console.log("asynchronous write done")
            })

    })
})
console.log("asynchronous end")