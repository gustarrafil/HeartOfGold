import javax.swing.*;

public class ConversionOptions extends DefaultComboBoxModel {

    private DefaultComboBoxModel options_from;
    private DefaultComboBoxModel options_to;

    public ConversionOptions() {
        options_from = new DefaultComboBoxModel();
        options_to = new DefaultComboBoxModel();



//        options_from.addElement(MeasureType.DISTANCE);
//        options_to.addElement(MeasureType.PRESSURE);
    }

    public DefaultComboBoxModel getOptionsFrom() {
        return options_from;
    }

    public void setOptionsFrom(String options_from) {
        this.options_from.addElement(options_from);
    }

    public DefaultComboBoxModel getOptionsTo() {
        return options_to;
    }

    public void setOptionsTo(String options_to) {
        this.options_to.addElement(options_to);
    }

    public void AddOptionFrom(String from) {
        setOptionsFrom(from);
    }

    public void AddOptionTo(String to) {
        setOptionsTo(to);
    }
}
