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
})

function isValidEmail(email){
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email.value).toLowerCase());
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
        showError(input, getFieldName(input) + " is too short");
    }

    if(input.value.length > max){
        showError(input, getFieldName(input) + " is too long");
    }
}