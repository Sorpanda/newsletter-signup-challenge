
const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e =>{
    e.preventDefault();
    
    validateInput();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
};

const resetform = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = () => {
   
    const emailValue = email.value.trim();

if (emailValue === ''){
    setError(email, 'Email cannot be empty');
} else if (!isValidEmail(emailValue)){
    setError (email, 'Looks like this is not an email address')
} else {
   document.getElementById('newsletterCard').style.display = 'none';
   document.getElementById('afterSubmit').style.display = 'flex';
   document.getElementById('confirmedEmail').innerHTML = emailValue;
};  
};

function dismiss(){
    document.getElementById('newsletterCard').style.display = 'flex';
   document.getElementById('afterSubmit').style.display = 'none';
   form.reset();
   resetform(email, '');
};
