document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        slidesPerView: 2.5,
        spaceBetween: 10,
        navigation: {
            nextEl: ".custom-button-next",
            prevEl: ".custom-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function () {
                document.querySelectorAll(".swiper-slide").forEach((slide) => {
                    slide.style.opacity = "0.4";
                    slide.style.transform = "scale(0.75)";
                });

                let activeSlide = document.querySelector(".swiper-slide-active");
                activeSlide.style.opacity = "1";
                activeSlide.style.transform = "scale(1)";
            },
        },
    });
    setTimeout(() => {
        swiper.slideNext(500); // 0.5초 동안 부드럽게 넘김
    }, 1);
});

const awards = [
    { title: "Smarteen App Challenge 장려상", date: "2024.11.08", source: "SK 플래닛(주)" },
    { title: "미래 해커톤 대상", date: "2024.10.19", source: "미림마이스터고" },
    { title: "소프트웨어 챌린지 2위, 3위", date: "2023.12.11", source: "미림마이스터고" },
    { title: "Smarteen App Challenge 우수상", date: "2023.11.04", source: "SK 플래닛(주)" },
    { title: "Smarteen App Challenge 가작상", date: "2023.11.04", source: "미림마이스터고" },
    { title: "미래 해커톤 금상", date: "2023.10.21", source: "미림마이스터고" },
    { title: "미래 해커톤 은상", date: "2023.10.21", source: "미림마이스터고" },
    { title: "창업 아이템 경진대회 동상", date: "2023.10.04", source: "미림마이스터고" },
    { title: "특성화 고교생 사장되기 창업대회 금상", date: "2023.09.26", source: "한국시민자원봉사회" },
    { title: "창의 아이디어 경진대회 금상", date: "2023.07.14", source: "미림마이스터고" }
];

function populateAwards() {
    const tableBody = document.getElementById("awardTable");
    awards.forEach(award => {
        let title = award.title;

        const highlightColor = "#59F9CD";
        const highlightKeywords = ["장려상","대상","2위, 3위","우수상", "가작상", "금상", "은상", "동상"];
        
        highlightKeywords.forEach(keyword => {
            if (title.includes(keyword)) {
                title = title.replace(
                    keyword,
                    `<span style="color: ${highlightColor}; font-weight: bold;">${keyword}</span>`
                );
            }
        });

        let row = document.createElement("tr");
        row.innerHTML = `<td>${title}</td><td>${award.date}</td><td>${award.source}</td>`;
        tableBody.appendChild(row);
    });
}


// 실행
populateAwards();