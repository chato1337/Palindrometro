const regexEspacios = /\s+/g

const quitarEspacios = (texto) => {
    if(texto.match(regexEspacios)){
        return texto.replace(regexEspacios, '')
    }else{
        return texto
    }
}

const invertirTexto = (textoSinEspacios) => {
    let indice = textoSinEspacios.length
    let textoInvertido = '';

    while(indice >= 0){
        debugger
        textoInvertido = textoInvertido + textoSinEspacios.charAt(indice)
        indice --;
    }

    return textoInvertido
}

const esPalindromo = (textoInvertido, textoSinEspacios, texto) => {
    if (textoInvertido === textoSinEspacios){
        return `✅ El string <strong> ${texto} </strong> SI es un palindromo`
    }else{
        return `❌ El string <strong> ${texto} </strong> NO es un palindromo`
    }
}

const imprimirResultados = (resultado) => {
    document.getElementById('result').innerHTML = resultado;
}

imprimirResultados('ingresa un texto ✏️ para comprobar si es palindromo 🤖')

function comprobarPalindromo(){
    const texto = document.querySelector('#input-text').value;
    let textoSinEspacios = quitarEspacios(texto)
    let textoInvertido = invertirTexto(textoSinEspacios);
    let resultado = esPalindromo(textoInvertido, textoSinEspacios, texto)
    imprimirResultados(resultado)
}
