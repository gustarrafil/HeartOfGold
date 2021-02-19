main() {
  int a = 2;

  // tipo nome = valor;
  int Function(int, int) soma1 = somaFn;
  print(soma1(20, 3));

  int Function(int, int) soma2 = (x, y) {
    return x + y;
  };
  print(soma2(20, 4));

  var soma3 = (x, y) {
    return x + y;
  };
  print(soma3(20, 5));
}

int somaFn(int a, int b) {
  return a + b;
}
