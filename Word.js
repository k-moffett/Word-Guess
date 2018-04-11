let Letter = require('./Letter.js')

class Word {
    constructor(word) {
        this.word_letters = Array.from(word)
    }

    word_string() {
        let array = []
        this.word_letters.map((x) => {
           let temp = new Letter(x)
           array.push(temp.display_letter())
        })
        console.log(array.join(" "), '(in Word.js)')//result to display
    }

    guess() {
        console.log(this.word_letters, "(first log in guess function)")
        this.word_letters.map((x) => {
            let temp = new Letter(x)
            temp.update_guessed()
        })
    }
}

let new_word = new Word('cat')
//new_word.word_string() returns the "_ _ _ (in Word.js)"
new_word.guess()
