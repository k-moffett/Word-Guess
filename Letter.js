class Letter {
    constructor(letter, guessed) {
        this.letter = letter
        this.guessed = false
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
        //console.log(current_word.word_letters, "LETTER")
        let array = current_word.word_letters
        //console.log(this.letter, this.guessed, '(in update_guess)')
        if (array.includes(this.letter.toString()) === true) {
            this.guessed = true
            console.log("CORRECT!!!")
        }
        else if (array.includes(this.letter.toString()) === false) {
            console.log("WRONG, dummy...")
        }
     }
}

module.exports = Letter

