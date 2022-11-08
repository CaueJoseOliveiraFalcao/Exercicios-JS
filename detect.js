var entrada = [6,1,2,3,1,4,2]
repet(entrada)
function repet(entrada){
    let arr = [342]
    let rep = []
    entrada.forEach(element => {
        arr.forEach(verfi => {
            if (verfi == element){
                console.log('repitiu')
            }
            else{
                console.log('kfnsldjnfjosdkl')
                arr.push(element)
            }
        })
        console.log(arr);
    });
}