document.addEventListener('DOMContentLoaded', async () => {
    // 获取导航栏容器
    const navContainer = document.getElementById('navbar-container');
    
    try {
        // 获取导航栏HTML
        const response = await fetch('/components/navbar.html');
        const html = await response.text();
        
        // 插入导航栏
        navContainer.innerHTML = html;
        
        // 获取当前页面路径
        const currentPath = window.location.pathname;
        
        // 设置活动链接
        const links = document.querySelectorAll('.nav-links a[data-page]');
        links.forEach(link => {
            if (currentPath === '/' && link.dataset.page === 'home') {
                link.classList.add('active');
            } else if (currentPath.includes(link.dataset.page)) {
                link.classList.add('active');
            }
        });
        
        // 确保主题切换按钮正常工作
        if (window.initThemeToggle) {
            window.initThemeToggle();
        }
    } catch (error) {
        console.error('加载导航栏失败:', error);
    }
}); 