/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/

//Thank you card creator
const messages = [];

function writeCards(names, eventType) {
    for (let i=0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the lovely ${eventType} gift.`);
    }
    return messages;
}

writeCards(["Kristy", "Emmett", "Frida"], "birthday");

console.log(messages);