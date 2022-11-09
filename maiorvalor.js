let valores = [10,11,12,13]
maior = menor = 0
maiorvalor(valores)
function maiorvalor(valores) {
    for (let index = 0; index < valores.length; index++) {
        if( valores[index] > maior){
            maior = valores[index]
        }
        else if(valores[index] < menor){
            menor = valores[index]
        }
    }
    console.log(maior , menor)
}