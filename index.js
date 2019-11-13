/*
  - when the start button is clicked - render the quiz info section and render the quiz question container section, 
  the quiz question container is the one that will have cycled through each question and each feedback screen 
*/

function startQuiz() {
    $('.container').on('click', '.start', function (event) {
        event.preventDefault();
        // render question container and quiz info containers
        // then render the question in the question container
        generateHTMLContainers();
        renderContainers();
        generateQuestionHTML();
        handleSubmit();
        nextQuestion();
        handleFinish();
        handleRestart();
    });
}

function generateHTMLContainers() {
  return `<section class='question-container'>
    ${generateQuestionHTML()}
  </section>
  <section class='quiz-info'>
    <span class="score">Score:<span class="score-data">${STORE.score}</span></span>
    <span class="count">Question:<span class="count-data">${STORE.currentQuestion + 1}</span>/5</span>
  </section>`
}

function renderContainers() {
  $('main').html(generateHTMLContainers());
}

function generateQuestionHTML() {
    const question = STORE.questions[STORE.currentQuestion].question;
    const answers = STORE.questions[STORE.currentQuestion].answers;
    const options = answers.map(answer => { 
      return `<input type="radio" name="answer" value="${answer}" required>${answer}`
    }).join('');

    const questionHTML = `<form class='question-form'>
      <fieldset>
        <legend>${question}</legend>
        ${options}
        <input type='submit' value="Submit"/>
      </fieldset>
    </form>`

    return questionHTML;
  }
    // cool, thats it. so now when you submit, we'll target question container and render the feedback, then when next is clicked target it again and repeat render question etc
    // clear from here?

function correctFinalAnswer() {
  return `<p>That is correct! Hit "Finish" to complete the quiz!</p>`
}

function wrongFinalAnswer() {
  return `<p>That is incorrect, ${STORE.questions[STORE.currentQuestion].correctAnswer} is the correct answer. Hit "Finish" to complete the quiz.</p>`
}


function scoreFinalAnswer() {
  let answer = $('input[type="radio"][name="answer"]:checked').val();
  let correct = STORE.questions[STORE.currentQuestion].correctAnswer;
  if(answer === correct) {
    increaseScore();
    return correctFinalAnswer();
  } else {
    return wrongFinalAnswer();
  }
}


function generateFinalFeedback() {
  return `<section class='feedback-container'>
    <h2>${STORE.questions[STORE.currentQuestion].question}</h2>
    ${scoreFinalAnswer()} 
  </section>
  <div class="final-question">
        <input type='submit' value="Finish"/>
    </div>
  <section class='quiz-info'>
    <span class="score">Score:<span class="score-data">${STORE.score}</span></span>
    <span class="count">Question:<span class="count-data">${STORE.currentQuestion + 1}</span>/5</span>
  </section>`
}

function renderFinalFeedback() {
  $('main').html(generateFinalFeedback());
}

function handleSubmit() {
  $('.question-form').on('submit', function (event) {
    event.preventDefault();
  if(STORE.currentQuestion === 4) {
    return renderFinalFeedback();
  } else {
    return renderFeedbackHTML();
  }
    
  });
}

function renderFeedbackHTML() {
  $('main').html(generateFeedbackHTML()); 
}

function generateFeedbackHTML() { 
  return `<section class='feedback-container'>
    <h2>${STORE.questions[STORE.currentQuestion].question}</h2>
    ${scoreAnswer()} 
  </section>
  <div class="next-question">
        <input type='submit' value="Next"/>
    </div>
  <section class='quiz-info'>
    <span class="score">Score:<span class="score-data">${STORE.score}</span></span>
    <span class="count">Question:<span class="count-data">${STORE.currentQuestion + 1}</span>/5</span>
  </section>`
}

function correctAnswer() { 
  return `<p>That is correct! Hit "Next" to continue!</p>`
}

function wrongAnswer() { 
  return `<p>That is incorrect, ${STORE.questions[STORE.currentQuestion].correctAnswer} is the correct answer. Hit "Next to continue.</p>`
}

function increaseScore() { 
  STORE.score++;
}

function scoreAnswer() {
  let answer = $('input[type="radio"][name="answer"]:checked').val();
  let correct = STORE.questions[STORE.currentQuestion].correctAnswer;
  if(answer === correct) {
    increaseScore();
    return correctAnswer();
  } else {
    return wrongAnswer();
  }
}

function increaseCurrentQuestion() {
  STORE.currentQuestion++;
}

function nextQuestion() {
  $('.container').on('click','.next-question', function (event) {
    event.preventDefault();
    increaseCurrentQuestion();
    renderContainers();
    handleSubmit();
  });
}

function generateFinishHTML() {
  return `<section class='finish-container'>
    <h2>Congratulations! You've completed the Workout Quiz!</h2> 
    <p>Click "Restart" to take the quiz again!</p>
  </section>
  <section class='quiz-info'>
    <span class="final-score">Your Final Score: <span class="final-score-data">${STORE.score}</span></span>
  </section>
  <div class="restart-quiz">
        <input type='submit' value="Restart"/>
  </div>`
}

function renderFinishHTML() {
  $('main').html(generateFinishHTML());
}

function handleFinish() {
  $('.container').on('click', '.final-question', function (event) {
    event.preventDefault();
    renderFinishHTML();
  });
}

function turnOffNextQuestion() {
   $('.container').off('click','.next-question');
}

function resetQuizData() {
  STORE.score = 0,
  STORE.currentQuestion = 0;
}

function generateRestartHTML() {
  return `<main class="container">
      <h2 class="question-title">Welcome to the Workout Quiz! Click "Start" to begin!</h2>
      <form class="start-quiz">
          <input class="start" type="submit" value="Start">
      </form>
    </main>`
}

function renderRestartHTML() {
  $('main').html(generateRestartHTML());
}

function handleRestart() {
  $('.container').on('click', '.restart-quiz', function (event) {
    event.preventDefault();
    turnOffNextQuestion();
    resetQuizData();
    renderRestartHTML();
  });
}

$(startQuiz);

