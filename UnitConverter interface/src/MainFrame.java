import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;

public class MainFrame extends JFrame {

    private Toolbar toolbar;
    private FormPanel formPanel;

    public MainFrame() throws IOException {
        super("Unit Converter");

        setLayout(new BorderLayout());

        toolbar = new Toolbar();
        formPanel = new FormPanel();

        setJMenuBar(createMenuBar());

        add(toolbar, BorderLayout.NORTH);
        add(formPanel, BorderLayout.PAGE_START);

        setSize(750, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    private JMenuBar createMenuBar() {
        JMenuBar menuBar = new JMenuBar();

        JMenu helpMenu = new JMenu("Help");
        JMenuItem testDataItem1 = new JMenuItem("Help");
        JMenuItem testDataItem2 = new JMenuItem("Disclaimer");
        JMenuItem testDataItem3 = new JMenuItem("About");
        testDataItem3.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Toolbar.setSecondFrame(true);
            }
        });

        helpMenu.add(testDataItem1);
        helpMenu.add(testDataItem2);
        helpMenu.addSeparator();
        helpMenu.add(testDataItem3);

        JMenu fileMenu = new JMenu("File");
        JMenuItem exitItem = new JMenuItem("Exit");
        exitItem.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });

        fileMenu.add(exitItem);

        menuBar.add(fileMenu);
        menuBar.add(helpMenu);

        return menuBar;
    }
}
