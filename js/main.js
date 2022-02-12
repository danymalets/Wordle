document.addEventListener("DOMContentLoaded", () => {
    loadWords().then(() => {
        const triesCount = 6
        const wordLength = 5

        let currentTryIndex = 0
        let currentLetterIndex = 0

        let board = [[]]

        const answer = generateWord()
        console.log(answer)
        createSquares()
        initKeys()

        function initKeys() {
            const keys = document.querySelectorAll('.keyboard-row button')

            for (let i = 0; i < keys.length; i++) {
                keys[i].onclick = ({ target }) => {
                    const key = target.getAttribute("data-key")
                    if (key === "enter"){
                        if (currentLetterIndex === wordLength){
                            let word = ""
                            let currentWord = board[currentTryIndex]
                            for (let i = 0; i < currentWord.length; i++){
                                word += currentWord[i].textContent
                            }
                            if (wordExists(word)){
                                const result = checkWord(word, answer)
                                for (let i = 0; i < currentWord.length; i++){
                                    setTimeout(() => {
                                        currentWord[i].classList.add(result[i])
                                        currentWord[i].classList.add("square-rotation")
                                    }, i * 500)
                                }

                                currentTryIndex++
                                currentLetterIndex = 0
                            }
                            else{
                                alert("wor not exist")
                            }
                        }
                        else{
                            alert("enter word")
                        }
                    }
                    else if (key === "delete"){
                        if (currentLetterIndex !== 0){
                            currentLetterIndex--
                            board[currentTryIndex][currentLetterIndex].textContent = ""
                            board[currentTryIndex][currentLetterIndex].classList.remove('square-with-letter')
                        }
                    }
                    else{
                        if (currentLetterIndex < wordLength){
                            board[currentTryIndex][currentLetterIndex].textContent = key
                            board[currentTryIndex][currentLetterIndex].classList.add('square-with-letter')
                            currentLetterIndex++
                        }
                    }
                };
            }
        }

        function createSquares() {
            const gameBoard = document.getElementById("board")

            for (let i = 0; i < triesCount; i++){
                let currentWord = document.createElement("tr")
                currentWord.classList.add("word")
                gameBoard.appendChild(currentWord)

                board.push([])

                for (let j = 0; j < wordLength; j++){
                    let square = document.createElement("td")
                    square.classList.add("square")
                    square.setAttribute("id", (i+1).toString())
                    currentWord.appendChild(square)

                    board[i].push(square)
                }
            }
        }
    })
})