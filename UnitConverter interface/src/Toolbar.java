import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class Toolbar extends JPanel implements ActionListener {

    private static JFrameExample secondFrame;

    public Toolbar() throws IOException {
        super();
        secondFrame = new JFrameExample();
    }

    public JFrameExample getSecondFrame() {
        return secondFrame;
    }

    public static void setSecondFrame(boolean on) {
        secondFrame.setVisible(on);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        JButton clicked = (JButton) e.getSource();
    }
}

class JFrameExample {
    private JFrame frame;
    private JPanel panel;
    private JTextArea textArea;

    public JFrameExample() throws IOException {
        frame = new JFrame("JFrame Example");
        panel = new JPanel();
        textArea = new JTextArea();

        String fileName = "Instructions.txt";
        File file = new File(fileName);
        String path = file.getAbsolutePath();
        path = path.replace(fileName,"src\\" + fileName);
        FileReader reader = new FileReader(path);
        textArea.read(reader, path);

        if (reader != null) {
            try {
                reader.close();
            } catch (IOException er) {
                System.out.println("Error closing reader.");
                er.printStackTrace();
            }
        } else {
            System.out.println("pointer null");
        }

        textArea.setEditable(false);
        textArea.setLineWrap(true);
        textArea.setWrapStyleWord(true);

        panel.setLayout(new FlowLayout());

        panel.add(textArea);

        frame.add(panel);
        frame.setSize(200,300);
    }

    public void setVisible(boolean b) {
        frame.setVisible(true);
    }
}