function sendMail(contactForm) { // Passing in the form as a parameter 
    emailjs.send("outlook", "paulbf", { // x3 keys below match the email parameters
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "comments_request": contactForm.comments.value
    })
    .then( // Continuing with the 'Promise Approach > When & Then' 
        function(response) {
            alert('Congratulations - Message sent!');
            
        },
        function(error) {
            alert('Sorry, Message not sent. Please try again.');
            
        }
    );
    return false;  // To block from loading a new page
}