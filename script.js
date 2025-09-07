/*
 * 项目名称: GCURobot 网站
 * 文件: script.js
 * 作者: 卓一帆
 * 创建日期: 2025年9月5日
 * 版权: © 2025 GCURobot. All rights reserved.
 * 描述: 实现网站平滑滚动、滚动淡入、画廊轮播和logo点击返回首页功能
 */
document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 滚动淡入
    const sections = document.querySelectorAll('section:not(#hero)');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });

    // 画廊轮播
    const slides = document.querySelectorAll('.slide');
    let current = 0;
    setInterval(() => {
        slides.forEach(slide => slide.style.transform = `translateX(-${current * 100}%)`);
        current = (current + 1) % slides.length;
    }, 3000);


    // 点击logo返回首页
    const logo = document.getElementById('logo-home');
    if (logo) {
        logo.addEventListener('click', () => {
            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) { // 验证目标存在
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn(`Target element with ID ${targetId} not found`);
            }
        });
    });
});

window.addEventListener('error', (event) => {
    console.error('Client error:', event.message, event.filename, event.lineno);
    // 可选：发送错误日志到服务器
    // fetch('/log-error', { method: 'POST', body: JSON.stringify({ message: event.message, file: event.filename, line: event.lineno }) });
});
