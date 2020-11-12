$(document).ready(function() {
  //Creo arrey di bici con diverse proprietà
  const bici = [
    {
      nome:'mountainbike',
      peso: 75,
    },
    {
      nome:'bmx',
      peso: 50,
    },
    {
      nome:'pieghevole',
      peso: 35,
    },
    {
      nome:'corsa',
      peso: 45,
    },
  ];
  

  //Stampo la bici con il peso minore utilizzando destructuring e template literal
   bici.sort((a, b) => {
    return a.peso - b.peso
   });
   console.log(bici)


});
