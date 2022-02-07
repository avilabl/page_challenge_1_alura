var parrafo;
var encriptarDesencriptar = false;
var caracter;


function accionEncriptar (event){									////////////////////
	
	event.preventDefault();											//frena el evento patron
	encriptarDesencriptar=true;
	recuperoTexto(encriptarDesencriptar);							//y identifica si se presiono
}

function accionDesencriptar (event){								//encriptar o desencriptar

	event.preventDefault();
	encriptarDesencriptar=false;
	recuperoTexto(encriptarDesencriptar);							////////////////////
}

function  recuperoTexto(encriptarDesencriptar){						////////////////////
	
	var textIn = document.querySelector("#input-texto");			//recupero el texto ingresado en el box
	var texto = textIn.value;
	if(encriptarDesencriptar){ 										//llama a la funcion correspondiente 
		encripto(texto);
	}else{															//segun se alla presionado
		desencripto(texto);				
	}																////////////////////
}

var encriptar = document.querySelector("#btn-encriptar");			////////////////////
encriptar.addEventListener("click",accionEncriptar);				//capturacion del click sobre el boton

var desencriptar = document.querySelector("#btn-desencriptar");		//encriptar y desencriptar
desencriptar.addEventListener("click",accionDesencriptar);			////////////////////

