
// CATEGORY SELECTION

// Set links to question category arrays
const questionsCat1 = quesCatArray0
const questionsCat2 = quesCatArray1
const questionsCat3 = quesCatArray2
const questionsCat4 = quesCatArray3
const liSelectBgColor = "#ccc"
const liUnSelectBgColor = "white"

// Grab UL holding the category selections
const categoriesUl = document.querySelector(".categoriesUl")
const category1 = document.querySelector('#category1')
const category2 = document.querySelector('#category2')
const category3 = document.querySelector('#category3')
const category4 = document.querySelector('#category4')


categoriesUl.addEventListener("click", event => {


    if (event.target.id === "category1") {
        loadCategory(questionsCat1)

        // const category1 = document.querySelector('#category1')
        // let origTxt = category1.innerText
        // category1.innerHTML = `${origTxt} &#10003`
        category1.style.backgroundColor = liSelectBgColor
        category2.style.backgroundColor = liUnSelectBgColor
        category3.style.backgroundColor = liUnSelectBgColor
        category4.style.backgroundColor = liUnSelectBgColor
    }
    else if (event.target.id === "category2") {
        loadCategory(questionsCat2)
        // let origTxt = category2.innerText
        // category2.innerHTML = `${origTxt} &#10003`
        category1.style.backgroundColor = liUnSelectBgColor
        category2.style.backgroundColor = liSelectBgColor
        category3.style.backgroundColor = liUnSelectBgColor
        category4.style.backgroundColor = liUnSelectBgColor
    }
    else if (event.target.id === "category3") {
        loadCategory(questionsCat3)
        // let origTxt = category3.innerText
        // category3.innerHTML = `${origTxt} &#10003`

        category1.style.backgroundColor = liUnSelectBgColor
        category2.style.backgroundColor = liUnSelectBgColor
        category3.style.backgroundColor = liSelectBgColor
        category4.style.backgroundColor = liUnSelectBgColor
    }
    else {
        loadCategory(questionsCat4)
        // let origTxt = category4.innerText
        // category4.innerHTML = `${origTxt} &#10003`
        category1.style.backgroundColor = liUnSelectBgColor
        category2.style.backgroundColor = liUnSelectBgColor
        category3.style.backgroundColor = liUnSelectBgColor
        category4.style.backgroundColor = liSelectBgColor
    }

})
const cat1 = document.getElementById("category1")




//*************************

const question = document.querySelector("#question")
const ansA = document.querySelector("#choiceA")
const ansB = document.querySelector("#choiceB")
const ansC = document.querySelector("#choiceC")
const ansD = document.querySelector("#choiceD")
const submitBtn = document.querySelector(".submit")
const quitBtn = document.querySelector(".quit")
const nextBtn = document.querySelector(".next")
const qWrapper = document.querySelector('.qWrapper')
const choicesDiv = document.querySelector('.choices')
const startPage = document.querySelector('.startPage')
const scoreDiv = document.querySelector(".score")
const questionHeader = document.querySelector("#questionHeader")
const selectedCategory = document.querySelector("#selectedCategory")
const resultsDiv = document.querySelector(".resultsDiv")

const btnBeginQuiz = document.querySelector("#btnBeginQuiz")


let selectedChoice = ""
choicesDiv.addEventListener('click', (event) => {

    // console.log('You clicked me!')
    // console.log(event.target.id)

    // get answer key

    if (event.target.id !== "") {
        const selection = event.target.id
        selectedChoice = selection

        resetMultiChoiceBg()
        // set background of selected ans
        document.getElementById(selection).style.backgroundColor = "green";  // TEST color... change it to appropriate one
    }
})

// reset backgrounds of  multi-choice divs
function resetMultiChoiceBg() {
    ansA.style.backgroundColor = "#ddd";
    ansB.style.backgroundColor = "#ddd";
    ansC.style.backgroundColor = "#ddd";
    ansD.style.backgroundColor = "#ddd";
}

// ######### TOTAL SCORE ###########
let totalScore = 0 //running tally?



function loadCategory(quesCatArray) {

    let categoryScore = 0
    let i = 1
    let answer = ""
    quizQuestions(i)



    function quizQuestions(i) {
        // i++
        nextEnable = false
        submitEnable = true

        // Base case for recursion -> exit and show results if prev question was last
        if (i === quesCatArray - 1) {
            return
        }

        // load questions and answer choices into HTML page
        selectedCategory.innerText = `CATEGORY: ${quesCatArray[0].categoryName}`
        questionHeader.innerHTML = `&nbsp;&nbsp;Question ${i} of ${quesCatArray.length - 1}`
        question.innerText = quesCatArray[i].question
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


        // SUMBIT event listener
        submitBtn.addEventListener('click', (event) => {
            if (submitEnable === true) {
                if (selectedChoice === answer) {
                    console.log('You are correct!')

                    categoryScore++
                    totalScore++
                    scoreDiv.innerText = categoryScore
                    // enable to move to next
                    nextEnable = true
                    submitEnable = false
                    selectedChoice = ""

                }
                else if (selectedChoice === "") {
                    alert('please make a selection first.')
                }
                else {
                    console.log('Wrong!')
                    console.log(selectedChoice)
                    // DO WRONG ANSWER STUFF
                    // show correct answer
                    document.getElementById(answer).style.backgroundColor = "red";  // TEST color... change it to appropriate one
                    console.log(answer)
                    nextEnable = true
                    submitEnable = false
                    selectedChoice = ""
                }
            }
        })
        // nextBtn.addEventListener('click', (event) => {
        //     if (nextEnable === true) {
        //         console.log('Yes you clicked next.')

        //         i++
        //         resetMultiChoiceBg()
        //         // submitEnable = true
        //         quizQuestions(i)

        //     } else { console.log('Do stuff before you can click next.') }
        // })


        nextBtn.addEventListener('click', nextQuestion)
        function nextQuestion() {

            if (i < quesCatArray.length - 1) {

                if (nextEnable === true) {
                    console.log('Yes you clicked next.')

                    i++
                    console.log(i, quesCatArray.length)
                    resetMultiChoiceBg()
                    quizQuestions(i)

                } else {
                    // qWrapper.style.display = "none"

                    console.log('Do stuff before you can click next.')
                }

            }
            else {
                qWrapper.style.display = "none"
                console.log('Going to results page!')
                resultsPage()
            }
        }



        //go to results end page


        function resultsPage() {

            // qWrapper.innerHTML = "" //Hide it instead
            // const scoreP = document.createElement("p")
            const scoreP = document.querySelector("#scoreP")
            scoreP.innerHTML = `Your score this category: ${categoryScore} <br/> Your overall score: ${totalScore}`
            // qWrapper.appendChild(scoreP)

            // const goBackButton = document.createElement("button")
            // goBackButton.innerText = "DONE"
            // qWrapper.appendChild(goBackButton)
        }



    }
}
function firstPage() {

    // hide qWrapper contents
    // display 'select category'
    // when selected, lock out categories and unhide qWrapper contents

}

btnBeginQuiz.addEventListener('click', (event) => {
    startPage.style.display = "none"
    qWrapper.style.display = "block"

})

quitBtn.addEventListener("click", quitQuiz)
function quitQuiz() {
    //alert and then quit when confirmed
    let conf = confirm("Are you sure?")
    if (conf == true) {
        startPage.style.display = "block"
        qWrapper.style.display = "none"

    }

}

// when btnBeginQuiz clicked, hide firstpage, unhide qWrapper

// when quiz ends hide qWrapper, unhide results