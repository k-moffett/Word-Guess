let Word = require('./Word.js')
let inquirer = require('inquirer')
let words = ['fleeble', 'scribbs', 'blooky', 'nopperdome', 'lankrank']
let question = {
    type: 'input',
    name: 'current_guess',
    message: 'Guess a letter!',
    validate: (x) => {
        if(x.length === 1) {
            return true
        }
        else if (x.length > 1){
            console.log('   Sorry, you can only guess one letter at a time dummy.')
        }
    }
}
let current_word 
let being_guessed 

const random_word = () => {
    let new_word = words[Math.floor(Math.random() * words.length)]
    let temp = new Word(new_word)
    current_word = temp
    being_guessed = temp.word_string()
    //being_guessed = temp.word_string()
    console.log(current_word, "INDEX")
}

random_word() // generates a random word

inquirer.prompt(question).then(answers => {
    let temp = new Word(answers.current_guess)
    let current_guess = temp.guess(current_word)
    console.log(being_guessed) //can access being_guessed
    console.log(current_guess, "RETURNED VALUE FROM LETTERS")
});