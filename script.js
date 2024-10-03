document.addEventListener("DOMContentLoaded", function () {
    const cherry = document.getElementById("cherry");
    const juiceCups = document.querySelectorAll('.juice-image'); 
    
    let splashIndex = 0;

   
    cherry.addEventListener('animationiteration', function () {
  
        createSplashEffect(juiceCups[splashIndex]);
        splashIndex = (splashIndex + 1) % juiceCups.length; 
    });

   
    function createSplashEffect(cup) {
        const splash = document.createElement('img');
        splash.src = "images/juice-splash.png"; 
        splash.classList.add('splash');
        
      
        const cupRect = cup.getBoundingClientRect();
        const heroRect = document.querySelector('.hero').getBoundingClientRect(); 

        
        splash.style.left = `${cupRect.left - heroRect.left + (cupRect.width / 2) - 25}px`; 
        splash.style.top = `${cupRect.top - heroRect.top - 30}px`;
       
        splash.style.transform = `rotate(${Math.random() * 360}deg) scale(0)`; 
        
       
        document.querySelector('.hero').appendChild(splash);

       
        setTimeout(() => {
            splash.style.transform = `rotate(${Math.random() * 360}deg) scale(1)`; 
            splash.style.opacity = 1;
        }, 50);  

       
        setTimeout(() => {
            splash.style.transform = `rotate(${Math.random() * 360}deg) scale(1.5)`; 
            splash.style.opacity = 0; 
        }, 800);

     
        setTimeout(() => splash.remove(), 1000);
    }
});


