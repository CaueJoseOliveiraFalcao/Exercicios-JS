
let sub = document.querySelector('#send')

sub.addEventListener("click" , function(e) {
    e.preventDefault();

    const name = document.querySelector("#nome").value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value

    function calcularIMC(altura,peso){
        let resultado = peso/(altura*altura)
    }
    const resultado = document.querySelector('#resultado').textContent = 
    
    console.log(name,altura,peso)
})


