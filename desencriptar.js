function desencripto(frase){

	var fraseDesencriptada="";
	
	for(i=0 ; i<frase.length ; i++){								////////////////////
		caracter=frase.substr(i,1);
		
		
		switch(caracter){											// la funcion va tomando de a una las letras si son
			case "a":{
				frase.substr(i+1,1)
				fraseDesencriptada=fraseDesencriptada + "a";		//si son consonantes la guarda de igual manera en un
				i=i+1;
				break;
			}
			case "e":{												//nuevo string, si son vocales las indentifica
				frase.substr(i+1,4)
				fraseDesencriptada=fraseDesencriptada + "e";
				i=i+4;
				break;												//y borrar los lugares de mas letras en el string y deja  
			}
			case "i":{
				frase.substr(i+1,3)
				fraseDesencriptada=fraseDesencriptada + "i";
				i=i+3;												//solo la vocal correspondiente
				break;
			}
			case "o":{
				frase.substr(i+1,3)
				fraseDesencriptada=fraseDesencriptada + "o";
				i=i+3;
				break;
			}
			case "u":{
				frase.substr(i+1,3)
				fraseDesencriptada=fraseDesencriptada + "u";
				i=i+3;
				break;
			}
			default:{
				fraseDesencriptada = fraseDesencriptada + caracter;
				break;
			}
		}
	salidaTexto(fraseDesencriptada);								////////////////////
	}

}