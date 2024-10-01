window.onsubmit = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc(email.value));
}

function alertSubFunc(email) {
    alert("Subscribeer \"added\": " + email);
    return false;
}