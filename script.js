const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStarburst() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 50; i++) {
        let x = canvas.width / 2 + (Math.random() - 0.5) * 200;
        let y = canvas.height / 2 + (Math.random() - 0.5) * 200;
        let radius = Math.random() * 3 + 1;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fill();
    }
}

setInterval(drawStarburst, 100);
drawStarburst();
