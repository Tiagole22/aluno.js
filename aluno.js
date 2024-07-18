const aluno = {
  nome: 'João',
  idade: 25,
  curso: 'Engenharia de Software',
  notas: [7, 8, 6, 9],


imprimirDados: function(){
  console.log('Nome: ${this.nome}');
  console.log('Idade: ${this.idade}');
  console.log('Curso: ${this.curso}');
  console.log('Notas: ${this.notas}');
}
};

aluno.imprimirDados()
