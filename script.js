/* --- BONUS TASK: Calculator --- */
function calculateCalories() {
    const weight = document.getElementById('weight').value;
    const hours = document.getElementById('hours').value;
    const resultBox = document.getElementById('result-box');
    const calResult = document.getElementById('cal-result');

    if(weight && hours) {
        // Formula: Standing burns ~0.15 more calories per minute than sitting
        // Approx 50 extra calories per hour for an average person
        const calories = Math.floor(hours * 50 * (weight / 70)); 
        
        calResult.innerText = calories;
        resultBox.style.display = 'block';
        
        // Simple animation for the result
        resultBox.style.transform = "scale(1.2)";
        setTimeout(() => resultBox.style.transform = "scale(1)", 200);
    } else {
        alert("Please enter both weight and hours!");
    }
}

/* --- BONUS TASK: Client-side Validation --- */
function validateForm(event) {
    event.preventDefault(); // Prevent actual submission
    
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    
    // Simple regex for email validation
    if (!email.includes('@') || !email.includes('.')) {
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
        alert("Order Submitted Successfully! Welcome to the future.");
        document.getElementById('contactForm').reset();
    }
}

document.addEventListener('DOMContentLoaded', () => {

    /* --- BONUS TASK: Implement JavaScript Animations --- */
    // Use Intersection Observer to animate elements when they scroll into view
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));
});