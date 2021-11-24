const form = document.querySelector('form');
const message = document.getElementById('form-message');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.style.display = "block";
    form.style.display = "none";
})