import 'dart:math';

void executar(Function fnPar, Function fnImpar) {
  var sorteado = Random().nextInt(10);
  print(sorteado);
  sorteado % 2 == 0 ? fnPar() : fnImpar();
}

void executarPor(int qtd, Function(String) fn, String valor) {
  for (int i = 0; i < qtd; i++) {
    fn(valor);
  }
}

main() {
  var minhaFnPar = () => print('o valor é par');
  var minhaFnImpar = () => print('o valor é impar');

  executar(minhaFnPar, minhaFnImpar);

  executarPor(10, print, 'muito legal');
}
