import javax.swing.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;

public class ExportCSV {
    public ExportCSV (ArrayList<ArrayList<String>> last_one, String file_name) {
        try (PrintWriter writer = new PrintWriter(new File(file_name + ".csv"))) {// nome do txt
            StringBuilder csv_builder = new StringBuilder();
            for (int k = 0; k < last_one.size(); k++) {
                for (int p = 0; p < last_one.get(k).size(); p++) {
//                    System.out.print(last_one.get(k).get(p) + ' ');
                    csv_builder.append(last_one.get(k).get(p));
                    if (p < last_one.get(k).size() - 1) {
                        csv_builder.append(", ");
                    }
                }
//                System.out.print('\n');
                csv_builder.append('\n');
            }

            writer.write(csv_builder.toString());


            JOptionPane.showMessageDialog(null, "Done! Finishing program.");

        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
}
