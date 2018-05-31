// /* Acá va tu código */ 

document.getElementById("encode").addEventListener("click", () => {
    const offset = document.getElementById('offset').value;
    const message = document.getElementById('message').value;
    document.getElementById('result').innerHTML = window.cipher.encode(offset, message);
});
document.getElementById("decode").addEventListener("click", () => {
    const offset = document.getElementById('offset').value;
    const message = document.getElementById('message').value;
    document.getElementById('result').innerHTML = window.cipher.decode(offset, message);
});