main() {
  var alunos = [
    {'nome': 'alfredo', 'nota': 9.9},
    {'nome': 'wilson', 'nota': 9.3},
    {'nome': 'mariana', 'nota': 8.7},
    {'nome': 'guilherme', 'nota': 8.1},
    {'nome': 'ana', 'nota': 7.6},
    {'nome': 'ricardo', 'nota': 6.8},
  ];

  String Function(Map) pegarApenasNome = (aluno) => aluno['nome'];
  int Function(String) qtdLetras = (texto) => texto.length;
  var nomes = alunos.map(pegarApenasNome);
  var qntdLetras = nomes.map(qtdLetras);
  print(nomes);
  print(qntdLetras);

  ///////////////////////////////////////////////////

  var notas = [7.3, 5.4, 7.7, 8.1, 5.5, 4.9, 9.1, 10.0];
  var total = notas.reduce(somar);

  print(total);
}

double somar(double acumulado, double elemento) {
  return acumulado + elemento;
}
