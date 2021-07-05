
let isFormValid = false;

//selects all input fields
const form = document.querySelector('form');
const thanksMessage = document.getElementById('thanks-message');
const nameInput = document.querySelector('input[name="name"]');
const numberInput = document.querySelector('input[name="number"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');


//resets the fields by removing the invalid class and adds the hidden class
const resetElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden1");
}

// opposite to this
const invalidateElm = (elm) => {
    elm.classList.add('invalid')
    elm.nextElementSibling.classList.remove("hidden1");
}


// This can be added to using regex to make sure that the correct information is given as opposed to just any value in the field.
const validateInputs= () => {
    resetElm(nameInput);
    resetElm(numberInput);
    resetElm(emailInput)
    resetElm(messageInput);
    isFormValid = true;


    if (!nameInput.value) {
        invalidateElm(nameInput);
        isFormValid = false;
    }
    if (!numberInput.value) {
        invalidateElm(numberInput);
        isFormValid = false;
    }
    if (!emailInput.value) {
        invalidateElm(emailInput);
        isFormValid = false;
    }
    if (!messageInput.value) {
        invalidateElm(messageInput);
        isFormValid = false;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault() 
    validateInputs();
    if (isFormValid) {
        form.remove();
        thanksMessage.classList.remove('hidden')
    }
})

nameInput.addEventListener("input", () => {
    validateInputs();
})
numberInput.addEventListener("input", () => {
    validateInputs();
})
emailInput.addEventListener("input", () => {
    validateInputs();
})
messageInput.addEventListener("input", () => {
    validateInputs();
})