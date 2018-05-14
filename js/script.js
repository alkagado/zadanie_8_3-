var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = 'Marian';
if (allNames.indexOff(newName) === -1) 
{ var x = allNames.push('Marian');};
console.log(allNames);