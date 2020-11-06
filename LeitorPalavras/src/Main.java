import java.io.PrintWriter;
import java.util.*;
import java.io.File;
import java.io.FileNotFoundException;

public class Main {
    public static void main(String[] args) {
        try {

            File arquivotxt = new File ("G:\\Meu Drive\\Sistemas de Informação\\SI 2s-2020\\Programação Orientada a Objetos 2\\LeitorPalavras\\src\\teste.txt");
            Scanner leitortxt = new Scanner(arquivotxt);

            String completo = "";
            while (leitortxt.hasNextLine()) {
                String data = leitortxt.nextLine() + " ";
                completo += data;
            }
            completo = completo.toLowerCase();
            String delimiters = "\\s+|,\\s*|\\.\\s*";
            String[] lista_original = completo.split(delimiters);

            //////////////////////////////////////////////////////////////////////////////////////////////////////
            HashMap<String, ArrayList<String>> todas = new HashMap<String, ArrayList<String>>();
            ArrayList<String> cada = new ArrayList<String>();
            for (int k=0;k<lista_original.length-1;k++) {
                cada = new ArrayList<String>();
                String primeira = lista_original[k];
                String segunda = lista_original[k+1];

                if (!todas.containsKey(primeira)) {
                    cada.add(segunda);
                    todas.put(primeira, cada);
                } else {
                    if (!todas.get(primeira).contains(segunda)) {
                        todas.get(primeira).add(segunda);
                    } else {
                        continue;
                    }
                }
            }

//            System.out.println(todas);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ArrayList<String> ordem = new ArrayList<String>();
            for (int k=0;k<lista_original.length-1;k++) {
                if (!ordem.contains(lista_original[k])) {
                    ordem.add(lista_original[k]);
                }
            }
            Collections.sort(ordem);

//            System.out.println(ordem);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ArrayList<ArrayList<String>> completa = new ArrayList<ArrayList<String>>();
            for (int k=0;k<ordem.size();k++) {
                completa.add(new ArrayList<>());
                completa.get(k).add(ordem.get(k));
            }

//            System.out.println(completa);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ArrayList<ArrayList<String>> ultima = new ArrayList<ArrayList<String>>();
            for (int k=0;k<completa.size();k++) {
//                System.out.print(completa.get(k).get(0) + ' ');
                ultima.add(new ArrayList<String>());
                ultima.get(k).add(completa.get(k).get(0));
                for (int p=0;p<todas.get(completa.get(k).get(0)).size();p++) {
//                    System.out.print(todas.get(completa.get(k).get(0)).get(p) + ' ');
                    ultima.get(k).add(todas.get(completa.get(k).get(0)).get(p));
                }
//                System.out.print('\n');
            }

            for (int k=0;k<ultima.size();k++) {

                for (int p=0;p<ultima.get(k).size();p++) {
                    System.out.print(ultima.get(k).get(p) + ' ');
                }
                System.out.print('\n');
            }

            try (PrintWriter writer = new PrintWriter(new File("primeiro_teste.csv"))) {

                StringBuilder sb = new StringBuilder();
                for (int k=0;k<ultima.size();k++) {
                    for (int p=0;p<ultima.get(k).size();p++) {
                        System.out.print(ultima.get(k).get(p) + ' ');
                        sb.append(ultima.get(k).get(p));
                        if (p<ultima.get(k).size()-1) {
                            sb.append(", ");
                        }
                    }
                    System.out.print('\n');
                    sb.append('\n');
                }

                writer.write(sb.toString());

                System.out.println("done!");

            } catch (FileNotFoundException e) {
                System.out.println(e.getMessage());
            }

            leitortxt.close();
        } catch (FileNotFoundException e) {
            System.out.println("deu ruim");
        }

    }
}

// retirar ultimo item que nao tem proximo
// ja temos a primeira lista com itens nao duplicados e em ordem alfabetica
// vamos ter um arraylist pra cada linha que é um item de arraylist

//exportar csv com o arraylist principal
// um arraylist principal pra cada txt
// lista de txt

