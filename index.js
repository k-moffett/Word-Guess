let Word = require('./Word.js')
let Letter = require('./Letter.js')
let inquirer = require('inquirer')
let util = require('util')

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
let words = ['fleeble', 'scribbs', 'blooky', 'nopperdome', 'lankrank']
let current_word 
let both_arrays 

const random_word = () => {
    let new_word = words[Math.floor(Math.random() * words.length)]
    let temp = new Word(new_word)
    both_arrays = temp.word_string()
    console.log(temp, "INDEX")
}

random_word() 

inquirer.prompt(question).then(answers => {
    let temp = new Word(answers.current_guess)
    let current_guess = temp.guess(current_word)
    let display = Array.from(both_arrays.display_array)
    let letter_array = []
    let final_array = []
    //for loop makes me sad
    for (i=0; i<display.length; i++) {
        letter_array.push(display[i].letter)
    }
    if (letter_array.includes(current_guess.letter.toString()) === true) {
        let letter_index = letter_array.indexOf(current_guess.letter.toString())
        display[letter_index].guessed = true
        for (i=0; i<display.length; i++) {
            let a = display[i].letter
            let b = display[i].guessed
            let final_letter = new Letter(a,b)
            final_array.push(final_letter.display_letter())
        }
    }
    console.log(final_array.join(" "))
});

