const emailInput = document.querySelector('.email');
const dismissButton = document.querySelector('.dismiss');
const form = document.querySelector('form');
const container = document.querySelector('.container');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');
const userEmail = document.querySelector('.user-email');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailRegex)) {
        errorMessage.innerHTML = 'Valid email required';
        emailInput.classList.add("active");
    } else {
        errorMessage.innerHTML = "";
        emailInput.classList.remove("active");
        successMessage.classList.remove("hide");
        container.classList.add("hide");
        userEmail.innerHTML = email;
    }
});

dismissButton.addEventListener("click", () => {
    successMessage.classList.add("hide");
    container.classList.remove("hide");
    emailInput.value = "";
    emailInput.classList.remove("active");
})