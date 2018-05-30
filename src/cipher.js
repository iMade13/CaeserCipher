window.cipher = {
    encode: (offset, str) => {
        offset = document.getElementById("offset").value;
        str = document.getElementById('str').value;
        let message = ''; // ir guandando cada caracter
        for (let i = 0; i < str.length; i++) {
            const character = str.charCodeAt(i); // guardo el codigo ascii de cada i 
            if (65 <= character && character <= 90) // para identificar las mayúsculas
                message += String.fromCharCode((character - 65 + offset) % 26 + 65); //
            else if (97 <= character && character <= 122) // para identificar las minísculas 
                message += String.fromCharCode((character - 97 + offset) % 26 + 97);
            else
                message += str.charAt(i); //para concatenar las letas
        }
        return document.getElementById("encode").addEventListener("click", function() {
            encode(, );
        });

        function encode(offset, str) {

            document.getElementById("demo").innerHTML = result;
        }
    },

    decode: (offset, string) => {
        return encode(string, (26 - offset))
    }
}