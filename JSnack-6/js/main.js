$(document).ready(function() {
  //Creo arrey di obj
  var arrayObj = [
    {
     name: 'Poppy',
     type: 'tshirt',
     color: 'red'
    },
    {
     name: 'Jumping',
     type: 'occhiali',
     color: 'blue'
    },
    {
     name: 'CrissCross',
     type: 'scarpe',
     color: 'black'
    },
    {
     name: 'Jenny',
     type: 'borsa',
     color: 'pink'
    },
  ];

  //Aggiungiamo alle sesso arrey una prop position avente random letteter
  let newArray = arrayObj.map((element, index, array) => {
          element.position = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
          return element
  });

  console.log(newArray);
});
