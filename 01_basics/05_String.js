const name = "Sanjeev"
const repoCount = 50

//console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('Rawan-Jiwan-dxd')

//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.indexOf('x'));

const newString = gameName.substring(0, 4)
//console.log(newString);


const anotherString = gameName.slice(-8, 6)

//console.log(anotherString);

const newStringOne = "                                    Signature                       "

//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://sanjeev.com/documemt%20required"

console.log(url.replace('%20', '-'));

console.log(url.includes('sanjeeve'));

console.log(gameName.split('a'))