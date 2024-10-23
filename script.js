const canvas = document.getElementById('binaryCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = canvas.width / 20; // Ajusta el ancho de cada columna
const drops = Array(columns).fill(1); // Crea un array para las gotas

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fondo con transparencia
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#fff'; // Color verde para el código
    ctx.font = 'bold 20px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = Math.random() < 0.5 ? '0' : '1'; 
        const x = i * 20;
        const y = drops[i] * 20;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});