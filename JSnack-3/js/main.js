$(document).ready(function() {
  //Creare un triangolo con proprietà altezza e base
  const triangolo =
    {
        'cateto_1':3,
        'cateto_2':4,
    }

  //Calocolare il perimetro [formula teoPitagora h^2 * b^2 = i^2]
  let ipotenusa = Math.sqrt((triangolo.cateto_1)**2 + (triangolo.cateto_2)**2);
  triangolo.ipotenusa= ipotenusa;
  console.log(triangolo);
  let perimetro = triangolo.cateto_1 + triangolo.cateto_2 + triangolo.ipotenusa;
  console.log(perimetro);

  //Calocolare l'area
  let area = (triangolo.cateto_1) * (triangolo.cateto_2) / 2; 
  console.log(area);


});
