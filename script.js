function showThankYouMessage(event) {
    event.preventDefault();
    alert("Thank you for your input!");
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedback-form");
    form.addEventListener("submit", showThankYouMessage);
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const fullName = document.getElementById('fullName');
    const nameError = document.getElementById('nameError');
    if (!fullName.value.trim()) {
        valid = false;
        nameError.textContent = 'Full Name is required.';
    } else {
        nameError.textContent = '';
    }

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!email.value.trim()) {
        valid = false;
        emailError.textContent = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        valid = false;
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }

    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (!message.value.trim()) {
        valid = false;
        messageError.textContent = 'Message is required.';
    } else {
        messageError.textContent = '';
    }

    if (valid) {
        alert('Thank you for your message!');
        form.reset();
    }
});
