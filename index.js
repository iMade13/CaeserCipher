// /* Acá va tu código */ 

document.getElementById("encode").addEventListener("click", () => {
    let offset = document.getElementById('offset').value;
    let message = document.getElementById('message').value;
    document.getElementById('result').innerHTML = window.cipher.encode(offset, message);
});
document.getElementById("decode").addEventListener("click", () => {
    let offset = document.getElementById('offset').value;
    let message = document.getElementById('message').value;
    document.getElementById('result').innerHTML = window.cipher.decode(offset, message);
});