let lampada = document.querySelector('.img-lam')
let contador = 0
let quebrada = false

function lampadar(t){
    if (quebrada == false && t == 'l'){
    lampada.setAttribute('src' , './img/ligada.jpg')
    contador += 1
    console.log(contador)
    }

    if (quebrada == false && t == 'd'){
    lampada.setAttribute('src' , './img/desligada.jpg')
    contador +=1
    }

    if (contador == 10){
        console.log('asdojaicfndiscnisadnckscebnmasemcemiacbnui')
        lampada.setAttribute('src' , './img/quebrada.jpg')
        quebrada = true
        alert('Você quebrou a lampada!')
    }
    
}

