import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

//////////////////////////////////////////  QUASE SEMPRE ASSIM
class MyHomePage extends StatefulWidget {
  // construtor
  MyHomePage({Key key, this.title}) : super(key: key);
  // atributo
  final String title;
  // CreateState
  @override
  _MyHomePageState createState() {
    return _MyHomePageState();
  }
}
//////////////////////////////////////////

////////////////////////////// ALTERACAOD DE ESTADO QUE ACONTECE NO STATEFUL
class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {

    List<Color> manyColors = [Colors.yellow, Colors.grey, Colors.red];

    List<Widget> myRowChildren = [];
    List<int> columnNumbers = [];
    List<List<int>> numbers = [];
    int z = 0;
    for (int i = 0; i < 9; i++) {
      int maxColNr = 10;
      for (int y = 0; y < maxColNr; y++) {
        int currentNumber = z + y;
        columnNumbers.add(currentNumber);
      }
      z += maxColNr;
      numbers.add(columnNumbers);
      columnNumbers = [];
    }

    myRowChildren = numbers
        .map(
          (columns) => Column(
            children: columns.map((nr) {
              int min = 0;
              int max = manyColors.length;
              Random rnd = new Random();
              int randomNumber = min + rnd.nextInt(max - min);
              return Container(
                margin: EdgeInsets.all(10),
                color: manyColors[randomNumber],
                child: Icon(
                  Icons.stop_rounded,
                  color: manyColors[randomNumber],
                  size: 20.0,
                ),
              );
            }).toList(),
          ),
        )
        .toList();

    return Scaffold(
        appBar: AppBar(
          title: Text("Caminho do Thor"),
        ),
        body: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: myRowChildren,
        ));
  }
}
//////////////////////////////////////////

Icon novo() {
  return Icon(
    Icons.circle,
    color: Colors.green,
    size: 10.0,
  );
}

List<Widget> nova_linha() {
  List<Widget> new_l = [];
  for (int l = 0; l < 5; l++) {
    new_l.add(novo());
  }

  return new_l;
}

List<List<Widget>> nova_coluna() {
  List<List<Widget>> new_c = [];
  for (int c = 0; c < 3; c++) {
    new_c.add(nova_linha());
  }

  return new_c;
}
