import 'dart:math';

main() {
  var nota = Random().nextInt(11);

  print('nota selecionada foi ${nota}');

  if (nota >= 9) {
    print('quadro de honra!');
  } else if (nota >= 7) {
    print('aprovado!');
  } else if (nota >= 5) {
    print('recuperacao');
  } else if (nota >= 4) {
    print('recuperacao + trabalho');
  } else {
    print('reprovado!');
  }

  if(nota >= 9) {
    print('quadro de honra!');
  } else {
    if(nota >= 7) {
      print('aprovado!');
    } else {
      if(nota >= 5) {
        print('recuperacao');
      } else {
        if(nota >= 4) {
          print('recuperacao + trabalho');
        } else {
          print('reprovado!');
        }
      }
    }
  }
}
