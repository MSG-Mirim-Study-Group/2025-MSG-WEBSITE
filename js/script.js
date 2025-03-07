document.addEventListener("DOMContentLoaded", function () {
    // 플로팅 버튼 관련 설정
    const floatingBtn = document.querySelector(".floating");
    const showAt = 500;
    
    // 스크롤 시 플로팅 버튼 표시/숨기기
    function toggleFloatingButtonVisibility() {
        if (window.scrollY > showAt) {
            floatingBtn.style.opacity = "1";
            floatingBtn.style.visibility = "visible";
        } else {
            floatingBtn.style.opacity = "0";
            floatingBtn.style.visibility = "hidden";
        }
    }
    
    // 스크롤 이벤트 리스너
    window.addEventListener("scroll", toggleFloatingButtonVisibility);
});

document.addEventListener('DOMContentLoaded', function() {
    // 메뉴 관련 설정
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPage = document.querySelector('.menu-page');
    const menuItems = document.querySelectorAll('.menu-item'); // menuItems 추가
    
    // 메뉴 열기
    function openMenu() {
        menuPage.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // 메뉴 닫기
    function closeMenu() {
        menuPage.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // 메뉴 열기 버튼 클릭 이벤트
    menuToggle.addEventListener('click', openMenu);

    // 메뉴 아이템 클릭 시 메뉴 닫기
    menuItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });
});

// 현재 페이지 메뉴 항목 활성화
function highlightCurrentPageMenu() {
    document.querySelectorAll('.menu-item').forEach(item => {
        if (item.href === window.location.href) {
            item.style.color = 'var(--main-color-01)'; // 현재 페이지와 일치하면 색 변경
            item.style.fontWeight = '700';
        }
    });
}

function highlightCurrentPageFooterMenu() {
    document.querySelectorAll('.footer-menu-item').forEach(item => {
        if (item.href === window.location.href) {
            item.style.textDecoration = 'underline';
        }
    });
}

function goToPage() {
    window.location.href = "./apply.html";
}

// 페이지 메뉴 항목 하이라이팅
highlightCurrentPageMenu();
highlightCurrentPageFooterMenu();
