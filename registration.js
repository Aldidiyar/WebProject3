const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const registerButton = document.getElementById('regButton');

registerButton.disabled = true;

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

    registerButton.disabled = true;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

    if (username.parentElement.classList.contains('success') &&
        password.parentElement.classList.contains('success') &&
        password2.parentElement.classList.contains('success')) {
        registerButton.disabled = false;
    }
};


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

username.addEventListener('input', validateInputs);
password.addEventListener('input', validateInputs);
password2.addEventListener('input', validateInputs);

form.addEventListener('submit', e => {
    e.preventDefault();
    alert('User registration successful!');
});

function darkMode()
{
    //changing bg color
    document.body.style.backgroundColor = '#222222';
}
function lightMode()
{
    //changing bg color
    document.body.style.backgroundColor = '#E6F2FF';
}