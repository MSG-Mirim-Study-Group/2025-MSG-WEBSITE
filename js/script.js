document.addEventListener("DOMContentLoaded", function () {
    const floatingBtn = document.querySelector(".floating");
    const showAt = 500; // 몇 px 이후에 나타날지 설정

    window.addEventListener("scroll", function () {
        if (window.scrollY > showAt) {
            floatingBtn.style.opacity = "1";
            floatingBtn.style.visibility = "visible";
        } else {
            floatingBtn.style.opacity = "0";
            floatingBtn.style.visibility = "hidden";
        }
    });
});