import javax.swing.*;
import java.util.ArrayList;

public class Reader {
    ArrayList<String> list_input = new ArrayList<String>();

    public Reader () {
        int empty_input = 0;
        do {
            String text_file = JOptionPane.showInputDialog("Write text file name or leave it " +
                    "empty and" +
                    " press OK" +
                    " to " +
                    "finish" +
                    ":");
            String name = text_file;

            if (name.isEmpty()) {
                empty_input = 1;
            } else {
                this.list_input.add(name);
            }
        } while (empty_input != 1);
    }
}
