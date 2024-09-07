function generateId(): string {
  return Date.now().toString();
}

function readData(): Item[] {
  const data = localStorage.getItem('shoppingList');
  return data ? JSON.parse(data) : [];
}

function writeData(data: Item[]): void {
  localStorage.setItem('shoppingList', JSON.stringify(data));
}

interface Item {
  id: string;
  nome: string;
  quantidade: number;
  categoria: string;
  comprado: boolean;
}


function adicionarItem(nome: string, quantidade: number, categoria: string): void {
  if (!nome || quantidade <= 0 || !categoria) {
    return console.log('Nome, quantidade e categoria são obrigatórios.');
  }
  const itens = readData();
  itens.push({ id: generateId(), nome, quantidade, categoria, comprado: false });
  writeData(itens);
  console.log('Item adicionado:', nome);
}

function listarItens(): void {
  const itens = readData();
  itens.forEach(item => {
    console.log(`${item.id}: ${item.nome}, Quantidade: ${item.quantidade}, Categoria: ${item.categoria}, Comprado: ${item.comprado}`);
  });
}

function editarItem(id: string, novoNome?: string, novaQuantidade?: number, novaCategoria?: string): void {
  const itens = readData();
  const item = itens.find(item => item.id === id);
  if (!item) {
    return console.log('Item não encontrado.');
  }
  if (novoNome) item.nome = novoNome;
  if (novaQuantidade) item.quantidade = novaQuantidade;
  if (novaCategoria) item.categoria = novaCategoria;
  writeData(itens);
  console.log('Item editado:', item.nome);
}

function marcarComoComprado(id: string): void {
  const itens = readData();
  const item = itens.find(item => item.id === id);
  if (!item || item.comprado) {
    return console.log('Item não encontrado ou já está marcado como comprado.');
  }
  item.comprado = true;
  writeData(itens);
  console.log('Item marcado como comprado:', item.nome);
}

function listarItensComprados(): void {
  const itens = readData().filter(item => item.comprado);
  itens.forEach(item => {
    console.log(`${item.id}: ${item.nome}, Quantidade: ${item.quantidade}, Categoria: ${item.categoria}`);
  });
}

function resumoListaCompras(): void {
  const itens = readData();
  const totalComprados = itens.filter(item => item.comprado).length;
  console.log(`Total de itens: ${itens.length}, Comprados: ${totalComprados}, Não comprados: ${itens.length - totalComprados}`);
}

adicionarItem('Leite', 2, 'Laticínios');
listarItens();
const primeiroItemId = readData()[0].id;
marcarComoComprado(primeiroItemId);
listarItensComprados();
resumoListaCompras();
