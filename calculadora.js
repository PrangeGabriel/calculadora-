
// somar 
var soma = require('./somar')
console.log(soma(1, 2))

// subtrair
var subtrai = require('./subtrair')
console.log(subtrai(1, 30))

// multiplicar
var multiplica = require('./multiplicar')
console.log(multiplica(2, -2))

// dividir
var divide = require('./dividir')
console.log(divide(10, 3))

//calculadora
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });