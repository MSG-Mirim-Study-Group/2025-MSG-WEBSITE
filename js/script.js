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
    const now = new Date(); 
    const deadline = new Date(now.getFullYear(), now.getMonth(), 16, 23, 59, 59);
    
    if (now > deadline) {
        alert("모집 기간이 종료되었습니다.");
        return;
    } else {
        window.location.href = "./apply.html";
    }
}

function navigateToPage() {
    window.location.href = "./index.html";
}

// 페이지 메뉴 항목 하이라이팅
highlightCurrentPageMenu();
highlightCurrentPageFooterMenu();
