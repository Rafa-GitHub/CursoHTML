let listaPecas = []
let listaServico = []

function inserirLista(){
    var saida = document.getElementById("txtSaida")
    //saida.innerHTML = `REPARO`
    listaPecas.push("Rafa")
    listaPecas.push("Kraetzer")
    saida.innerHTML = `${listaPecas}`
}