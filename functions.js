var cep = document.getElementById("cep")
var btnSearch = document.getElementById("btnSearch")

var logradouro = document.getElementById("logradouro")
var bairro = document.getElementById("bairro")
var localidade = document.getElementById("localidade")
var uf = document.getElementById("uf")

btnSearch.addEventListener("click", (event)=>{
    event.preventDefault()
    var userCep = cep.value
    alert(userCep)

    fetch(`https://viacep.com.br/ws/${userCep}/json`)
    .then((response) => response.json())
    .then((endereço) => {
        logradouro.value = endereço.logradouro
        bairro.value = endereço.bairro
        localidade.value = endereço.localidade
        uf.value = endereço.uf
        
     })
} )