main() {
  for (int a = 0; a < 10; a++) {
    if (a == 6) {
      break;
    }
    print(a);
  }

  print('depois do for com break');


  for (int a = 0; a < 10; a++) {
    if (a % 2 == 0) {
      continue;
    }
    print(a);
  }

  print('depois do for com continue');


}
