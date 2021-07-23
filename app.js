/**
 * TRIVIA QUIZ APP
 * Author: Jim N. Ogana
 * Vanilla Javascript,HTML,CSS
 * May 2021
 * 
 */

// Links to question arrays  
// -imported as scripts in index.html-
const questionsCat1 = usHistory
const questionsCat2 = modernEurope
const questionsCat3 = worldWar2
const questionsCat4 = harryPotter

// UI interactive colors
const liSelectBgColor = "#ddd"
const liUnSelectBgColor = ""
const selectionBgColor = "cornflowerblue"
const correctAnsWasColor = "#ff0040"
const catInvalidBgColor = "gray"
const multichoiceBgColor = "#ddd"

// Grab HTML elements
const categoriesUl = document.querySelector(".categoriesUl")
const category1 = document.querySelector('#category1')
const category2 = document.querySelector('#category2')
const category3 = document.querySelector('#category3')
const category4 = document.querySelector('#category4')
const question = document.querySelector("#question")
const ansA = document.querySelector("#choiceA")
const ansB = document.querySelector("#choiceB")
const ansC = document.querySelector("#choiceC")
const ansD = document.querySelector("#choiceD")
const submitBtn = document.querySelector(".submit")
const quitBtn = document.querySelector(".quit")
const btnNext = document.querySelector(".next")
const quizWrapper = document.querySelector('.quizWrapper')
const choicesDiv = document.querySelector('.choices')
const startPage = document.querySelector('.startPage')
const scoreDiv = document.querySelector(".score")
const questionHeader = document.querySelector("#questionHeader")
const selectedCategory = document.querySelector("#selectedCategory")
const resultsDiv = document.querySelector(".resultsDiv")
const btnReturn = document.querySelector("#btnReturn")
const btnBeginQuiz = document.querySelector("#btnBeginQuiz")
const errPrompt = document.querySelector("#errPrompt")
const beginError = document.querySelector("#begin-error")
const noAnsError = document.querySelector('#err-select-ans')

let selectedChoice = ""

const scoreArray = [0, 0, 0, 0]
const categoryPlayed = [0, 0, 0, 0]
let scoreCategoryId = 0
let submitEnable = false
let beginEnable = false

// Multi-Choice selection section
categoriesUl.addEventListener("click", event => {
    // reset score, enable begin button, clear error message 
    scoreDiv.innerText = 0
    beginEnable = true
    beginError.innerHTML = ""

    // reset multi-choice bg colors
    category1.style.backgroundColor = liUnSelectBgColor
    category2.style.backgroundColor = liUnSelectBgColor
    category3.style.backgroundColor = liUnSelectBgColor
    category4.style.backgroundColor = liUnSelectBgColor

    if (event.target.id === "category1") {
        loadCategory(questionsCat1)
        submitEnable = true

        scoreCategoryId = 0
        categoryPlayed[0] = 1
        // change bg of selected item
        category1.style.backgroundColor = liSelectBgColor
        category2.style.backgroundColor = liUnSelectBgColor
        category3.style.backgroundColor = liUnSelectBgColor
        category4.style.backgroundColor = liUnSelectBgColor
    }
    else if (event.target.id === "category2") {
        loadCategory(questionsCat2)

        scoreCategoryId = 1
        categoryPlayed[1] = 1

        category1.style.backgroundColor = liUnSelectBgColor
        category2.style.backgroundColor = liSelectBgColor
        category3.style.backgroundColor = liUnSelectBgColor
        category4.style.backgroundColor = liUnSelectBgColor
    }
    else if (event.target.id === "category3") {
        loadCategory(questionsCat3)

        scoreCategoryId = 2
        categoryPlayed[2] = 1

        category1.style.backgroundColor = liUnSelectBgColor
        category2.style.backgroundColor = liUnSelectBgColor
        category3.style.backgroundColor = liSelectBgColor
        category4.style.backgroundColor = liUnSelectBgColor
    }
    else {
        loadCategory(questionsCat4)

        scoreCategoryId = 3
        categoryPlayed[3] = 1

        category1.style.backgroundColor = liUnSelectBgColor
        category2.style.backgroundColor = liUnSelectBgColor
        category3.style.backgroundColor = liUnSelectBgColor
        category4.style.backgroundColor = liSelectBgColor
    }

})

// Multi-choice section user interactivity
choicesDiv.addEventListener('click', (event) => {
    if (event.target.id !== "") {
        // get user-selected choice from target.id
        const selection = event.target.id
        selectedChoice = selection
        // clear no-selection-made error message
        noAnsError.innerHTML = ""
        // set background of selected answer choice
        resetMultiChoiceBg()
        document.getElementById(selection).style.backgroundColor = selectionBgColor;
    }
})

// Reset backgrounds of multi-choice divs
function resetMultiChoiceBg() {
    ansA.style.backgroundColor = multichoiceBgColor;
    ansB.style.backgroundColor = multichoiceBgColor;
    ansC.style.backgroundColor = multichoiceBgColor;
    ansD.style.backgroundColor = multichoiceBgColor;
}

// Function to load category of questions
function loadCategory(quesCatArray) {
    let i = 1
    let answer = ""
    let nextCount = 0
    quizQuestions(i)

    // LOAD QUESTION & CHOICES INTO HTML/Decode answer key
    function quizQuestions(i) {

        nextEnable = false
        submitEnable = true


        // display current category
        selectedCategory.innerText = `${quesCatArray[0].categoryName}`
        // display question x of total
        questionHeader.innerHTML = `&nbsp;&nbsp;Question ${i} of ${quesCatArray.length - 1}`
        // load question
        question.innerText = quesCatArray[i].question
        // load answer choices into page
        ansA.innerText = quesCatArray[i].choiceA
        ansB.innerText = quesCatArray[i].choiceB
        ansC.innerText = quesCatArray[i].choiceC
        ansD.innerText = quesCatArray[i].choiceD

        // Answer key fetched from question object
        let key = quesCatArray[i].key

        // Decode answer key
        if (key === 1000) { answer = "choiceA" }
        else if (key === 0100) { answer = "choiceB" }
        else if (key === 0010) { answer = "choiceC" }
        else if (key === 0001) { answer = "choiceD" }


        // "SUMBIT" button functionality
        submitBtn.addEventListener('click', (event) => {
            if (submitEnable === true) {
                if (selectedChoice === answer) {
                    scoreArray[scoreCategoryId]++
                    scoreDiv.innerText = scoreArray[scoreCategoryId]
                    // enable to move to next question
                    nextEnable = true
                    submitEnable = false
                    selectedChoice = ""
                }
                else if (selectedChoice === "") {
                    noAnsError.innerHTML = "Please Make A Selection First"
                }
                else {
                    // display correct answer
                    document.getElementById(answer).style.backgroundColor = correctAnsWasColor;
                    nextEnable = true
                    submitEnable = false
                    selectedChoice = ""
                }
            }
        })

        // "NEXT" button functionality
        btnNext.addEventListener('click', nextQuestion)
        function nextQuestion() {
            if (i < quesCatArray.length - 1 && nextCount != quesCatArray.length) {

                if (nextEnable === true) {
                    i++
                    nextCount++
                    resetMultiChoiceBg()
                    quizQuestions(i)
                }
            }
            else {
                quizWrapper.style.display = "none"
                quizQuestions(1)
                resetMultiChoiceBg()
                resultsPage()
                submitEnable = false
                nextCount = 0
            }
        }
    }
}

// Go to results page
function resultsPage() {
    resultsDiv.style.display = "block"
    const pointsTally = document.querySelector("#pointsTally")
    pointsTally.innerHTML = `Your score this category: ${scoreArray[scoreCategoryId]}`
}

// Reload the first page
function firstPage() {
    location.reload()
}

// "BEGIN" button functionality
btnBeginQuiz.addEventListener('click', (event) => {
    if (beginEnable === true) {
        scoreArray[scoreCategoryId] = 0    // reset score
        startPage.style.display = "none"
        quizWrapper.style.display = "block"
    }
    else {
        // display error message
        beginError.innerHTML = "<span>Please Select A Category First</span>"
    }
})

// "QUIT" button functionality
quitBtn.addEventListener("click", quitQuiz)
function quitQuiz() {
    let conf = confirm("Are you sure?")
    if (conf == true) {
        selectedChoice = ""
        categoryScore = 0
        scoreArray[scoreCategoryId] = 0  //reset score
        resetMultiChoiceBg()
        firstPage()
    }

}

// "RETURN" button functionality
btnReturn.addEventListener("click", firstPage)
