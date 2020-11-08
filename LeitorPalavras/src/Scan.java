import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Scan {
    Scanner txtreader = null;
    String[] original_list;
    public Scan (ArrayList<String> file_list) throws FileNotFoundException {


        for (int k=0;k<file_list.size();k++) {
            File txtfile = new File("G:\\Meu Drive\\Sistemas de Informação\\SI " +
                    "2s-2020\\Programação Orientada a " +
                    "Objetos 2\\LeitorPalavras\\src\\" + file_list.get(k));
            this.txtreader = new Scanner(txtfile);
        }

        String complete = "";

        while (txtreader.hasNextLine()) {
            String data = txtreader.nextLine() + " ";
            complete += data;
        }
        complete = complete.toLowerCase();
        String delimiters = "\\s+|,\\s*|\\.\\s*|[(]|[)]|[-]|[?]|[!]";
        original_list = complete.split(delimiters);
        txtreader.close();
    }
}
