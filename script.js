const baseUrl = "http://127.0.0.1:5000"
const aleatorio = "/charadas"
let resposta = ''

async function getCharada() {
    try{
        const charada = await fetch(baseUrl+aleatorio)
        console.log(charada)

        const charadaJson = await charada.json()
        console.log(charadaJson.charada)

        document.getElementById('pergunta').innerHTML = charadaJson.pergunta

        respostaCharada = charadaJson.resposta
        console.log(respostaCharada)

    }catch (error){
        console.log("Erro ao chamar a api:"+error)
    }        
}

getCharada()

function verResposta(){
    let respostaUsuario = document.getElementById('input_resposta').value.trim().toLowerCase();
    let respostaCorreta = respostaCharada.trim().toLowerCase();
    let mensagem = document.getElementById('resposta');
    
    if(respostaUsuario === respostaCorreta){
        mensagem.innerHTML = '<p class="text-success">Resposta correta!</p>';
    } else {
        mensagem.innerHTML = '<p class="text-danger">Resposta incorreta! Tente novamente.</p>';
    }
    console.log(respostaUsuario)
}