document.addEventListener("DOMContentLoaded", () => {
    const decos = [...document.querySelectorAll(".deco")];

    // y 위치 기준으로 정렬
    decos.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

    decos.forEach((deco, index) => {
        setTimeout(() => {
            deco.classList.add("show");
        }, index * 500); // 0.5초 간격으로 순차 등장
    });
});
