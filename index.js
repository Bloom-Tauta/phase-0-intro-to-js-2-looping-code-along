// Code your solutions in this file

const names = ['Guadalupe','Ollie','Aki'];
function writeCards(names) {
    const array=[]
  for(let i = 0; i < names.length; i++) {
    array[i]=(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return array;
}
writeCards(names);


function countDown() {
    let i = 0;
    while (i <= 10) { 
        console.log(i++);
    }
}
countDown();