$(document).ready(function() {
  //JSnack A --> Creo arrey di squadre con proprietà (nome, punti fatti, falli subiti)

  const team = [
    {
      nome: 'juventus',
      puntiFatti: 0,
      falliSubiti:0,
    },
    {
      nome: 'milan',
      puntiFatti: 0,
      falliSubiti:0,
    },
    {
      nome: 'inter',
      puntiFatti: 0,
      falliSubiti:0,
    },
    {
      nome: 'roma',
      puntiFatti: 0,
      falliSubiti:0,
    },
    {
      nome: 'lazio',
      puntiFatti: 0,
      falliSubiti:0,
    },
  ];


  console.log(team);

  //JSnack B --> Generare num.random al posto delle prop 0 (punti fatti, falli subiti)
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

  for (let i = 0; i < team.length; i++) {
    team[i].puntiFatti = getRandomInt(0, 20);
    team[i].falliSubiti = getRandomInt(0, 20);
  }
  console.log(team);

});
