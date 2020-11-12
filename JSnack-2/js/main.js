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
    console.log(bici);

  //Stampo la bici con il peso minore
  let lightweghtbike = bici[0];

  for(var i = 1; i < bici.length; i++){
    if(bici[i].peso < lightweghtbike.peso){
      lightweghtbike = bici[i];
    }
  }
  console.log(lightweghtbike);


});
