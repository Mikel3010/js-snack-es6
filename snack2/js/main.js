'use strict'

const elenco = [
    {
        id : '213',
        name : 'Marco della Rovere',
        grades : '78',
    },
    {
        id : '110',
        name : 'Paola Cortellessa',
        grades : '96',
    },
    {
        id : '250',
        name : 'Andrea Mantegna',
        grades : '48',
    },
    {
        id : '145',
        name : 'Gaia Borromini',
        grades : '74',
    },
    {
        id : '196',
        name : 'Luigi Grimaldello',
        grades : '68',
    },
    {
        id : '102',
        name : 'Piero della Francesca',
        grades : '50',
    },
    {
        id : '120',
        name : 'Francesca da Polenta ',
        grades : '84',
    },
]
elenco.forEach(element => console.log(element))

let targhetta = elenco.map((element)=>{
    return element.name = element.name.toUpperCase();
})
console.log(targhetta)
        
const over70 = elenco.filter((element)=>{
    if(element.grades > 70){
        return true
    }else false
})
console.log(over70)
           
const over70Id120 = elenco.filter((element)=>{
    if(element.grades > 70 && element.id > 120){
        return true
    }else false
})
console.log(over70Id120)