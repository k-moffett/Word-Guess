let Letter = require('./Letter.js')

class Word {
    constructor(word) {
        this.word_letters = Array.from(word)
    }

    word_string() {
        let array = [] //update the guessed value for the matching letter when a correct result is given from update_guessed
        let display_array = [] //array to return to update guessed value
        let arrays = {
            array,
            display_array
        }
        this.word_letters.map((x) => {
           let temp = new Letter(x)
           display_array.push(temp)
           array.push(temp.display_letter())
        })
        console.log(array.join(" "), '(in Word.js)')//result to display
        return arrays
    }

    guess(current_word) {
        let x = this.word_letters
            let temp = new Letter(x)
            console.log(temp, "GUESS IN WORD")
            let current_guess = temp.update_guessed(current_word)
            
            return current_guess
    }
}

module.exports = Word

