// /* Acá va tu código */
// window.index = {
function displace(text, num) {
    let message = '';
    for (let i = 0; i < text.length; i++) {
        const character = text.charCodeAt(i);
        if (65 <= character && character <= 90)
            message = message + String.fromCharCode((character - 65 + num) % 26 + 65);
        else if (97 <= character && character <= 122)
            message = message + String.fromCharCode((character - 97 + num) % 26 + 97);
        else
            message += text.charAt(i);
    }
    return message;
}