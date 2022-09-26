const questionItem = document.querySelectorAll(".questions");

questionItem.forEach(questionItem => {
    questionItem.addEventListener("click", event => {
        questionItem.classList.toggle("active");
        const answerItem = questionItem.nextElementSibling;
        
        if (questionItem.classList.contains("active")) {
            answerItem.style.maxHeight = answerItem.scrollHeight + "px";
    
        }
        else {
            answerItem.style.maxHeight = 0;
        
        }
    });
});

