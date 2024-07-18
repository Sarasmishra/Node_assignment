// index.js

//  import the crypto module
const crypto = require('crypto')


//  get a commands using process.argv
let operation = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])


// complete the  function
let Sum = (num1,num2)=>{
    result = num1+num2;
    console.log(result)

}

let Sub = (num1,num2)=>{
    result = num1-num2;
    console.log(result)

}

let Mult = (num1,num2)=>{
    result = num1*num2;
    console.log(result)

}
let Divide = (num1,num2)=>{
    result = num1/num2;
    console.log(result)

}
let Sin = (num1)=>{
    result = Math.sin(num1)
    console.log(result)

}

let Cos = (num1)=>{
    result = Math.cos(num1);
    console.log(result)

}

let Tan = (num1)=>{
    result = Math.tan(num1)
    console.log(result)

}

let RandomNumber = (length)=>{
    let number = crypto.randomBytes(length,(err,buff)=>{
        if(err){
            console.log(err)
        }
        else{
            let n = buff.toString('binary')
            console.log(n)
        }
    })
}




console.log("you have selected",operation,"operation")

switch (operation) {
    case 'sum':
        Sum(num1,num2)
        break;
  
    case 'sub':
        Sub(num1,num2)
        break;
    case 'mult':
        Mult(num1,num2)
        break;
         
    case 'divide':
        Divide(num1,num2)
        break;
      
    case 'sin':
        Sin(num1)
        break;
       
    case 'cos':
        Cos(num1)
        break;

    case 'tan':
        Tan(num1)
        break;
                 
    case 'random':
        RandomNumber(num1)
        break;
                        
        
    default:
      console.log("Invalid operation");
  }
  