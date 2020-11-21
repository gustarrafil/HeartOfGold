import javax.swing.*;
import javax.swing.border.Border;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class FormPanel extends JPanel {

    private JLabel convertLabel;
    private JComboBox convert_type;
    private JLabel fromLabel;
    private JLabel toLabel;
    private JTextArea fromField;
    private JTextArea toField;
    private JButton okBtn;
    private JComboBox fromCombo;
    private JComboBox toCombo;
    private FormListener formListener;

    public FormPanel() {

        Border innerBorder = BorderFactory.createEtchedBorder();
        Border outerBorder = BorderFactory.createEmptyBorder(5, 5, 5, 5);
        setBorder(BorderFactory.createCompoundBorder(outerBorder, innerBorder));

        convertLabel = new JLabel("Convert unit");
        convertLabel.setFont(convertLabel.getFont().deriveFont(20.0f));
        convert_type = new JComboBox();
        fromLabel = new JLabel("From");
        fromLabel.setFont(fromLabel.getFont().deriveFont(16.0f));
        toLabel = new JLabel("To");
        toLabel.setFont(toLabel.getFont().deriveFont(16.0f));
        fromField = new JTextArea(1,25);
        fromField.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        fromField.setComponentOrientation(ComponentOrientation.RIGHT_TO_LEFT);
        toField = new JTextArea(1,25);
        toField.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        toField.setEditable(false);
        okBtn = new JButton("->");
        fromCombo = new JComboBox();
        toCombo = new JComboBox();

        okBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                String from = "";
                from = fromField.getText();

                if (from.trim().isEmpty()) {
                    JOptionPane.showMessageDialog(null, "Insert a value to be converted.");
                } else {
                    toField.setText("");
                    FormEvent event = new FormEvent(this, from);

                    if (formListener != null) {
                        formListener.formEventOccurred(event);
                    }

                    // conversion
                    String converted_value = event.Conversion();
                    if (converted_value.equals("")) {
                        fromField.setText("");
                    } else {
                        // return converted number to screen
                        toField.append(converted_value);
                    }
                }
            }
        });

        // combo box options


        // combo box from
        ConversionOptions fromModel = new ConversionOptions();
        for (int p = 0; p < fromModel.getOptionsFrom().getSize(); p++) {
            fromModel.addElement(fromModel.getOptionsFrom().getElementAt(p));
        }
        fromCombo.setModel(fromModel);

        // combo box to
        ConversionOptions toModel = new ConversionOptions();
        for (int p = 0; p < toModel.getOptionsTo().getSize(); p++) {
            toModel.addElement(toModel.getOptionsTo().getElementAt(p));
        }
        toCombo.setModel(toModel);

        layoutComponents();
    }

    public void layoutComponents() {
        setLayout(new GridBagLayout());
        GridBagConstraints gc = new GridBagConstraints();

        /////////////////////////////////////////////////////////////

        gc.weightx = 1;
        gc.weighty = 0.5;

        gc.gridx = 1;
        gc.gridy = 0;
        gc.fill = GridBagConstraints.NONE;
        gc.insets = new Insets(10,0,10,0);
        add(convertLabel, gc);

        /////////////////////////////////////////////////////////////

        gc.weightx = 1;
        gc.weighty = 1;

        gc.gridx = 0;
        gc.gridy = 1;
        gc.anchor = GridBagConstraints.LAST_LINE_END;
        gc.insets = new Insets(10,0,0,0);
        add(fromLabel, gc);

        /////////////////////////////////////////////////////////////

        gc.weightx = 1;
        gc.weighty = 1;

        gc.gridx = 0;
        gc.gridy = 2;
        gc.anchor = GridBagConstraints.LINE_END;
        add(fromField, gc);

        /////////////////////////////////////////////////////////////

        gc.weightx = 1;
        gc.weighty = 1;

        gc.gridx = 0;
        gc.gridy = 3;
        gc.anchor = GridBagConstraints.LINE_END;
        gc.insets = new Insets(10,0,10,0);
        add(fromCombo, gc);

        /////////////////////////////////////////////////////////////

        gc.weightx = 1;
        gc.weighty = 1;

        gc.gridx = 2;
        gc.gridy = 1;
        gc.anchor = GridBagConstraints.LAST_LINE_START;
        gc.insets = new Insets(10,0,0,0);
        add(toLabel, gc);

        /////////////////////////////////////////////////////////////

        gc.weightx = 1;
        gc.weighty = 1;

        gc.gridx = 2;
        gc.gridy = 2;
        gc.anchor = GridBagConstraints.LINE_START;
        add(toField, gc);

        /////////////////////////////////////////////////////////////

        gc.weightx = 1;
        gc.weighty = 1;

        gc.gridx = 2;
        gc.gridy = 3;
        gc.anchor = GridBagConstraints.LINE_START;
        gc.insets = new Insets(10,0,10,0);
        add(toCombo, gc);

        /////////////////////////////////////////////////////////////

        gc.weightx = 1;
        gc.weighty = 0.5;

        gc.gridx = 1;
        gc.gridy = 2;
        gc.anchor = GridBagConstraints.CENTER;
        add(okBtn, gc);

        /////////////////////////////////////////////////////////////

        gc.weightx = 1;
        gc.weighty = 0.5;

        gc.gridx = 1;
        gc.gridy = 3;
        gc.anchor = GridBagConstraints.CENTER;
        add(convert_type, gc);


    }

    public void setFormListener(FormListener listener) {
        this.formListener = listener;
    }

}