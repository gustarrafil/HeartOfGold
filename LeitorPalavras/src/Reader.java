import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.util.ArrayList;
import java.util.Vector;

public class Reader {
    ArrayList<String> list_input = new ArrayList<String>();
    String original_file_name;

    public Reader () {
        int no_option = 0;
        do {


            int dialogButton = 0;
            int dialogResult = JOptionPane.showConfirmDialog (null, "Send text file?","Starting " +
                            "program",
                    dialogButton);
            if(dialogResult == JOptionPane.YES_OPTION){
//                System.out.println("sim");
                FileDialog dialog = new FileDialog((Frame)null, "Select text file to open");
                dialog.setMode(FileDialog.LOAD);
                dialog.setVisible(true);
                String dot = "\\.";
                String[] file = dialog.getFile().split(dot);

//                for (int k=0;k<file.length;k++) {
//                    System.out.println(file[1]);
//                }
                if (file[1].equals("txt")) {
                    list_input.add(dialog.getFile());
                    this.original_file_name = file[0];
//                    System.out.println(dialog.getFile());
                } else {
                    JOptionPane.showMessageDialog(null, "Not a text file. Try another file?");
                }



            } else if (dialogResult == JOptionPane.NO_OPTION) {
//                System.out.println("nao");
                no_option = 1;
            } else {
                System.exit(0);
            }
//            ArrayList<String> file_format = new ArrayList<String>();
//
//            for (int k=0;k<file.length;k++) {
//                file_format.add(file[k]);
//            }

//            System.out.println(file);

////            String fileName = new File(fullName).getName();
//            int dotIndex = dialog.getFile().lastIndexOf('.');
////            System.out.println(dotIndex);
//            if (dotIndex == -1) {
////                System.out.println("");
//                JOptionPane.showMessageDialog(null, "Error reading file");
//
//            } else {
//                if (dialog.getFile().substring(dotIndex + 1) != "txt") {
//                    JOptionPane.showMessageDialog(null, "File format not accepted. It must be a " +
//                            "text file!\n");
//                } else {
//                    System.out.println(dialog.getFile().substring(dotIndex));
//                }
//            }


//            String text_file = JOptionPane.showInputDialog("Write text file name or leave it " +
//                    "empty and" +
//                    " press OK" +
//                    " to " +
//                    "finish" +
//                    ":");
//            String name = text_file;

//            if (name.isEmpty()) {
//                empty_input = 1;
//            } else {
//                this.list_input.add(name);
//            }
        } while (no_option == 0);


    }
}
