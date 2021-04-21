// Code your solutions in this file
/*const names=['Liza','Kaitlin','Jan'];
const event="surprise";*/
  function writeCards(names, event) {
    let newArray=[];
  for (let i=0; i<names.length; i++) {
  newArray.push (`Thank you, ${names[i]} , for the wonderful ${event} gift!`);
  }
  return newArray
}
const names=['Liza','Kaitlin','Jan'];
console.log (writeCards(names, "surprise"));



let number = 10;
function countDown(number) {
  while (number>=0) {
    console.log(number--);}
}
//console.log(countDown);
