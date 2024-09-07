"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_localstorage_1 = require("node-localstorage");
var localStorage = new node_localstorage_1.LocalStorage('./scratch');
function generateId() {
    return Date.now().toString();
}
function readData() {
    var data = localStorage.getItem('shoppingList');
    return data ? JSON.parse(data) : [];
}
function writeData(data) {
    localStorage.setItem('shoppingList', JSON.stringify(data));
}
function adicionarItem(nome, quantidade, categoria) {
    if (!nome || quantidade <= 0 || !categoria) {
        return console.log('Nome, quantidade e categoria são obrigatórios.');
    }
    var itens = readData();
    itens.push({ id: generateId(), nome: nome, quantidade: quantidade, categoria: categoria, comprado: false });
    writeData(itens);
    console.log('Item adicionado:', nome);
}
function listarItens() {
    var itens = readData();
    itens.forEach(function (item) {
        console.log("".concat(item.id, ": ").concat(item.nome, ", Quantidade: ").concat(item.quantidade, ", Categoria: ").concat(item.categoria, ", Comprado: ").concat(item.comprado));
    });
}
function editarItem(id, novoNome, novaQuantidade, novaCategoria) {
    var itens = readData();
    var item = itens.find(function (item) { return item.id === id; });
    if (!item) {
        return console.log('Item não encontrado.');
    }
    if (novoNome)
        item.nome = novoNome;
    if (novaQuantidade)
        item.quantidade = novaQuantidade;
    if (novaCategoria)
        item.categoria = novaCategoria;
    writeData(itens);
    console.log('Item editado:', item.nome);
}
function marcarComoComprado(id) {
    var itens = readData();
    var item = itens.find(function (item) { return item.id === id; });
    if (!item || item.comprado) {
        return console.log('Item não encontrado ou já está marcado como comprado.');
    }
    item.comprado = true;
    writeData(itens);
    console.log('Item marcado como comprado:', item.nome);
}
function listarItensComprados() {
    var itens = readData().filter(function (item) { return item.comprado; });
    itens.forEach(function (item) {
        console.log("".concat(item.id, ": ").concat(item.nome, ", Quantidade: ").concat(item.quantidade, ", Categoria: ").concat(item.categoria));
    });
}
function resumoListaCompras() {
    var itens = readData();
    var totalComprados = itens.filter(function (item) { return item.comprado; }).length;
    console.log("Total de itens: ".concat(itens.length, ", Comprados: ").concat(totalComprados, ", N\u00E3o comprados: ").concat(itens.length - totalComprados));
}
adicionarItem('Leite', 2, 'Laticínios');
listarItens();
var primeiroItemId = readData()[0].id;
marcarComoComprado(primeiroItemId);
listarItensComprados();
resumoListaCompras();
