import 'dart:math';

main() {
  somaComPrint(2, 3);

  int c = 4;
  int d = 5;
  somaComPrint(c, d);

  somaDoisNumeros();
}

void somaComPrint(int a, int b) {
  print(a + b);
}

void somaDoisNumeros() {
  int n1 = Random().nextInt(11);
  int n2 = Random().nextInt(11);
  print('os valores sorteados foram $n1 e $n2');
}
