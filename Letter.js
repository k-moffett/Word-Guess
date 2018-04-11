class Letter {
    constructor(letter, guessed) {
        this.letter = letter
        if (guessed === true) {
            this.guessed = true
        }
        else {this.guessed = false}
    }

    display_letter(letter) {
        if (this.guessed === false) {
            letter = '_'
            return letter
        }
        else if (this.guessed === true) {
            letter = this.letter
            return letter
        }
    }

    update_guessed(current_word) {
        let array = current_word.word_letters
        if (array.includes(this.letter.toString()) === true) {
            this.guessed = true
            console.log("CORRECT!!!")
            return this
        }
        else if (array.includes(this.letter.toString()) === false) {
            console.log("WRONG, dummy...")
            //tell app to repeat the question from here to prevent error
        }
     }
}

module.exports = Letter

