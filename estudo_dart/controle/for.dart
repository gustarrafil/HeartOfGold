main() {
  for (int a = 1; a <= 10; a += 2) {
    print('a = $a');
  }

  for (int a = 100; a >= 0; a -= 4) {
    print('a = $a');
  }

  int b = 0;
  for (; b <= 10; b++) {
    print('b = $b');
  }
  print('[FORA] b = $b');

  var notas = [8.9, 9.3, 7.8, 6.9, 9.1];
  for (var i = 0; i < notas.length; i++) {
    print('nota ${i + 1} = ${notas[i]}');
  }

  print('fim');

  //////////////////////////////////////////

  notas = [8.9, 9.3, 7.8, 6.9, 9.1];
  for (var nota in notas) {
    print('o valor da nota é $nota');
  }

  var set_notas = [8.9, 9.3, 7.8, 6.9, 9.1];
  for (var nota in set_notas) {
    print('o valor da nota é $nota');
  }

  var coordenadas = [
    [1, 3],
    [9, 1],
    [19, 23],
    [2, 14],
  ];
  for (var coordenada in coordenadas) {
    for (var ponto in coordenada) {
      print('o valor do ponto é $ponto');
    }
  }

  //////////////////////////////////////////

  Map<String, double> notas_map = {
    'joao': 9.1,
    'maria': 7.2,
    'ana': 6.4,
    'roberto': 8.8,
    'pedro': 9.9,
  };
  for (String nome in notas_map.keys) {
    print('nome do aluno é $nome');
  }
  for (var nota in notas_map.values) {
    print('a nota é $nota');
  }
  for (String nome in notas_map.keys) {
    print('nome do aluno é $nome e a nota é ${notas_map[nome]}');
  }
  for (var registro in notas_map.entries) {
    print('o  ${registro.key} tem nota ${registro.value}');
  }

  //////////////////////////////////////////

  for (var valor = '#'; valor != '#######'; valor += '#') {
    print(valor);
  }
}
