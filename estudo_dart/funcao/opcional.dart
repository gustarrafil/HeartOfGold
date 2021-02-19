import 'dart:math';

main() {
  int n1 = numero(100);
  print(n1);
  int n2 = numero();
  print(n2);

  imprimirData(17, 02, 2021);
  imprimirData(17, 02);
  imprimirData(17);
  imprimirData();
}

int numero([int maximo = 11]) {
  return Random().nextInt(maximo);
}

imprimirData([int dia = 1, int mes = 1, int ano = 1970]) {
  print('$dia/$mes/$ano');
}
