
const startButton = document.getElementById("start-button");
 
if (startButton) {
    startButton.addEventListener("click", () => { 
        window.location.href = "sections.html";
    })
}
 
let currentStep = 0;
 
const cards = document.querySelectorAll('.onboarding_main');
 
const nextButtons = document.querySelectorAll('.next-btn');
 
const back = document.querySelectorAll(".back-link");
 
const skip = document.querySelectorAll(".skip-link");

 
function showCard(step) { 
    cards.forEach((card, index) => {
        card.style.display = index === step ? 'flex' : 'none';
    });
     
    const currentCard = cards[step];
    const dotsInCurrentCard = currentCard.querySelectorAll('.dot');
     
    dotsInCurrentCard.forEach((dot, index) => { 
        dot.classList.toggle('active', index === step);
    });
}
 
nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => { 
        if (index === currentStep) {
            currentStep++;  
             
            if (currentStep < cards.length) {
                showCard(currentStep);
            } else { 
                window.location.href = "sections.html";
            }
        }
    });
});
 
back.forEach((button, index) => {
    button.addEventListener('click', () => { 
        if (index === currentStep) {
            currentStep--;  
             
            if (currentStep >= 0) {
                showCard(currentStep);
            } else { 
                window.location.href = "sections.html";
            }
        }
    });
});
 
skip.forEach((button, index) => {
    button.addEventListener('click', () => { 
        window.location.href = "sections.html";
    });
});
 
const allDots = document.querySelectorAll('.dot');
allDots.forEach((dot, index) => {
    dot.addEventListener('click', () => { 
        currentStep = index;
        showCard(currentStep);
    });
});
 
showCard(0);

  