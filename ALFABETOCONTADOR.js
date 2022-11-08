let frase = 'caue falcao'

let abc = [{ a:'a',qnt:0},{ b:'b',qnt:0},{ c:'c',qnt:0},{ d:'d',qnt:0},{ e:'e',qnt:0},{ f:'f',qnt:0},{ g:'g',qnt:0},
{ h:'h',qnt:0},{ i:'i',qnt:0},{ j:'j',qnt:0},{ k:'k',qnt:0},{ l:'l',qnt:0},{ m:'m',qnt:0},{ n:'n',qnt:0},{ o:'o',qnt:0},
{ p:'p',qnt:0},{ q:'q',qnt:0},{ r:'r',qnt:0},{ s:'s',qnt:0},{ t:'t',qnt:0},{ u:'u',qnt:0},{ v:'v',qnt:0},{ w:'w',qnt:0},
{ x:'x',qnt:0},{ y:'y',qnt:0},{ z:'z',qnt:0}]

alfabeto(frase,abc)

function alfabeto(frase,abc){
            for (let index = 0; index < frase.length; index++) {
                abc.forEach(element => {
                    if (frase[index] == element['a']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['b']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['c']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['d']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['e']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['f']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['g']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['h']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['i']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['j']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['k']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['l']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['m']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['n']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['o']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['p']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['q']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['r']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['s']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['t']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['u']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['v']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['w']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['x']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['y']){
                        element.qnt += 1                        
                    }
                    if (frase[index] == element['z']){
                        element.qnt += 1                        
                    }

            })
            
            }
}
for (let index = 0; index < abc.length; index++) {
    if (abc[index].qnt > 0){
        console.log(abc[index])
    }
    
}