

let word_array = ['c']



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




let Letter = function(char){
    this.character = char
    this.guessed = false
    this.display_char = return_char(char)
    this.check_char = (param) => {

    }
}

let word = new Letter(word_array[0])
console.log(word)


