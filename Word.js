let Letter = require('./Letter.js')

class Word {
    constructor(word) {
        this.word_letters = Array.from(word)
    }

    word_string() {
        let array = [] //update the guessed value for the matching letter when a correct result is given from update_guessed
        this.word_letters.map((x) => {
           let temp = new Letter(x)
           //console.log(temp, "(word_string update guessed value for this object)")
           array.push(temp.display_letter())
        })
        console.log(array.join(" "), '(in Word.js)')//result to display
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

