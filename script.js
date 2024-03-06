
const nameField = document.querySelector('#name');
const numberField = document.querySelector('#number');
const passwordField = document.querySelector('#password');
const form=document.querySelector('form')

const nameError = document.querySelector('.nameerror');
const passwordError = document.querySelector('.passerror');
const numberError = document.querySelector('.numbererror');

const nameErrorMessage = 'should be 14 characters only';
const numberErrorMessage = 'wrong number! can not exceed 10 digits';
const passwordErrorMessage = 'Password must be at least 8 characters long and contain at least one number, one alphabet, and one special character';


nameField.addEventListener('input', () => {
    const nameValue = nameField.value;
    if (nameValue.length > 14) {
        nameError.innerHTML = nameErrorMessage;
    } else {
        nameError.innerHTML = '';
    }
});

numberField.addEventListener('input', () => {
    const numberValue = numberField.value;
    if (numberValue.length > 10) {
        numberError.innerHTML = numberErrorMessage;
    } else {
        numberError.innerHTML = '';
    }
});


function validatePassword(password){
    if(password.length<8){
        return 'password must be of 8 characters'
    }

    let containLower=false;
    let containUpper=false;
    let containSpecial=false;

    const specialCharacters="!@#$%^&*()_-+=[]{}|;:,.<>?"

    
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            containUpper = true;
        }
        if (specialCharacters.includes(password[i])) {
            containSpecial = true;
        }
        if (password[i] >= 'a' && password[i] <= 'z') {
            containLower = true;
        }
        if(containLower==true && containUpper==true &&containSpecial==true)
        {
            return""
        }
    }

    if (containUpper==false) {
        return "Password must contain at least one uppercase letter.";
    }

    if(containLower==false){
        return "Password must contain at least one lowercase letter"
    }

    
    if (containSpecial==false) {
        return "Password must contain at least one special character.";
    }
}

let flag=false;

passwordField.addEventListener('input',()=>{
    const passwordValue=passwordField.value;
    if(passwordValue.length>8){
        flag=true;
    }
    if(flag)
    {
         const validationResult=validatePassword(passwordValue);
         passwordError.innerHTML=validationResult;
    }
})

form.addEventListener('submit',(Event)=>{
    Event.preventDefault();
    if(nameError.innerHTML=='' && numberError.innerHTML=='' && passwordError.innerHTML=='')
    {
        form.submit();
        alert('Form submitted successfully');
    }
    else{
        alert('Form not submitted');
    }
})

