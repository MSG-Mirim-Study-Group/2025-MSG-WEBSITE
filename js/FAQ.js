document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains("active");

            // 모든 항목 닫기
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".faq-question").forEach(q => q.classList.remove("active"));

            // 현재 클릭한 질문의 상태를 토글
            if (!isActive) {
                answer.style.display = "block";
                this.classList.add("active");
            }
        });
    });
});