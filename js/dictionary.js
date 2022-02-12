const allWordsUrl = "https://raw.githubusercontent.com/danymalets/words-repository/main/ru-all-words.txt"
const popularWordsUrl = "https://raw.githubusercontent.com/danymalets/words-repository/main/ru-popular-words-5-letters.txt"

let allWords = []
let popularWords = []

function loadWords(){
    return new Promise((resolve, reject) => {
        getFiveLetterWords(allWordsUrl).then(words => {
            allWords = words
            getFiveLetterWords(popularWordsUrl).then(words => {
                popularWords = words
                resolve()
            })
        })
    })
}

function generateWord(){
    return popularWords[Math.floor(Math.random() * popularWords.length)]
}

function wordExists(word){
    return allWords.includes(word)
}

function getFiveLetterWords(url){
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            response.text().then((text) => {
                resolve(text.split('\n').filter(word => word.length === 5))
            })
        })
    })
}