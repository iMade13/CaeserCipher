// /* Acá va tu código */ 

document.getElementById("encode").addEventListener("click", () => {
    const message = document.getElementById('message').value;
    const offset = document.getElementById('offset').value;
    document.getElementById('result').innerHTML = cipher.encode(message, offset);
});
document.getElementById("decode").addEventListener("click", () => {
    const message = document.getElementById('message').value;
    const offset = document.getElementById('offset').value;
    document.getElementById('result').innerHTML = cipher.decode(message, offset);
});