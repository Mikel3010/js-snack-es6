'use strict'
const ospiti = [
    {
        'Nome tavolo': 'Tavolo VIP ',
        'Nome ospite': 'Brad Pitt ',
        'Ordine posto': '1',
    },
    {
        'Nome tavolo': 'Tavolo VIP ',
        'Nome ospite': 'Johnny Depp ',
        'Ordine posto': '2',
    },
    {
        'Nome tavolo': 'Tavolo VIP ',
        'Nome ospite': 'Lady Gaga ',
        'Ordine posto': '3',
    },
    {
        'Nome tavolo': 'Tavolo VIP ',
        'Nome ospite': 'Cristiano Ronaldo ',
        'Ordine posto': '4',
    },
    {
        'Nome tavolo': 'Tavolo VIP ',
        'Nome ospite': 'Georgina Rodriguez ',
        'Ordine posto': '5',
    },
    {
        'Nome tavolo': 'Tavolo VIP ',
        'Nome ospite': 'Chiara Ferragni ',
        'Ordine posto': '6',
    },
    {
        'Nome tavolo': 'Tavolo VIP ',
        'Nome ospite': 'Fedez ',
        'Ordine posto': '7',
    },
    {
        'Nome tavolo': 'Tavolo VIP ',
        'Nome ospite': 'George Clooney ',
        'Ordine posto': '8',
    },
    {
        'Nome tavolo': 'Tavolo VIP ',
        'Nome ospite': 'Amal Clooney ',
        'Ordine posto': '9',
    },
    {
        'Nome tavolo': 'Tavolo VIP ',
        'Nome ospite': 'Maneskin ',
        'Ordine posto': '10',
    },
]

ospiti.forEach((element)=>{
    console.log(element);
    const invito = document.createElement('p')
    document.querySelector('.container').appendChild(invito)
    invito.innerHTML = 'Nome tavolo:'+element["Nome tavolo"] +'Nome ospite:'+element["Nome ospite"] +'Ordine posto:'+element["Ordine posto"]
})