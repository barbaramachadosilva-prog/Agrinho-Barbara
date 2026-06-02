// Variáveis
let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "O que são fertilizantes verdes?",
        options: [
            "Fertilizantes químicos industriais",
            "Plantas cultivadas para melhorar o solo",
            "Adubos sintéticos",
            "Produtos minerais extraídos"
        ],
        answer: 1
    },
    {
        question: "Qual grupo de plantas é mais usado como adubo verde?",
        options: [
            "Gramíneas",
            "Leguminosas",
            "Cactus",
            "Orquídeas"
        ],
        answer: 1
    },
    {
        question: "Qual é um dos principais benefícios da adubação verde?",
        options: [
            "Aumento da erosão",
            "Fixação biológica de nitrogênio",
            "Diminuição da matéria orgânica",
            "Compactação do solo"
        ],
        answer: 1
    }
];

// Dark Mode
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Quiz
function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-primary';
        btn.style.margin = '8px';
        btn.style.width = '100%';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('feedback').textContent = '';
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    const feedback = document.getElementById('feedback');
    
    if (selected === correct) {
        feedback.textContent = "✅ Correto!";
        feedback.style.color = "green";
        score++;
    } else {
        feedback.textContent = "❌ Errado! A resposta certa era: " + questions[currentQuestion].options[correct];
        feedback.style.color = "red";
    }
    
    document.getElementById('next-btn').style.display = 'block';
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-container').innerHTML = `
            <h3>Fim do Quiz!</h3>
            <p>Você acertou ${score} de ${questions.length} perguntas.</p>
            <button class="btn-primary" onclick="location.reload()">Reiniciar Quiz</button>
        `;
    }
});

// Inicialização
window.onload = () => {
    loadQuestion();
};