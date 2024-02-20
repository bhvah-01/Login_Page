function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Example validation
    if(username == "admin" && password == "password") {
        document.getElementById('loginMessage').textContent = "";
        alert("Login successful.");
    } else {
        document.getElementById('loginMessage').textContent = "Login failed.";
    }
}
