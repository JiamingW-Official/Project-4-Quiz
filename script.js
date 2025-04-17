const questions = [
    { type: "range", text: "How much do you save monthly (%)?", min: 0, max: 50, step: 1 },
    { type: "choice", text: "How frequently do you review your financial goals?", options: ["Weekly", "Monthly", "Quarterly", "Rarely"] },
    { type: "chart", text: "Draw resistance line on ascending triangle.", pattern: "ascending" },
    // ... total of 20 detailed questions
  ];
  
  let currentQuestion = 0;
  const answers = [];
  
  function loadQuestion() {
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[currentQuestion];
  
    const questionEl = document.createElement('div');
    questionEl.classList.add('question');
    questionEl.textContent = q.text;
    container.appendChild(questionEl);
  
    if (q.type === 'range') {
      const input = document.createElement('input');
      input.type = 'range';
      input.min = q.min;
      input.max = q.max;
      input.step = q.step;
      container.appendChild(input);
      input.onchange = () => answers[currentQuestion] = input.value;
    } else if (q.type === 'choice') {
      q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => answers[currentQuestion] = option;
        container.appendChild(btn);
      });
    } else if (q.type === 'chart') {
      const canvas = document.createElement('canvas');
      canvas.width = 700;
      canvas.height = 400;
      container.appendChild(canvas);
      drawCandlestickChart(canvas, q.pattern);
    }
  }
  
  function drawCandlestickChart(canvas, pattern) {
    const ctx = canvas.getContext('2d');
    // Implement realistic candlestick chart drawing logic here
    canvas.onmousedown = e => startDrawing(e, canvas, ctx);
  }
  
  function startDrawing(e, canvas, ctx) {
    // Line drawing and trend validation logic
  }
  
  document.getElementById('next-btn').onclick = () => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      showResults();
    }
  };
  
  document.getElementById('prev-btn').onclick = () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
    }
  };
  
  function showResults() {
    const container = document.getElementById('question-container');
    container.innerHTML = '<h3>Personalized Financial Advice</h3>';
    // Detailed personalized advice logic based on user answers
  }