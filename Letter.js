class Letter {
    constructor(letter, guessed) {
        this.letter = letter
        this.guessed = guessed
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
        if (this.letter === letter) {
            this.guessed = true
        }
        else if (this.letter != letter) {
            return this.guessed
        }
    
    }
}

let character = new Letter('s', true)
console.log(character.display_letter())
console.log(character.update_guessed())
