'use strict'
class Car{
    constructor(model){
        this.model = model
    }
    presente(){
        return console.log('receba porra')
    }
}


const meucarro = new Car('Ford')

let hello = (val) => console.log('hello' + ' ' + val)

hello(3)

const numero = 8



console.log(numero)

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  return [add , subtract , multiply , divide]
    
  }

  const [add, subtract, multiply, divide] = calculate(4, 7);
  console.log(add)
  

  const numbers = [1, 2, 3, 4, 5, 6];

  let [as , asd , ...rest] = numbers

  console.log(as , asd , rest)