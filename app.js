const names = require('./name_module')
const display = require('./function_module')
const alternative = require('./alternate_module')
require('./fun_module')

console.log(names)

display("jishnu")
display(names.john)
display(names.wick)

console.log(alternative)