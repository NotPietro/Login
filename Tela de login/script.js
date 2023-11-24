const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
   
    let username = loginForm.username.value;
    let password = loginForm.password.value;

    

    if (username === "user" && password === "user") {
        alert("Login conectado com sucesso");
        location.reload();
        window.location.href="parallax/index.html";
        

    } else {
        loginErrorMsg.style.opacity = 1;
    }
});