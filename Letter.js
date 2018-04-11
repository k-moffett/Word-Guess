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
        let array = []
        console.log(this.letter, this.guessed, '(in update_guess)')
        if (array.includes(this.letter) === false) {
            this.guessed = true
        }
        else if (array.includes(this.letter) === true) {
            return this.guessed
        }
        array.push(this.letter) 
     }
}

module.exports = Letter

