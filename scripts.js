const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the JavaScript function used to select an HTML element by its id?",
    options: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In React.js, which hook is used to perform side effects in a function component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];

const [loadQuestion, option1, option2, option3,option4] = document.querySelectorAll('#question, #option_1, #option_2, #option_3, #option_4');
const submit = document.querySelector('#submit');
const options = document.querySelectorAll('.answer');
const quiz = document.querySelector('#quiz');

let currentQuiz = 0;
let score = 0;

const loadQuiz = () =>{
  let {question, options} = quizData[currentQuiz];
  loadQuestion.innerText = question;
  options = Array.from(options);
  options.forEach((curr, idx) => {
    let elem = window[`option_${idx+1}`];
    elem.innerText = curr;  
  });
}

loadQuiz();

const selectedOption = () =>{
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
  if(selectedOpt !== -1){

    if(selectedOpt === quizData[currentQuiz].correct){
      score++;
    }
    
    currentQuiz++;
    if(currentQuiz < quizData.length){
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