const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');       // 切换菜单显示/隐藏
  burger.classList.toggle('active');  // 切换按钮动画效果
});
