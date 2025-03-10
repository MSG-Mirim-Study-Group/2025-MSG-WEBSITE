document.addEventListener("DOMContentLoaded", function () {
    const members = document.querySelectorAll(".member");

    function checkScroll() {
        const windowHeight = window.innerHeight;

        members.forEach((member, index) => {
            const rect = member.getBoundingClientRect();

            if (rect.top < windowHeight * 0.9) { // 화면에 일정 부분 들어오면 실행
                setTimeout(() => {
                    member.classList.add("visible");
                }, index * 100); // 100ms 간격으로 순차적 등장
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // 페이지 로드 시 체크
});

document.addEventListener("DOMContentLoaded", function () {
    const sixteen = document.getElementById("sixteen");

    function checkScroll() {
        const rect = sixteen.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.9) { 
            sixteen.classList.add("visible"); 
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // 초기 체크
});

