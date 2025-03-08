// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取页脚容器
    const footerContainer = document.getElementById('footer-container');
    
    // 如果找到页脚容器
    if (footerContainer) {
        // 使用fetch加载页脚组件
        fetch('./components/footer.html')
            .then(response => response.text())
            .then(html => {
                footerContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('加载页脚组件失败:', error);
            });
    }
}); 