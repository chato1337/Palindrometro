const regexEspacios = /\s+/g

const quitarEspacios = (texto) => {
    let minuscula = texto.toLowerCase()
    if(minuscula.match(regexEspacios)){
        return minuscula.replace(regexEspacios, '')
    }else{
        return minuscula
    }
}

const invertirTexto = (textoSinEspacios) => {
    let indice = textoSinEspacios.length
    let textoInvertido = '';

    while(indice >= 0){
        textoInvertido = textoInvertido + textoSinEspacios.charAt(indice)
        indice --;
    }

    return textoInvertido
}

const esPalindromo = (textoInvertido, textoSinEspacios, texto) => {
    if (textoInvertido === textoSinEspacios){
        return `✅ El texto <strong> ${texto} </strong> SI es un palindromo`
    }else{
        return `❌ El texto <strong> ${texto} </strong> NO es un palindromo`
    }
}

const imprimirResultados = (resultado) => {
    document.getElementById('result').innerHTML = resultado;
}

imprimirResultados('✏️ ingresa un texto para comprobar si es palindromo 🤖')

function comprobarPalindromo(){
    const texto = document.querySelector('#input-text').value;
    let textoSinEspacios = quitarEspacios(texto)
    let textoInvertido = invertirTexto(textoSinEspacios);
    let resultado = esPalindromo(textoInvertido, textoSinEspacios, texto)
    imprimirResultados(resultado)
}
