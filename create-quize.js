let questionCount = 0;

function addQuestion() {
  questionCount++;
  const questionsContainer = document.getElementById('questions-container');
  
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');
  
  questionDiv.innerHTML = `
    <h3>Question ${questionCount}:</h3>
    <input type="text" name="question${questionCount}" placeholder="Enter your question" required>
    
    <label>Options:</label>
    <input type="text" name="option1-${questionCount}" placeholder="Option 1" required>
    <input type="text" name="option2-${questionCount}" placeholder="Option 2" required>
    <input type="text" name="option3-${questionCount}" placeholder="Option 3" required>
    <input type="text" name="option4-${questionCount}" placeholder="Option 4" required>
    
    <label>Correct Answer:</label>
    <select name="correctAnswer-${questionCount}">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  `;
  
  questionsContainer.appendChild(questionDiv);
}

document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Quiz Saved!'); // You can store the quiz data here
});
