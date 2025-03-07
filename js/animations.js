// 监听滚动显示动画
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.project-card, .skill-card, .contact, h2');
    
    // 添加初始类
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });

    // 创建观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 一旦显示就停止观察
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // 当元素10%可见时触发
    });

    // 观察所有元素
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // 添加鼠标移动视差效果
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        document.querySelectorAll('.hero::before').forEach(element => {
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // 添加技能标签悬停效果
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('mouseover', () => {
            tag.style.transform = `scale(1.1) rotate(${Math.random() * 10 - 5}deg)`;
        });

        tag.addEventListener('mouseout', () => {
            tag.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}); 