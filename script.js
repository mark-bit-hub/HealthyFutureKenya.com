// Smooth Scroll Effect for Navigation Links  
document.querySelectorAll('nav a').forEach(anchor => {  
    anchor.addEventListener('click', function(e) {  
        e.preventDefault();  

        const targetId = this.getAttribute('href');  
        const targetSection = document.querySelector(targetId);  
        
        targetSection.scrollIntoView({  
            behavior: 'smooth',  
            block: 'start'  
        });  
    });  
});  

// Alert Function for Informative Elements  
const healthIssues = document.querySelectorAll('#health ul li');  
const mentalHealthIssues = document.querySelectorAll('#mental-health ul li');  
const reproductiveHealthIssues = document.querySelectorAll('#reproductive-health ul li');  

healthIssues.forEach(issue => {  
    issue.addEventListener('click', () => {  
        alert(`Learn more about: ${issue.textContent}`);  
    });  
});  

mentalHealthIssues.forEach(issue => {  
    issue.addEventListener('click', () => {  
        alert(`Learn more about: ${issue.textContent}`);  
    });  
});  

reproductiveHealthIssues.forEach(issue => {  
    issue.addEventListener('click', () => {  
        alert(`Learn more about: ${issue.textContent}`);  
    });  
});