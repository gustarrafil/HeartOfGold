import javax.swing.SwingUtilities;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                try {
                    new MainFrame();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }
}
