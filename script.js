function showThankYouMessage(event) {
    event.preventDefault();
    alert("Thank you for your input!");
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedback-form");
    form.addEventListener("submit", showThankYouMessage);
});

