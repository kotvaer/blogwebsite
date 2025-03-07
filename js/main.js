// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 平滑滚动功能
document.addEventListener('DOMContentLoaded', () => {
    // 获取滚动指示器
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('.content-section');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 监听滚动事件来控制导航栏样式
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 当滚动超过视口高度的20%时，改变导航栏样式
        if (scrollTop > window.innerHeight * 0.2) {
            navbar.classList.add('navbar-scrolled');
            // 向下滚动时隐藏导航栏
            if (scrollTop > lastScrollTop) {
                navbar.classList.add('navbar-hidden');
            } else {
                // 向上滚动时显示导航栏
                navbar.classList.remove('navbar-hidden');
            }
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.remove('navbar-hidden');
        }
        
        lastScrollTop = scrollTop;
    });

    // 添加视差滚动效果
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // 添加元素出现动画
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.project-card, .skill-card, .content-section h2').forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
}); 