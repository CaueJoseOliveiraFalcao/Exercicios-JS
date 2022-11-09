var salario  = 100
var salario1 = 300
var salario2 = 600
var salario3 = 800
var salario4 = 2000

reajuste(salario)
reajuste(salario1)
reajuste(salario2)
reajuste(salario3)
function reajuste(salario){
    if (salario <= 280){
        return console.log((salario*0.20) + salario)
    }
    else if (280 < salario && salario <= 700){
        return console.log((salario*0.15) + salario)
    }
    else if (700 < salario && salario <= 1500){
        return console.log((salario*0.10) + salario)
    }
    else if (1500 < salario){
        return console.log((salario*0.5) + salario)
    }
}