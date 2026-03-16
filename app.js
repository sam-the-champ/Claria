 const onboardingCards = document.querySelectorAll('.onboarding_card');
 const nextButtons = document.querySelectorAll('.next-btn');
 const skipButton = document.querySelector('.skip');
 
    let currentCard = 0;

    nextButtons.forEach(button => {
        button.addEventListener('click', ()=> {
            onboardingCards[currentCard].classList.remove('active');
            currentCard++;
            onboardingCards[currentCard].classList.add('active');
                if(currentCard === onboardingCards.length - 1) {
                    nextButtons.forEach(btn => btn.style.display = 'block');
                    nextButtons.forEach(btn => {
                        btn.addEventListener('click', ()=> {
                            window.location.href = 'signup.html';
                        })
                    } )
                }

        });
    });

    skipButton.addEventListener('click', ()=> {
        window.location.href = 'signup.html';
    });