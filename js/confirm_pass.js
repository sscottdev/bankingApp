function matchPassword() {
    const pw1 = document.getElementById("password");
    const pw2 = document.getElementById("confirm_password");
    if(pw1 !== pw2)
    {
        alert("Passwords did not match");
    } else {
        alert("Password created successfully");
    }
}