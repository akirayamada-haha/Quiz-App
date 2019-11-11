/*
  - when the start button is clicked - render the quiz info section and render the quiz question container section, 
  the quiz question container is the one that will have cycled through each question and each feedback screen 
*/

function startQuiz() {
    $('.container').on('click', '.start', function (event) {
        event.preventDefault();
        renderQuestion()
        renderSubmitButton();
        renderScore();
        renderQuestionCount();
        checkCorrectAnswer();
    })
}

//Creates the first question
//Co-authored-by: chazlee98@gmail.com <chazlee98@gmail.com>//
function renderQuestion() {
    $('.question-title').text(STORE.questions[STORE.currentQuestion].question);

    let question = STORE.questions[STORE.currentQuestion];
    for (let i = 0; i < question.answers.length; i++) {
        $('.answer-choices').append(`<input type="radio" name="answer" value="${question.answers[i]}" required>${question.answers[i]}`);
        $('.start').hide();
        $('.submit').show(); // hello
    }
}


/*function renderSubmitButton() {
    $('.start').html(`<input class="submit" type="submit" value="Submit">`);
}*/

function renderScore() {
    $('.score-and-count').append(`<span class="score">Score:<span class="score-data">0</span></span>`);
}

function renderQuestionCount() {
    $('.score-and-count').append(`<span class="count">Question:<span class="count-data">0</span>/5</span>`);
}

//creates feedback upon selecting and submitting correct answer
function correctAnswer() {
    $('.answer-choices').after('<h3>That is correct! Hit "Next" to continue!</h3>');

}

//creates feedback upon selecting and submitting incorrect answer
function wrongAnswer() {
    $('.answer-choices').after('<h3>Incorrect. ${STORE.questions[STORE.currentQuestion].correctAnswer} is the correct answer. Hit "Next" to conintue</h3>');
}

//changes submit button to next button
function renderNextButton() {
    $('.submit').html(`<input class="submit" type="submit" value="Next">`);

/*function updateCurrentQuestion() {
    STORE.currentQuestion++;
    $('')
}

function updateScore() {

}*/

//checks if answer is correct, then runs relative functions
function checkCorrectAnswer() {
    $('.submit').on('click', function (event) {
        event.preventDefault();
        let correct = $('STORE.questions[STORE.currentQuestion].correctAnswer').val();
        $('STORE.questions[STORE.currentQuestion].correctAnswer').val('');
        let answer = $('input[type="radio"][name="answer"]:checked').val();

    if(answer === correct) {
        correctAnswer();
    }   else {
        wrongAnswer();
    }
    renderNextButton();
    updateCurrentQuestion();
    updateScore();
    });
}

//setting currentQuestion value so generateQuestion and renderQuestion know which element in the array to pick from 

//on clicking start, replace landing page html with question 1 html, pulled from store

//generate question 1 html

//render question 1 html

//when answer is submitted, check against correctAnswer

//based on answer selected, when submit is clicked, give feedback and update html with next button

//generate feedback

//render feedback

//update score and counter

//on clicking next, replace question 1 page html with question 2 html, pulled from store

//generate question 2 html

//render question 2 html

//when answer is submitted, check against correctAnswer

//based on answer selected, when submit is clicked, give feedback and update html with next button

//generate feedback

//render feedback

//update score and counter

//on clicking next, replace question 2 page html with question 3 html, pulled from store

//generate question 3 html

//render question 3 html

//when answer is submitted, check against correctAnswer

//based on answer selected, when submit is clicked, give feedback and update html with next button

//generate feedback

//render feedback

//update score and counter

//on clicking next, replace question 3 page html with question 4 html, pulled from store

//generate question 4 html

//render question 4 html

//when answer is submitted, check against correctAnswer

//based on answer selected, when submit is clicked, give feedback and update html with next button

//generate feedback

//render feedback

//update score and counter

//on clicking next, replace question 4 page html with question 5 html, pulled from store

//generate question 5 html

//render question 5 html

//when answer is submitted, check against correctAnswer

//based on answer selected, when submit is clicked, give feedback and update html with finish button

//generate feedback

//render feedback

//Upon clicking finish, replace question 5 page html with final page html and restart button

//generate final page

//render final page


$(startQuiz);