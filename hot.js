class Car{
    constructor(speed){
        this.speed = speed
    }
    presente(){
        return console.log('receba porra')
    }
}
class Model extends Car{
    constructor(speed,mod){
        super(speed)
        this.mod = mod
    }
    mostrar(){
        return this.presente()
    }
}

const meucarro = new Car('100')
console.log(meucarro.speed)
const meubyu = new Model('100' , 'fort fort')
meubyu.mostrar()