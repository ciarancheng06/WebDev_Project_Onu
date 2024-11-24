function showThankYouMessage(event) {
    event.preventDefault(); 
    alert("Thank you for your input!"); 
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedback-form");
    form.addEventListener("submit", showThankYouMessage);
});
