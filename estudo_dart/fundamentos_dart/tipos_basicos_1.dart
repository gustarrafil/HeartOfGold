/*
	- numeros (int e double)
	- string (String)
	- booleano (bool)
  - dynamic
*/

main() {
  int n1 = 3;
  double n2 = (-5.67).abs();
  double n3 = double.parse("12.765");
  num n4 = 6;

  print(n1.abs() + n2 + n3 + n4);

  String s1 = "bom";
  String s2 = " dia";

  print(s1 + s2.toUpperCase() + "!!!");

  bool estaChovendo = true;
  bool muitoFrio = false;

  // ignore: dead_code
  print(estaChovendo || muitoFrio);

  // tipo dinamico, possivel alterar
  dynamic x = "um texto";
  print(x);
  x = 123;
  print(x);
  x = false;
  print(x);

  // tipo inferido, impossivel alterar
  var y = "outro texto";
  print(y);
}
