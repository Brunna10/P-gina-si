ondragstart();

function start(){
    var buttonAdd = document.getElementById('Add');
    buttonAdd.onclick = function(){
    saveLocalStorage();
};

var buttonGetData = document.getElementById('check');
buttonGetData.onclick = function (){
    getDataLocalStorage();
};

function saveLocalStorage (){
    var inputCodigo = document.getElementById('Codigo');
    var inputName = document.getElementById('Nome');
    var inputEmail = document.getElementById('Email');
    var inputCpf = document.getElementById('Cpf');

    localStorage.setItem('CODIGO_CLIENTE', inputCodigo.value);
    localStorage.setItem('NOME_CLIENTE', inputName.value);
    localStorage.setItem('EMAIL_CLIENTE', inputEmail.value);
    localStorage.setItem('CPF_CLIENTE', inputCpf.value);
};

function getDataLocalStorage(){
    var Codigo = localStorage.getItem('CODIGO_ALUNO');
    var Nome = localStorage.getItem('NOME_CLIENTE');
    var Email = localStorage.getItem('EMAIL_CLIENTE');
    var Cpf = localStorage.getItem('CPF_CLIENTE');

    var inputCodigo = document.getElementById('Codigo');
    var inputName = document.getElementById('Nome');
    var inputEmail = document.getElementById('Email');
    var inputCpf = document.getElementById('Cpf');

    inputCodigo.value = Codigo;
    inputName.value = Nome;
    inputEmail.value = Email;
    inputCpf.value = Cpf;
    
}