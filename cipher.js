window.cipher = ({
    encode: (str, offset) => {
        let message = '';
        offset = parseInt(offset); // ir guandando cada caracter
        for (let i = 0; i < str.length; i++) {
            let character = str.charCodeAt(i); // guardo el codigo ascii de cada i 
            if (65 <= character && character <= 90) {
                message += String.fromCharCode(((character - 65 + offset) % 26) + 65); //
            } // para identificar las mayúsculas
            else if (97 <= character && character <= 122) {
                message += String.fromCharCode(((character - 97 + offset) % 26) + 97);
            } // para identificar las minísculas 
            else {
                message += str.charAt(i); //para concatenar las letas
            }
        }
        return message;
    },

    decode: (str, offset) => {
        return cipher.encode(str, (26 - (offset % 26)));
    }

});