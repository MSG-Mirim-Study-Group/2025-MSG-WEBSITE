document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains("active");

            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".faq-question").forEach(q => q.classList.remove("active"));

            if (!isActive) {
                answer.style.display = "block";
                this.classList.add("active");
            }
        });
    });
});