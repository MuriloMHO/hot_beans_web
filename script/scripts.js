let clickMenu = function() {
    const items = document.querySelector(".dropdown_content");
    const botton = document.querySelector(".dropbtn");
    
    if (items.style.display === 'none' || items.style.display === "") {
        items.style.display = 'block';
        botton.innerHTML = "X";
    } else {
        items.style.display = 'none';
        botton.innerHTML = "☰";
    }
};

const form = document.getElementById("application_form");
const message = document.getElementById("response")

form.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const formData = {
        first: document.getElementById("first").value,
        last: document.getElementById("last").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        role: document.getElementById("role").value
    };

    console.log("Form Submitted!", formData);

    message.style.color = "green";
    message.textContent = `Thank you, ${formData.first}! Your application for ${formData.role} has been submitted`;

    form.reset();
});