function proverka() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');
    
    if (/^[A-Za-z]+$/.test(username) && /[A-Za-z]/.test(password) && /[0-9]/.test(password)) {
        message.textContent = "Ваши данные записаны";
        message.style.color = "green";
    } else {
        message.textContent = "Пароль должен содержать сочетание букв и цифр";
        message.style.color = "red";
    }
}