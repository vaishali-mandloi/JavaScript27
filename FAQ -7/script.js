document.addEventListener('DOMContentLoaded', function() {

    const faq = [
        {
            question: "1. Is Java purely Object Oriented ?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dolores quia ducimus possimus veritatis aliquam necessitatibus placeat quasi corporis sint?",
        }, 
        {
            question: "2. What is Interpreter ?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dolores quia ducimus possimus veritatis aliquam necessitatibus placeat quasi corporis sint?",
        },
        {
            question: "3. What is TypeScript ?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dolores quia ducimus possimus veritatis aliquam necessitatibus placeat quasi corporis sint?",
        },
        {
            question: "4. How to add CSS in HTML document ?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dolores quia ducimus possimus veritatis aliquam necessitatibus placeat quasi corporis sint?",
        }
    ];

    function openAnswer(event) {
        const clickedBtn = event.target;
        // console.log(clickedBtn);
        const parentQuestion = clickedBtn.closest('.question');
        const answer = parentQuestion.nextElementSibling;

        answer.classList.toggle("demo");
    }
    
    const container = document.getElementById("container");

    faq.forEach(item => {
        const image_src = "images/dropdown.png";

        const content = document.createElement('div');
        content.classList.add("content");

        const question = document.createElement('div');
        question.classList.add("question");

        const qeuPara = document.createElement('p');
        qeuPara.textContent = item.question;

        const btn = document.createElement('button');
        btn.onclick = openAnswer;

        const img = document.createElement('img');
        img.src = image_src;

        btn.appendChild(img);
        qeuPara.appendChild(btn);
        question.appendChild(qeuPara);

        const answer = document.createElement('div');
        answer.classList.add("answer");

        const ansPara = document.createElement('p');
        ansPara.textContent = item.answer;

        answer.appendChild(ansPara);

        content.appendChild(question);
        content.appendChild(answer);

        container.appendChild(content);
    });
});
