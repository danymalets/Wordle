const letterNotFound = "grey-tile"
const letterExists = "yellow-tile"
const letterGuessed = "green-tile"

function checkWord(word, answer){
    let result = new Array(5).fill(letterNotFound)
    for (let i = 0; i < word.length; i++){
        if (word[i] === answer[i])
            result[i] = letterGuessed
    }
    for (let i = 0; i < answer.length; i++){
        for (let j = 0; j < word.length; j++){
            if (answer[i] === word[j] && result[j] === letterNotFound){
                result[j] = letterExists
                break
            }
        }
    }
    return result
}