// Lấy các phần tử cần thiết
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Thêm sự kiện click vào hamburger menu để toggle hiển thị menu
hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Thêm hoặc bỏ class "active" để hiện/ẩn menu
});
