document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const requiredFields = [
        "student-id",
        "name",
        "phone",
        "email",
        "reason",
        "self-introduction",
        "strength",
        "experience"
    ];

    form.addEventListener("submit", function (event) {
        let isValid = true;

        requiredFields.forEach((fieldId) => {
            const input = document.getElementById(fieldId);
            const label = document.querySelector(`label[for="${fieldId}"]`);

            if (!input.value.trim()) {
                isValid = false;
                setError(input, label);
            } else {
                clearError(input, label);
            }
        });

        if (!isValid) {
            event.preventDefault(); // 유효성 검사 실패 시 제출 방지
        } else {
            event.preventDefault(); // 기본 폼 제출 방지
            window.location.href = "applyComplete.html"; // 성공 시 페이지 이동
        }
    });

    function setError(input, label) {
        input.style.border = "1px solid #E25959";
        label.style.color = "#E25959";
        input.classList.add("error-placeholder");
    }

    function clearError(input, label) {
        input.style.border = "1px solid #E0E0E0";
        label.style.color = "var(--black-color-01)";
        input.classList.remove("error-placeholder");
    }
});
