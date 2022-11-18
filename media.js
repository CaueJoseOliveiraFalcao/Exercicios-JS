var aluno1 = [2,8,4]
media(aluno1)
function media(notas){
    let soma = 0
    for (let index = 0; index < notas.length; index++) {
        soma =+ notas[index]
        
    }
    console.log(soma)
}