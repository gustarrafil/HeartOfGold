import 'dart:io';

main() {
  // area de circunferencia = PI * raio * raio

  // constante com const e em caps, definida em compilacao
  const PI = 3.1415;

  // print sem quebra de linha
  stdout.write("informe o raio: ");

  // entrada do usuario no terminal
  // usando ! pra verificar nullable
  // constante com final, definida em runtime
  final entradaDoUsuario = stdin.readLineSync()!;
  final double raio = double.parse(entradaDoUsuario);

  var area = PI * raio * raio;

  print("o valor da area é " + area.toString());
}
