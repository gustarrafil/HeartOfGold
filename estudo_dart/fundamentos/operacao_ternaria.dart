import 'dart:io';

main() {
  print('ta chovendo? ');
  bool taChovendo = stdin.readLineSync() == 's';

  print('ta frio? ');
  bool taFrio = stdin.readLineSync() == 's';

  String resultado = taChovendo || taFrio ? 'ficar em casa' : 'sair';
  print(resultado);
}
