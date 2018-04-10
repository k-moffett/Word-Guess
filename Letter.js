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

    update_guessed(letter) {
        //console.log(this.letter, this.guessed, '(in Letter.js)')
        console.log(this.letter)
        if (this.letter === letter) {
            this.guessed = true
        }
        else if (this.letter != letter) {
            return this.guessed
        } 
    }
}

module.exports = Letter

