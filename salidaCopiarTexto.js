
function salidaTexto(textoSalida){

	var textOut = document.querySelector("#msg");
	textOut.value =textoSalida;

}

function portapapeles(event){

	event.preventDefault();
	var textCopy = document.querySelector("#msg");
	var textoCopiar=textCopy.value
	navigator.clipboard.writeText(textoCopiar)
        .then(() => {
        alert("el texto ha sido copiado");
    })
        .catch(err => {
        alert("ha ocurrido un error. el mensaje no fue copiado")
    })

}

var copiar = document.querySelector("#btn-copy");
copiar.addEventListener("click",portapapeles);
