// Reassinging the value
let container = 'hello world'

function AssignValue(value){
    console.log(container)
    container = value
    console.log(container)
}

AssignValue('Namaste JavaScript',)

// Reassigning the value with const
const temp = 'hello world'

function ReassignConstValue(value){
    console.log(temp)
    temp = value // This line will throw error
    console.log(temp)
}

ReassignConstValue('Namaste World')

// perform arthmetic operations on two operands

let num1, num2
function PerformArthmeticOperation( operator ){
    
}