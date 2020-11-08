import javax.swing.*;
import java.io.PrintWriter;
import java.util.*;
import java.io.File;
import java.io.FileNotFoundException;

public class Main {
    public static void main(String[] args) {

        try {
            CompleteExecution tudo = new CompleteExecution();

//            int empty = 0;
//            do {
//                String nome = JOptionPane.showInputDialog("Write text file name or leave it empty and" +
//                        " press OK" +
//                        " to " +
//                        "finish" +
//                        ":");
//                String name = nome;
//                if (name.isEmpty()) {
//                    empty = 1;
//                }
//            } while (empty != 1);
//            String nome = JOptionPane.showInputDialog("Write text file name or leave it empty and" +
//                    " press OK" +
//                    " to " +
//                    "finish" +
//                    ":");
//            String name = nome;
//            if (name.isEmpty()) {
//                System.out.println("vazio");
//            }




//            Reader file_list = new Reader();




//            System.out.println(file_list.list_input);

//            Scanner leitortxt = null;
//
//            for (int k=0;k<file_list.list_input.size();k++) {
//                File arquivotxt = new File("G:\\Meu Drive\\Sistemas de Informação\\SI " +
//                        "2s-2020\\Programação Orientada a " +
//                        "Objetos 2\\LeitorPalavras\\src\\" + file_list.list_input.get(k) + ".txt");
//                leitortxt = new Scanner(arquivotxt);
//            }

//            for (int k=0; k<file_list.list_input.size();k++) {
//                Scan each_file = new Scan(file_list.list_input);
////                for(int p=0;p<each_file.original_list.length;p++) {
////                    System.out.println(each_file.original_list[p]);
////                }
//
//                Joint following_words = new Joint(each_file.original_list);
////                System.out.println(following_words.all_joints);
//
//                Order alphabetical_order = new Order(each_file.original_list);
////                System.out.println(alphabetical_order.ordered_list);
//
//                InitialList starting_composed_list =
//                        new InitialList(alphabetical_order.ordered_list);
////                System.out.println(starting_composed_list.complete);
//
//                FinalList group_done = new FinalList(following_words.all_joints,
//                        starting_composed_list.complete);
////                System.out.println(group_done.final_list);
//
//                ExportCSV export_csv_file = new ExportCSV(group_done.final_list);
//            }


//            File arquivotxt = new File("G:\\Meu Drive\\Sistemas de Informação\\SI " +
//                    "2s-2020\\Programação Orientada a " +
//                    "Objetos 2\\LeitorPalavras\\src\\teste.txt");
//            Scanner leitortxt = new Scanner(arquivotxt);

//            String completo = "";
//
//            while (each_file.leitortxt.hasNextLine()) {
//                String data = each_file.leitortxt.nextLine() + " ";
//                completo += data;
//            }
//            completo = completo.toLowerCase();
//            String delimiters = "\\s+|,\\s*|\\.\\s*";
//            String[] lista_original = completo.split(delimiters);

            //////////////////////////////////////////////////////////////////////////////////////////////////////
//            HashMap<String, ArrayList<String>> todas = new HashMap<String, ArrayList<String>>();
//            ArrayList<String> cada = new ArrayList<String>();
//            for (int k = 0; k < each_file.original_list.length - 1; k++) {
//                cada = new ArrayList<String>();
//                String primeira = each_file.original_list[k];
//                String segunda = each_file.original_list[k + 1];
//
//                if (!todas.containsKey(primeira)) {
//                    cada.add(segunda);
//                    todas.put(primeira, cada);
//                } else {
//                    if (!todas.get(primeira).contains(segunda)) {
//                        todas.get(primeira).add(segunda);
//                    } else {
//                        continue;
//                    }
//                }
//            }

//            System.out.println(todas);

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

//            ArrayList<String> ordem = new ArrayList<String>();
//            for (int k = 0; k < each_file.original_list.length - 1; k++) {
//                if (!ordem.contains(each_file.original_list[k])) {
//                    ordem.add(each_file.original_list[k]);
//                }
//            }
//            Collections.sort(ordem);

//            System.out.println(ordem);

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

//            ArrayList<ArrayList<String>> completa = new ArrayList<ArrayList<String>>();
//            for (int k = 0; k < ordem.size(); k++) {
//                completa.add(new ArrayList<>());
//                completa.get(k).add(ordem.get(k));
//            }

//            System.out.println(completa);

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

//            ArrayList<ArrayList<String>> ultima = new ArrayList<ArrayList<String>>();
//            for (int k = 0; k < completa.size(); k++) {
////                System.out.print(completa.get(k).get(0) + ' ');
//                ultima.add(new ArrayList<String>());
//                ultima.get(k).add(completa.get(k).get(0));
//                for (int p = 0; p < todas.get(completa.get(k).get(0)).size(); p++) {
////                    System.out.print(todas.get(completa.get(k).get(0)).get(p) + ' ');
//                    ultima.get(k).add(todas.get(completa.get(k).get(0)).get(p));
//                }
////                System.out.print('\n');
//            }

//
//            for (int k = 0; k < ultima.size(); k++) {
//
//                for (int p = 0; p < ultima.get(k).size(); p++) {
//                    System.out.print(ultima.get(k).get(p) + ' ');
//                }
//                System.out.print('\n');
//            }
//
//            try (PrintWriter writer = new PrintWriter(new File("primeiro_teste.csv"))) {
//
//                StringBuilder sb = new StringBuilder();
//                for (int k = 0; k < ultima.size(); k++) {
//                    for (int p = 0; p < ultima.get(k).size(); p++) {
//                        System.out.print(ultima.get(k).get(p) + ' ');
//                        sb.append(ultima.get(k).get(p));
//                        if (p < ultima.get(k).size() - 1) {
//                            sb.append(", ");
//                        }
//                    }
//                    System.out.print('\n');
//                    sb.append('\n');
//                }
//
//                writer.write(sb.toString());
//
//                System.out.println("done!");
//
//            } catch (FileNotFoundException e) {
//                System.out.println(e.getMessage());
//            }



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

