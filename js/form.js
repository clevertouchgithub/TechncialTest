const formElement = document.querySelector('form');
const nameField = formElement.querySelector('#name');
const numberField = formElement.querySelector('#phoneNumber');
const emailField = formElement.querySelector('#email');
const commentField = formElement.querySelector('#comment');
const submitBtn = document.querySelector('.main_bt');


function handleSubmit(e) {

    e.preventDefault();

    if (nameField.value == null || nameField.value == '') return;

    if (numberField.value == null || numberField.value == '') return;

    if (emailField.value == null || emailField.value == '') return;

    if (commentField.value == null || commentField.value == '') return;

    const message = '<p class="thankyou_msg">Thankyou for submitting!</p>';

    const emailBox = document.querySelector('.email_box');

    emailBox.innerHTML = message;

    // formElement.submit();

    // window.location.reload()

    // emailBox.scrollIntoView()

   

    

    
    
    
}


submitBtn.addEventListener('click', (e) => handleSubmit(e));

