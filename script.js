function changeMessage() {
    document.getElementById("dynamic-text").innerText =
        "🎉 JavaScript is working! This content was updated dynamically.";
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    document.getElementById("form-message").innerText =
        `Thank you, ${name}! We will contact you at ${email}.`;

    // Clear form
    event.target.reset();
}
