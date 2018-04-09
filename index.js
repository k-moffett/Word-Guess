let inquirer = require(`inquirer`)
let prompt = inquirer.createPromptModule()
let question = {
    type: 'input',
    name: 'user_guess',
    message: 'Guess a letter!',
}


prompt(question).then(answers => {
    console.log(answers)
})