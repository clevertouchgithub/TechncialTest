let form = document.getElementById('contact');
let thanks = document.createElement("div");
thanks.style.padding = '207px 15%';
thanks.style.color = '#ffffff';
thanks.innerHTML = '<p style="font-size: 20pt">Thanks! Details Submitted.</p>' ;


form.addEventListener('submit', (event) => {
    alert('Submission Received');
    form.parentNode.replaceChild(thanks, form);

});