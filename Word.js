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
        console.log(array.join(" "))//result to display
    }
}

let new_word = new Word('cat')
new_word.word_string()

