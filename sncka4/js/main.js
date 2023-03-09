'use strict'

let squadreStats = [
    {
        nome : 'Juventus',
        punti : 0,
        falliSubiti: 0
    },
    {
        nome : 'Milan',
        punti : 0,
        falliSubiti: 0
    },
    {
        nome : 'Inter',
        punti : 0,
        falliSubiti: 0
    },
    {
        nome : 'Napoli',
        punti : 0,
        falliSubiti: 0
    },
    {
        nome : 'Roma',
        punti : 0,
        falliSubiti: 0
    },
    {
        nome : 'Lazio',
        punti : 0,
        falliSubiti: 0
    },
    {
        nome : 'Atalanta',
        punti : 0,
        falliSubiti: 0
    },
]
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for(let i = 0; i < squadreStats.length; i++){
    const puntiRandom = getRndInteger(30, 90);
    squadreStats[i].punti= puntiRandom
    const falliRandom = getRndInteger(100, 300);
    squadreStats[i].falliSubiti = falliRandom;
}
console.log(squadreStats)

const nuoveStats = []
squadreStats.forEach((element,i)=>{
    const {nome,falliSubiti}= squadreStats[i]
    nuoveStats.push({nome,falliSubiti})
    return element
})
console.log(nuoveStats)