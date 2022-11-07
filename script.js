//console.log('Script funcionando?');

let formulario = document.querySelector("form");

let inputNome = document.querySelector(".nome");
let inputEmail = document.querySelector(".email");
let inputSenha = document.querySelector(".senha");
let inputTelefone = document.querySelector(".tel");


/*function cadastrar() {

    fetch ( "http://localhost:8080/cadastrar",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: inputNome.value,
                email: inputEmail.value,
                senha: inputSenha.value,
                telefone: inputTelefone.value
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
        })
};*/

function limpar() {
    document.querySelector("form").reset();
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    
   /* let dados = {
        nome: inputNome.value,
        email: inputEmail.value,
        senha: inputSenha.value,
        telefone: inputTelefone.value
    }

    console.table(dados)*/
    //cadastrar();
    limpar();
});

/*function limpar() {

    inputNome.value = "";
    inputEmail.value = "";
    inputSenha.value = "";
    inputTelefone.value = "";

};*/