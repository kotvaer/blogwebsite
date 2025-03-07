document.addEventListener('DOMContentLoaded', () => {
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.nav-links a');

    // 为每个链接添加点击事件监听器
    navLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // 初始化页面加载动画
    initializePageTransitions();
});

function initializePageTransitions() {
    // 确保页面完全加载后再显示内容
    window.addEventListener('load', () => {
        document.body.style.visibility = 'visible';
        document.body.style.opacity = '1';
    });

    // 处理浏览器的后退/前进按钮
    window.addEventListener('popstate', () => {
        handlePageTransition();
    });
}

function handleLinkClick(e) {
    // 如果是当前页面的链接，不执行过渡
    if (e.currentTarget.classList.contains('active')) {
        return;
    }

    e.preventDefault();
    const targetUrl = e.currentTarget.href;

    // 开始页面过渡
    handlePageTransition(targetUrl);
}

function handlePageTransition(targetUrl = null) {
    // 添加页面退出动画
    const mainContent = document.querySelector('main');
    mainContent.style.pointerEvents = 'none'; // 防止过渡期间的交互
    mainContent.classList.add('page-exit');

    // 保存滚动位置
    const scrollPosition = window.scrollY;

    // 等待动画完成后跳转
    setTimeout(() => {
        if (targetUrl) {
            // 保存当前页面的滚动位置
            sessionStorage.setItem('scrollPosition', scrollPosition);
            window.location.href = targetUrl;
        }
    }, 400); // 与CSS中的过渡时间匹配
}

// 恢复滚动位置
window.addEventListener('load', () => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem('scrollPosition');
    }
}); 