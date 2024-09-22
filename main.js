document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can add your form handling logic, such as sending data via AJAX

    alert("Thank you for your message! We will get back to you soon.");
    
    // Clear the form
    this.reset();
});
