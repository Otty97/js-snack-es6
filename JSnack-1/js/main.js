$(document).ready(function() {
  //JSnack A --> Creare oggetto palla con proprietà (Nome=palla, Peso=10)
  const palla = {
    nome: 'palla',
    peso: '10',
    toString: function() {
      return "L'oggetto " + this.nome + " pesa " + this.peso;
    }
  };
  console.log(palla.toString());

  //JSnack B --> cambiare il peso attraveso un prompt
  palla.peso = parseInt(prompt('inserisci peso'))
  console.log(palla.toString());

});
