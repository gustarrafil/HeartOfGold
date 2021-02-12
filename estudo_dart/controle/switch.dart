import 'dart:math';

main() {
  var nota = Random().nextInt(11);

  print('a nota é $nota');

  switch (nota) {
    case 10: case 9:
      print('quadro de honra');
      break;
    case 8:
      print('aprovado');
      break;
    default:
      print('nota invalida');
  }

  print('fim');
}
