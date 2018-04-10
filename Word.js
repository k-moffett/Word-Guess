let Letter = require('./Letter.js')

class Word {
    constructor(word) {
        this.word_letters = Array.from(word)
        //console.log(this.word_letters)
    }

    word_string() {
        this.word_letters.map((x) => {
           let temp = new Letter(x)
           console.log(temp.display_letter())
        })
    }
}

let new_word = new Word('cat')
new_word.word_string()

