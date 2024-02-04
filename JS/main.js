

//Funcão para encriptar e validar os dados enviados
function criptografarMensagem() 
{   
    let texto = document.getElementById('mensagemOriginal').value;
    let paragrafo = document.getElementById('corpo_resultado_texto');
    paragrafo.innerText = '';

    if (texto === "")//1º realiza a conferencia se clicou sem nada dentro.
    {
        document.getElementById('corpo_resultado_verificacao').style.display = "inline-block";
        document.getElementById('copiar').style.display = 'none';

        textopadrao();
        return 
    }
    else if (texto != texto.toLowerCase()) //2º verifica se escreveu com letra maiuscula.
    {
        document.getElementById('corpo_resultado_verificacao').style.display = "inline-block";
        document.getElementById('copiar').style.display = 'none';

        textopadrao();
        return
    }
    else if (/[[áàâãéèêíïóôõöúçñü@#$%¨&*]/i.test(texto))//3º Verifica se possui algum acento ou caracter expecial.
    {
        document.getElementById('corpo_resultado_verificacao').style.display = "inline-block";
        document.getElementById('copiar').style.display = 'none';

        textopadrao();
        return
    }
    else //4º por final se as duas etapas estão Ok e realizado a descriptografia.
    {
        document.getElementById('corpo_resultado_verificacao').style.display = 'none';
        document.getElementById('copiar').style.display = 'inline-block';

        let mensagemOriginal = document.getElementById('mensagemOriginal').value;
        let mensagemCriptografada = criptografar(mensagemOriginal);
        document.getElementById('corpo_resultado_texto').innerText = mensagemCriptografada; 
        
    }
}
// Função para descriptografar
function descriptografarMensagem()
{
    let texto = document.getElementById('mensagemOriginal').value;
    let paragrafo = document.getElementById('corpo_resultado_texto');
    paragrafo.innerText = '';

    if (texto === "")//1º realiza a conferencia se clicou sem nada dentro.
    {
        document.getElementById('corpo_resultado_verificacao').style.display = "inline-block";
        document.getElementById('copiar').style.display = 'none';

        textopadrao();
        return 
    }
    else if (texto != texto.toLowerCase())//2º verifica se escreveu com letra maiuscula.
    {
        document.getElementById('corpo_resultado_verificacao').style.display = "inline-block";
        document.getElementById('copiar').style.display = 'none';
        textopadrao();
        return
    }
    else if (/[[áàâãéèêíïóôõöúçñü@#$%¨&*]/i.test(texto))//3º Verifica se possui algum acento ou caracter expecial.
    {
        document.getElementById('corpo_resultado_verificacao').style.display = "inline-block";
        document.getElementById('copiar').style.display = 'none';

        textopadrao();
        return
    }
    else    //4º por final se as duas etapas estão Ok e realizado a descriptografia.
    {
        document.getElementById('corpo_resultado_verificacao').style.display = 'none';
        document.getElementById('copiar').style.display = 'inline-block';

        let mensagemCriptografada = document.getElementById('mensagemOriginal').value;
        let mensagemDescriptografada = descriptografar(mensagemCriptografada);
        document.getElementById('corpo_resultado_texto').innerText = mensagemDescriptografada;
        
    }
}

// Senha para descriptografar
function descriptografar(textoCriptografado) { 
    textoCriptografado = textoCriptografado.replace(/enter/g, 'e');
    textoCriptografado = textoCriptografado.replace(/imes/g, 'i');
    textoCriptografado = textoCriptografado.replace(/ai/g, 'a');
    textoCriptografado = textoCriptografado.replace(/ober/g, 'o');
    textoCriptografado = textoCriptografado.replace(/ufat/g, 'u');
    return textoCriptografado;
}
// Senha para criptografar
function criptografar(texto) {
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
}

function copiarMensagem() {
    // Seleciona o texto do parágrafo
    var paragrafo = document.getElementById('corpo_resultado_texto');
    var textoParaCopiar = paragrafo.innerText;

    // Cria um elemento de área de transferência
    var textareaTemporario = document.createElement('textarea');
    textareaTemporario.value = textoParaCopiar;

    // Adiciona o elemento de área de transferência ao corpo da página
    document.body.appendChild(textareaTemporario);

    // Seleciona o texto na área de transferência
    textareaTemporario.select();
    textareaTemporario.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Remove o elemento de área de transferência
    document.body.removeChild(textareaTemporario);

    // Opcional: Altere o texto do botão após a cópia
    alert('Texto Copiado!');
    
    // Opcional: Restaura o texto original após um curto período
    setTimeout(function() {
      botao.innerText = 'Copiar Parágrafo';
    }, 1500);
  }
  //Mensagem padrão do sistema.
  function textopadrao() //texto padrão para todos as informações mostradas de alerta;
  {
    
    alert('Favor colocar as letras em minúsculo e sem acentos ou caracteres expeciais!');
    return 

  }