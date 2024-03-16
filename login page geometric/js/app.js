const form = document.getElementById("myform");
let user_name = document.getElementById("username");
let password = document.getElementById("Password");
let Error_user = document.getElementById("Error_username");
let error_password = document.getElementById("Error_Password");
form.addEventListener("submit", validation);
user_name.addEventListener("textInput", usernameOk);
password.addEventListener("textInput", passwordOk);
let icon_show = document.querySelector(".icon");
icon_show.addEventListener("click",show);
function show(){
    
}
function validation(e) {
    e.preventDefault();
    if (user_name.value.length < 5) {
        Error_user.style.display = 'block';
        user_name.focus();
        return false;
    }
    if (password.value.length < 8) {
        error_password.style.display = 'block';
        password.focus();
        return false;
    }
}

function usernameOk() {
    if (user_name.value.length > 5) {
        Error_user.style.display = 'none';
        return true
    }
}

function passwordOk() {
    if (password.value.length > 9){
        error_password.style.display = 'none';
        return true
    }
}