let Letter = require('./Letter.js')

class Word {
    constructor(word) {
        this.word_letters = Array.from(word)
    }

    word_string() {
        let array = [] //update the guessed value for the matching letter when a correct result is given from update_guessed
        let display_array = [] //array to return to update guessed value
        this.word_letters.map((x) => {
           let temp = new Letter(x)
           display_array.push(JSON.stringify(temp))
           array.push(temp.display_letter())
        })
        console.log(array.join(" "), '(in Word.js)')//result to display
        console.log(typeof display_array)
        return array
    }

    guess(current_word) {
        let x = this.word_letters
            let temp = new Letter(x)
            let current_guess = temp.update_guessed(current_word)
            if (current_guess.guessed === undefined) {
                //do nothing
            } 
            else {
                return current_guess
            }
    }
}

module.exports = Word

