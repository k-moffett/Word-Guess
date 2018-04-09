

let word_array = ['c', 'a', 't']



const return_char = (char) => {
let result = word_array.map((letter) => {
            if (char != letter) {
                char = '_'
                return char
            }
            else if (char === letter) {
                return char
            }
        })
        return result
}

const update_guessed = () => {

}

let Letter = function(char){
    this.character = char
    this.guessed = false
    this.display_char = return_char(char)
    this.been_guessed = update_guessed(char)
}

let word = new Letter(word_array[0])
console.log(word)


