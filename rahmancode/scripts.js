function createHeart() {
    const container = document.getElementById('heart-container');
    const pixel = document.createElement('div');
    pixel.className = 'heart-pixel';
    
    // Random horizontal position
    const randomX = Math.random() * 100;
    pixel.style.left = randomX + '%';
    pixel.style.top = '-20px';
    
    // Center the pixel on the position
    pixel.style.transform = `translateX(-50%) translateY(0)`;
    
    container.appendChild(pixel);
    
    // Remove after animation completes + falling animation
    setTimeout(() => pixel.remove(), 4000);
}

// Create hearts continuously
window.onload = () => {
    setInterval(createHeart, 300);
};