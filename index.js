//for loop
// for(let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthdy to me!`);
// }

//for with Arrays
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for(let i=0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);

//Thank you card creator
function writeCards(names, event) {
 let cards = [];   
 for(let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
 }
 return cards;
}

function countDown(startNumber) {
    while(startNumber > 0) {
        console.log(startNumber);
        startNumber --;
    }
    console.log(startNumber);
}
