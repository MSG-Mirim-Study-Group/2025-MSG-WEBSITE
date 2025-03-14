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
        "experience",
        "expectation"
    ];

    form.addEventListener("submit", async function (event) {

        const now = new Date(); 
        const deadline = new Date(now.getFullYear(), now.getMonth(), 16, 23, 59, 59);
        
        if (now > deadline) {
            alert("모집 기간이 종료되었습니다.");
            return;
        }

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
            return;
        } 
        event.preventDefault();
        // else {
            // event.preventDefault(); // 기본 폼 제출 방지
            // window.location.href = "applyComplete.html"; // 성공 시 페이지 이동
        // }

        const formData = {
            name: document.getElementById("name").value,
            studentId: document.getElementById("student-id").value,
            tel: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            purpose: document.getElementById("reason").value,
            strengths: document.getElementById("strength").value,
            failure: document.getElementById("experience").value,
            definition: document.getElementById("self-introduction").value,
            comment: document.getElementById("expectation").value
        };

        try {
            const response = await fetch("http://43.201.179.218/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                alert("지원서 제출 완료!");
                window.location.href = "applyComplete.html"; // 성공 시 완료 페이지 이동
            } else {
                alert("오류 발생: " + result.message);
            }
        } catch (error) {
            console.error("오류 발생:", error);
            alert("서버 연결에 실패했습니다.");
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
