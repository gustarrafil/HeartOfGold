import javax.swing.*;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.print("convert from: ");
        String fromUnit = in.nextLine();

        System.out.print("convert to: ");
        String toUnit = in.nextLine();

        LengthConverter from = new LengthConverter(fromUnit);
        LengthConverter to = new LengthConverter(toUnit);

        System.out.print("value: ");
        double val = in.nextDouble();

        double meters = from.toMeters(val);
        double converted = to.fromMeters(meters);
        System.out.print(converted);




    }
}
