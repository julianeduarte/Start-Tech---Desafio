'use strict';

// validação do CEP
const limparFormulário = (endereço) => {
    document.getElementById('endereço').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const preencherFormulário = (endereço) => {
    document.getElementById('endereço').value = endereço.logradouro;
    document.getElementById('bairro').value = endereço.bairro;
    document.getElementById('cidade').value = endereço.localidade;
    document.getElementById('estado').value = endereço.uf;
}

const isNumber = (número) => /^[0-9]+$/.test(número);

const cepVálido = (cep) => cep.length == 8 && isNumber(cep);

const pesquisarCEP = async() => {
    limparFormulário();

    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepVálido(cep)){
        const dados = await fetch(url);
        const endereço = await dados.json();
        if (endereço.hasOwnProperty('erro')){
        document.getElementById('endereço').value = 'CEP não encontrado!';
        } else{
            preencherFormulário(endereço);
        }
    } else{
        document.getElementById('endereço').value = 'CEP incorreto!';
    }
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCEP); 

// validação CPF
function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validacaoCPF() {
    let cpf = document.getElementById('cpf').value;

    let resultadoValidacao = validaCPF(cpf);

    if (!resultadoValidacao) {
        document.getElementById('erroCPF').style.display = 'block';
        document.getElementById('errocampoCPF').style.display = 'block';
        return false;
    } else {
        document.getElementById('erroCPF').style.display = 'none';
        document.getElementById('errocampoCPF').style.border = 'none';
        return true;
    }

}

document.getElementById('cpf')
        .addEventListener('focusout', validacaoCPF);

//usuário
        const express = require('express');
        const mongoose = require('mongoose');
        const swaggerUI = require('swagger-ui-express');
        const swaggerDocs = require('./swagger.json');
        const app = express();
        const cors = require('cors')
        
        
        mongoose.connect('mongodb+srv://aleatorio9877:010203090807@cluster0.nnaq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true
        });

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('7777777', () => {
    console.log('rodando na porta 7777777');
});