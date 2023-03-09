'use strict'

const bici = ['Bianchi','Atala','Olmo','Casati','Colnago','Bottecchia','Cinelli','Pistidda']

const pesoBici = ['22','33','14','32','12','25','27','17','21']

const listaBici = []

const lowest = Math.min(...pesoBici)

bici.forEach((element, i)=>{
    const datiBici= {
        nome : element,
        peso : Number(pesoBici[i])
    }
    listaBici.push(datiBici)
})
console.log(listaBici)
console.log(lowest)

const biciLeggera = listaBici.filter((element)=>{
    if(element.peso === lowest){
        return true
    }else false
})
console.log('La bici più leggera è:'+biciLeggera[0].nome + ' con un peso di:'+biciLeggera[0].peso+'Kg')