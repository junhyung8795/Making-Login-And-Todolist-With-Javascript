const loginForm=document.querySelector(".login-form");
const loginInput=document.querySelector(".login-form input");
const loginButton=document.querySelector(".login-form button");
const link=document.querySelector("a");
const greeting=document.querySelector(".greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";
const savedUserName=localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
    greeting.innerText=`Let's start today ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.remove("login-form");
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add("greeting-appear");
    greeting.classList.remove("hidden");
    const usernameValue=loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameValue);
    paintGreetings(usernameValue);
}



if(savedUserName===null){
    loginForm.addEventListener("submit" ,onLoginSubmit);
} else {
    loginForm.classList.remove("login-form");
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add("greeting-appear");
    greeting.classList.remove("hidden");
    paintGreetings(savedUserName);
}

