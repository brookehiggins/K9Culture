document.addEventListener("DOMContentLoaded", function() {
    fields.clientName = document.getElementById('clientName');
    fields.email =  document.getElementById('email');
    fields.message = document.getElementById('message');
})

class User {
    constructor(clientName, email, message) {
        this.clientName = clientName;
        this.email = email;
        this.message = message;
    }
}

function sendContact() {
    alert('Thank you! We will get back to you soon.')
}