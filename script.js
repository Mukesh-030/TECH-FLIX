document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();

const us="techflix";
const pw="password";

const username=document.getElementById("username").value;
const password=document.getElementById("password").value;


if(username===us && password===pw){
    window.location.href="home.html";
}

else{
    document.getElementById('error').textContent= 'Invalid username or  password';
}

});