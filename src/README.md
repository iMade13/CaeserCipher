# CIFRADO CESAR

Está aplicación web en primer lugar le solicita al usuario la cantidad de posiciones que desea cifrar/descifrar su
respectivo mensaje. En una caja de texto el usuario debo ingresar lo que desea encriptar y darle click a la opción
de su preferencia.  

<a href="https://ibb.co/fdNZfy"><img src="https://preview.ibb.co/d6n0Ly/screenshot_app.jpg" alt="screenshot_app" border="0"></a>


## Introducción

El cifrado es un procedimiento que utiliza un algoritmo de cifrado con cierta clave 
(clave de cifrado) para transformar un mensaje, sin atender a su estructura lingüística 
o significado, de tal forma que sea incomprensible o, al menos, difícil de comprender 
a toda persona que no tenga la clave secreta (clave de descifrado) del algoritmo.

El cifrado César consistía en escribir el mensaje con un alfabeto que estaba formado 
por las letras del alfabeto latino normal desplazadas tres posiciones a la derecha. 
Con nuestro alfabeto el sistema quedaría así:

Alfabeto en claro:	A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z
Alfabeto cifrado:	D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z A B C

## Funcionalidad 

Consiste en 2 funciones que se invocan en el DOM a través de un objeto llamado Window.cipher. 
La función _cipher.encode()_ usamos dos argumentos: 1.El mensaje que se desea cifrar (str) 2.Las posiciones que se 
desea desplazar el cifrado (offset). Se usa un _for_ para obtener primero la posición de cada cáracter y luego el código
ASCII que necesitamos cifrar con la función _charCodeAt(i)_ y se guarda en _let character_.
Se usa la condición _if, else_ para determinar cuando estamos usando las mayúsculas o mínisculas según su posición en el
código ascii. Con la formúla (character - 65/97 + offset) % 26) + 65/97) y la funcion _String.fromCharCode_ nos devuelve 
el código ascii a un string que lo guardamos en _let message_. 
La función _cipher.decode_ retornamos la función _cipher.encode_ con los parametros (str, y la formula (26 - (offset % 26
para lograr el descifrado. 

Para escuchar los eventos del DOM usamos la función _addEventListener('click')_ para invocar el objeto _cipher.encode() y cipher.decode()_. 

## Diseño

Se hizo una aplicación fácil de usar para todo tipo de usuarios. En el diseño se usa un background-image con una pizarra
para simular que el mensaje cifrado/descifrado se imprima en la misma. La fuente se usa de google font y se intento hacer 
un poco de responsive. Colores llamativos y agradables a la vista. 


