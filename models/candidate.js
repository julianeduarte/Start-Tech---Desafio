const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    profissão: { type: String, unique: false, required: true},
    cargo: { type: String, unique: false, required: false},
    datadenascimento: { type: String, unique: false, required: false},
    estadocivil: { type: String, unique: false, required: false},
    gênero: { type: String, unique: true, required: true},
    cep: { type: String, unique: false, required: true },
    endereço: { type: String, unique: false, required: false},
    número: { type: String, unique: false, required: false},
    bairro: { type: String, unique: false, required: false},
    cidade: { type: String, unique: false, required: false},
    estado: { type: String, unique: false, required: false},
    celular: { type: String, unique: false, required: true},
    telefone: { type: String, unique: true, required: true },
    email: { type: String, unique: false, required: false},
    rg: { type: String, unique: false, required: true},
    cpf: { type: String, unique: false, required: true},
    habilitação: { type: String, unique: false, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('candidate', CandidateSchema);