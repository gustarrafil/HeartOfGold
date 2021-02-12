import 'dart:io';

main() {
  var digitado = '';

  while (digitado != 'sair') {
    stdout.write('digite algo ou sair: ');
    digitado = stdin.readLineSync()!;
  }

  // do {
  //   stdout.write('digite algo ou sair: ');
  //   digitado = stdin.readLineSync()!;
  // }
  // while (digitado != 'sair');

  print('fim');
}
