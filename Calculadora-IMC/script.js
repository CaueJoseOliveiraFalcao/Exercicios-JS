
let sub = document.querySelector('#send')

sub.addEventListener("click" , function(e) {
    e.preventDefault();

    const name = document.querySelector("#nome").value
    let altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value

    const resultado = calcularIMC(altura,peso)
    for (let i = 0; i < altura.length; i++){
        if (altura[i] == ',' ||  altura[i] == 'm'){
            alert('Use "." em vez de virgulas e so bote numeros')
        }
    }
    

    function calcularIMC(altura,peso){
        altura = Math.round(altura)
        peso = Math.round(peso)
        let resultado = peso/(altura*altura)
        
        return resultado
    } 
    const injet = document.querySelector('#resultado').textContent = 'Seu IMC é = ' + resultado
})


