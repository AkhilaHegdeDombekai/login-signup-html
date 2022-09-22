function setFormMessage(formElement, type, message){
    const mesgElement = formElement.querySelector(".form__message");
    mesgElement.textContent=message;
    mesgElement.classList.remove("form__message--success","form__message--error");
    mesgElement.classList.add('form__message--'+type);
}

function setInputError(inputElement,message){
inputElement.classList.add("form__input--error");
inputElement.parentElement.querySelector(".form__input-error-message").textContent =message;

}
const loginForm=document.querySelector("#login")
//setFormMessage(loginForm, "success" ,"you're logged in successfully!")

function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error")
    inputElement.parentElement.querySelector(".form__input-error-message").textContent ="";
}

document.addEventListener("DOMContentLoaded",()=>{
const loginForm=document.querySelector("#login")
const CreateAccountForm=document.querySelector("#createAccount")

document.querySelector("#linkCreateAccount").addEventListener("click",e=>{
    e.preventDefault();
loginForm.classList.add("form--hidden");
CreateAccountForm.classList.remove("form--hidden");
});

document.querySelector("#linkLogin").addEventListener("click",e=>{
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    CreateAccountForm.classList.add("form--hidden");
    });

loginForm.addEventListener("submit",e =>{
e.preventDefault();
setFormMessage(loginForm,"error","Invalid User Name/ Password")
});

document.querySelectorAll(".form__input").forEach(inputElement=>{
inputElement.addEventListener("blur",e=>{
if(e.target.id==="passwordd" && e.target.length>0&&e.target.value.length<10){
    setInputError(inputElement,"Password must contain 10 charechters in length");
}
});
inputElement.addEventListener("input",e=>{
clearInputError(inputElement);
});
});
});