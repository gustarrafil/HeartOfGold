import 'produto.dart';

class VendaItem {
  int quantidade;
  Produto produto;
  var _preco;

  VendaItem({required this.produto, this.quantidade = 1});

  double get preco {
    // ignore: unnecessary_null_comparison
    if (produto != null && _preco == null) {
      _preco = produto.precoComDesconto;
    }
    return _preco;
  }

  void set preco(double novoPreco) {
    if (novoPreco > 0) {
      _preco = novoPreco;
    }
  }
}
