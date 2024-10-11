const quiz = {
    title: "Sample Quiz",
    questions: [
      {
        text: "What is 2 + 2?",
        options: ["1", "2", "3", "4"],
        correct: 4
      },
      {
        text: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 3
      }
    ]
  };
  
  function loadQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    
    quiz.questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      
      questionDiv.innerHTML = `
        <h3>${question.text}</h3>
        ${question.options.map((option, i) => `
          <label>
            <input type="radio" name="question${index}" value="${i + 1}">
            ${option}
          </label>
        `).join('')}
      `;
      
      quizContainer.appendChild(questionDiv);
    });
  }
  
  function submitQuiz() {
    const selectedAnswers = quiz.questions.map((_, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      return selectedOption ? parseInt(selectedOption.value) : null;
    });
    
    let score = 0;
    
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        score++;
      }
    });
    
    alert(`You scored ${score} out of ${quiz.questions.length}`);
  }
  
  window.onload = loadQuiz;
  