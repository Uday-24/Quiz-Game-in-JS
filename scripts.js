const [loadQuestion, option1, option2, option3, option4] = document.querySelectorAll('#question, #option_1, #option_2, #option_3, #option_4');
const submit = document.querySelector('#submit');
const options = document.querySelectorAll('.answer');
const quiz = document.querySelector('#quiz');

let currentQuiz = 0;
let score = 0;

const getRandomData = () => {
  let data = [];
  for (let i = 1; i <= 5; i++) {
    let num = Math.round(Math.random() * quizAllData.length)
    data.push(quizAllData[num]);
  }
  return data;
}

const quizData = getRandomData();
console.log(quizData);



const loadQuiz = () => {
  let { question, options } = quizData[currentQuiz];
  loadQuestion.innerText = (currentQuiz + 1) + ": " + question;
  options = Array.from(options);
  options.forEach((curr, idx) => {
    let elem = window[`option_${idx + 1}`];
    elem.innerText = curr;
  });
}

loadQuiz();

const selectedOption = () => {
  // let ans_index = -1;
  // options.forEach((curr, idx) => {
  //   if(curr.checked){
  //     ans_index = idx;
  //   };
  // });
  // return ans_index;

  let arr_options = Array.from(options);
  return arr_options.findIndex((val) => val.checked);
}

submit.addEventListener('click', () => {
  let selectedOpt = selectedOption();
  if (selectedOpt !== -1) {

    if (selectedOpt === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
      options.forEach((elem) => elem.checked = false);
    } else {
      quiz.innerHTML = `
    <div class="result">
    <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
    <p>Congratulations on completing the quiz! 🎉</p>
    <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
    </div>
  `;
    }
  }
});