// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");
console.log(charIndex);
console.log(message.substr(charIndex, 4));

var charIndex2 = message.indexOf("go");
console.log(charIndex2);

var charIndex3 = message.indexOf("c");
console.log("'choose' from the message string: "+message.substring(charIndex3,9));

var charLastIndex = message.lastIndexOf("oo");
console.log("Last index of '00' in the word 'Moon': " + charLastIndex);

/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */