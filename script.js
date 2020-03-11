const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error input massage
function showError(input,massage){
    const formControl = input.parentElement;
    formControl.className = 'form-controll error';
    const small = formControl.querySelector('small');
    small.innerHTML = massage;    
}
//show success input
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-controll success'
}
//capitalized first char
function getChar(input){
     
    return input[0].toUpperCase()+input.slice(1);
     
     
}
//check required field
function checkField(inputArr){
    inputArr.forEach(function(input){
        if(input.value === ''){
            showError(input,`${getChar(input.id)} is required`);
        }
        else{
            showSuccess(input);
        }
    })
}

//check length of input value
function checkLenght(input,min,max){
    if(input.value.length<min){
        showError(input,`${getChar(input.id)}  must be atleast ${min} character`);
    }else if(input.value.length>max){
        showError(input,`${getChar(input.id)} is must be less than ${min} character`);
    }else{
        showSuccess(input);
    }
}
//check valid email
function checkEmail(input){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)){
        showSuccess(input);
    }else{

        showError(input,'Email is not valid');
    }
}
//check if password are match or not
function checkPasswordMatch(input1 , input2){
    if(input1.value !== input2.value){
        showError(input2,'Password do not match');
    }
}
//Event listner after submiting the form
form.addEventListener('submit',function(e){
e.preventDefault();

checkField([username ,email ,password ,password2]);
checkLenght(username,3,15);
checkLenght(password,6,20);
checkEmail(email);
checkPasswordMatch(password,password2);

})