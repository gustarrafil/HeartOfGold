import javax.swing.*;
import java.util.EventObject;

public class FormEvent extends EventObject {

    private String from;
    private String to;

    /**
     * Constructs a prototypical Event.
     *
     * @param source the object on which the Event initially occurred
     * @throws IllegalArgumentException if source is null
     */
    public FormEvent(Object source) {
        super(source);
    }

    public FormEvent(Object source, String from) {
        super(source);
        this.from = from;

    }

    public String Conversion() {
        String from = getFrom();
        double from_number = 0.0;
        double to_number = 0.0;

        try {
            from_number = Double.parseDouble(from);


            // conversao aqui

            to_number = from_number;
            setTo(String.valueOf(to_number));
        } catch (NumberFormatException error) {
            JOptionPane.showMessageDialog(null, "Please insert only numbers.");
            setTo("");
        } finally {
            return getTo();
        }
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }


}
