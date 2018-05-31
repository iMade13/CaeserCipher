window.cipher = {
    encode: (offset, str) => {
        let message = '';
        offset = parseInt(offset); // ir guandando cada caracter
        for (let i = 0; i < str.length; i++) {
            const character = str.charCodeAt(i); // guardo el codigo ascii de cada i 
            if (65 <= character && character <= 90) // para identificar las mayúsculas
                message += String.fromCharCode(((character - 65 + offset) % 26) + 65); //
            else if (97 <= character && character <= 122) // para identificar las minísculas 
                message += String.fromCharCode(((character - 97 + offset) % 26) + 97);
            else
                message += str.charAt(i); //para concatenar las letas
        }
        return message;
    },

    decode: (offset, str) => {
        return window.cipher.encode((26 - offset), str);
    }

}