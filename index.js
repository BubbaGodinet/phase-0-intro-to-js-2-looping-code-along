/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
  

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;


wrapGifts(gifts);
*/

function writeCards (array, event) {
    const thankYou = [];
        for (let i = 0; i < array.length; i++) {
            thankYou.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
        }
        return thankYou;
}

function countDown (n) {
    let count = 11;
    while (count > 0) {
        count--;
        console.log(count);
    }
    
}
