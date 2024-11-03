const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 5);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkMatch(password, password2);
})

function checkEmail(input){
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(re.test(String(email.value).toLowerCase())){
        showSuccess(input);
    }

    else{
        showError(input, "Please enter a valid " + getFieldName(input))
    }
}

function showError(input, msg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = msg;
    formControl.className = "form-control error";
    

}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() == ''){
            showError(input, getFieldName(input) + " is required");
        }

        else{
            showSuccess(input);
        }
    })
}

function getFieldName(input){
    if(input.id == "password2"){
        return "Email confirmation";
    }
    else return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, getFieldName(input) + " must be more than " + String(min) + " characters");
    }

    if(input.value.length > max){
        showError(input, getFieldName(input) + " must be less than " + String(max) + " characters");
    }
}

function checkMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match");
    }
}