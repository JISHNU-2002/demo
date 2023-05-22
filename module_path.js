const { dirname } = require('path')
const path = require('path')

const sep = path.sep
console.log(sep)

const filePath = path.join('/content','subfolder','node_test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','node_test.txt')
console.log(absolute)