function encripto(frase){


	var fraseEncriptada="";											////////////////////
	
	for(i=0 ; i<frase.length ; i++){								//la funcion va tomando de a una las letras del texto
		caracter=frase.substr(i,1);
		
		
		switch(caracter){											//y las compara, si es una consonante la ubica en el
			case "a":{
				fraseEncriptada=fraseEncriptada + "ai";				//mismo lugar en un nuevo string si es una vocal
				break;
			}
			case "e":{												//le suma al string el codigo correspondiente a esa vocal
				fraseEncriptada=fraseEncriptada + "enter";
				break;
			}
			case "i":{
				fraseEncriptada=fraseEncriptada + "imes";
				break;
			}
			case "o":{
				fraseEncriptada=fraseEncriptada + "ober";
				break;
			}
			case "u":{
				fraseEncriptada=fraseEncriptada + "ufat";
				break;
			}
			default:{
				fraseEncriptada = fraseEncriptada + caracter;
				break;
			}
		}
	salidaTexto(fraseEncriptada);									////////////////////
	}

}

