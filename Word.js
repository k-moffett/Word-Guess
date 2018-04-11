let Letter = require('./Letter.js')

class Word {
    constructor(word) {
        this.word_letters = Array.from(word)
    }

    word_string() {
        let array = [] 
        let display_array = [] 
        let arrays = {
            array,
            display_array
        }
        this.word_letters.map((x) => {
           let temp = new Letter(x)
           display_array.push(temp)
           array.push(temp.display_letter())
        })
        console.log(array.join(" "))
        return arrays
    }

    guess(current_word) {
        let x = this.word_letters
            let temp = new Letter(x)
            let current_guess = temp.update_guessed(current_word)
            
            return current_guess
    }
}

module.exports = Word

