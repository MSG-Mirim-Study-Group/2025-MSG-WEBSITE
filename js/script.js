document.addEventListener("DOMContentLoaded", function () {
    const floatingBtn = document.querySelector(".floating");
    const showAt = 500;

    // 플로팅 버튼 표시 이벤트
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

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const menuPage = document.querySelector('.menu-page');
    const menuItems = document.querySelectorAll('.menu-item, .support-link');
    
    // 메뉴 열기
    menuToggle.addEventListener('click', function() {
        menuPage.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // 메뉴 닫기
    menuClose.addEventListener('click', function() {
        menuPage.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // 메뉴 페이지 영역 클릭 시 닫기 (a 태그와 로고 이미지 제외)
    menuPage.addEventListener('click', function(e) {
        // 클릭된 요소가 a 태그이거나 로고 이미지가 아닌 경우에만 닫기
        const isLink = e.target.tagName === 'A' || e.target.closest('a');
        const isLogo = e.target.tagName === 'IMG' && (
            e.target.alt === 'MSG 작은 로고' || 
            e.target.classList.contains('logo')
        );
        
        if (!isLink && !isLogo) {
            menuPage.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // 메뉴 아이템 클릭 시 메뉴 닫기
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuPage.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});

// 현재 페이지 메뉴 항목 활성화
document.querySelectorAll('.menu-item').forEach(item => {
    if (item.href === window.location.href) {
        item.style.color = 'var(--main-color-01)'; // 현재 페이지와 일치하면 색 변경
        item.style.fontWeight = '700';
    }
});