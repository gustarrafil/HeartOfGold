main() {
  saudarPessoa(nome:'joao', idade:33);
  saudarPessoa(idade:47, nome:'maria');
}

saudarPessoa({String? nome, int? idade}) {
  print('ola $nome, nem parece que voce tem $idade');
}
