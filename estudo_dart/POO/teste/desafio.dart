import '../model/carro.dart';

main() {
  var c1 = Carro(320);

  while (!c1.estaNoLimite()) {
    print('a velocidade atual é ${c1.acelerar()}');
  }

  print('estou no maximo com velocidade ${c1.velocidadeAtual}');


  while (!c1.estaParado()) {
    print('a velocidade atual é ${c1.frear()}');
  }

  print('o carro parou com velocidade ${c1.velocidadeAtual}');

}
