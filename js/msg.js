$(document).ready(function () {
    // 최종 값 설정
    var yearsFinalValue = 15;
    var meetingsFinalValue = 49;
    var blogsFinalValue = 459;

    var animationStarted = false; // 애니메이션 실행 여부 확인

    $(window).on("scroll", function () {
        var section = $(".content-passion");
        var sectionTop = section.offset().top; // 섹션의 위치
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop();

        // 화면에 나타났을 때 실행 (한 번만 실행되도록)
        if (scrollPosition + windowHeight > sectionTop + 50 && !animationStarted) {
            startCountingAnimation("years", yearsFinalValue);
            startCountingAnimation("meetings", meetingsFinalValue);
            startCountingAnimation("blogs", blogsFinalValue);
            animationStarted = true; // 한 번 실행되면 다시 실행되지 않도록 설정
        }
    });

    function startCountingAnimation(id, finalValue) {
        var element = document.getElementById(id);
        var currentValue = 0;
        var increment = Math.ceil(finalValue / 100); // 100번 반복하여 증가하도록 설정
        var duration = 2000; // 애니메이션 지속 시간 (2초)
        var interval = duration / (finalValue / increment);

        var counter = setInterval(function () {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue; // 숫자가 초과되지 않도록 고정
                clearInterval(counter);
            }
            element.textContent = currentValue;
        }, interval);
    }
});
