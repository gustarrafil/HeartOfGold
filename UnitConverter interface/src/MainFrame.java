import javax.swing.*;
import java.awt.*;

public class MainFrame extends JFrame {

    private Toolbar toolbar;
    private FormPanel formPanel;

    public MainFrame() {
        super("Unit Converter");

        setLayout(new BorderLayout());

        toolbar = new Toolbar();
        formPanel = new FormPanel();

//        formPanel.setFormListener(new FormListener() {
//            public void formEventOccurred(FormEvent e) {
//                String from = e.getFrom();
////                try {
////                    double from_number = Double.parseDouble(from);
////                    System.out.println(from_number);
////                } catch (NumberFormatException er) {
////                    JOptionPane.showMessageDialog(null, "Only numbers accepted.", "Error",1);
////
////                }
//
//
//            }
//        });

        setJMenuBar(createMenuBar());

        add(toolbar, BorderLayout.NORTH);
        add(formPanel, BorderLayout.PAGE_START);

        setSize(750, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    private JMenuBar createMenuBar() {
        JMenuBar menuBar = new JMenuBar();

        JMenu windowMenu = new JMenu("window");
        JMenuItem testDataItem = new JMenuItem("test");

        windowMenu.add(testDataItem);

        JMenu fileMenu = new JMenu("file");
        JMenuItem exportDataItem = new JMenuItem("Export data...");
        JMenuItem importDataItem = new JMenuItem("Import data...");
        JMenuItem exitItem = new JMenuItem("Exit");

        fileMenu.add(exportDataItem);
        fileMenu.add(importDataItem);
        fileMenu.addSeparator();
        fileMenu.add(exitItem);

        menuBar.add(fileMenu);
        menuBar.add(windowMenu);

        return menuBar;
    }
}
