const commandText = "cat welcome.txt";
const typingSpeed = 70; // Velocidad en milisegundos por carácter
let charIndex = 0;

function typeWriter() {
    const target = document.getElementById("typing-text");
    
    if (target && charIndex < commandText.length) {
        target.textContent += commandText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.portfolio-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Inicializa el efecto de tipeo al cargar la página
document.addEventListener("DOMContentLoaded", typeWriter);