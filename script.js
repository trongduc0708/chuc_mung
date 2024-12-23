// Hàm để bắt đầu phát nhạc nền khi có tác động vào trang
function startMusic() {
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    }
}

// Hàm để phát nhạc từ kho và tắt nhạc nền
function playMusic(file) {
    const backgroundMusic = document.getElementById('background-music');
    const musicPlayer = document.querySelector('.music-player');

    // Dừng nhạc nền nếu nó đang phát
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Đặt lại thời gian về 0 để bắt đầu lại khi phát nhạc nền

    // Set nguồn nhạc mới cho nhạc kho và phát nhạc đó
    musicPlayer.src = file;
    musicPlayer.play();
}

// Sự kiện bắt đầu nhạc nền khi người dùng click vào trang
document.body.addEventListener('click', function () {
    startMusic(); // Gọi hàm phát nhạc nền khi có tác động vào trang
});

// Snowflake Effect
function createSnowflakes() {
    const snowflakes = document.getElementById('snowflakes');
    for (let i = 0; i < 100; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = '❄';
        flake.style.left = Math.random() * window.innerWidth + 'px';
        flake.style.animationDuration = 3 + Math.random() * 5 + 's';
        flake.style.animationDelay = Math.random() * 5 + 's';
        flake.style.fontSize = 10 + Math.random() * 20 + 'px';
        snowflakes.appendChild(flake);
    }
}
createSnowflakes();

// Check Love Date
function checkLoveDate() {
    const loveDate = document.getElementById('loveDate').value;
    const correctDate = '2024-08-16'; // Thay bằng ngày của bạn
    if (loveDate === correctDate) {
        document.getElementById('loginModal').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
        startMusic(); // Phát nhạc nền khi đăng nhập thành công
    } else {
        alert('Sai ngày rồi! ❤️');
    }
}

// Hàm hiển thị các phần khác nhau
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}
