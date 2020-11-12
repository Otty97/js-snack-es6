$(document).ready(function() {
  //Creo un arrey di partenza
  let myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

  //Chiedo all'utente di inserire 2 num tra 0 e arrey.length
  let number1 = parseInt(prompt(`Insersci un num da 1 a ${myArray.length}`));
  let number2 = parseInt(prompt(`Insersci un num da 1 a ${myArray.length}`));

  //Stampo nuovo arreycon i valori del prompt
  let newArray = myArray.slice(number1, number2);

  console.log(newArray)


});
