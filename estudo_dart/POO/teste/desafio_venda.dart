import '../model/cliente.dart';
import '../model/produto.dart';
import '../model/venda.dart';
import '../model/venda_item.dart';

main() {
  var venda = Venda(
      cliente: Cliente(nome: 'gustavo', cpf: '123.456.789-00'),
      itens: <VendaItem>[
        VendaItem(
            quantidade: 10,
            produto:
                Produto(codigo: 1, nome: 'caneta', preco: 4.59, desconto: 0.5)),
        VendaItem(
            quantidade: 7,
            produto: Produto(
                codigo: 123, nome: 'caderno', preco: 18.50, desconto: 0.4)),
        VendaItem(
            quantidade: 100,
            produto: Produto(
                codigo: 58, nome: 'borracha', preco: 2.00, desconto: 0.8)),
      ]);

  print("valor total da venda ${venda.itens[0].preco}");
}
