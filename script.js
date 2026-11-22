const title = document.getElementById("destination-title");

if (title) {
    title.textContent = "Explore Asia with Kizuna Travel";
}


const button = document.getElementById("explore-button");

if (button) {
    button.addEventListener("click", function() {
        alert("Let's explore Asia!");
    });
}


const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your travel request has been received.");

    });
}