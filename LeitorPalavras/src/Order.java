import java.util.ArrayList;
import java.util.Collections;

public class Order {
    ArrayList<String> ordered_list = new ArrayList<String>();

    public Order (String[] original_list) {

        for (int k = 0; k < original_list.length - 1; k++) {
            if (!ordered_list.contains(original_list[k])) {
                ordered_list.add(original_list[k]);
            }
        }
        Collections.sort(ordered_list);
    }
}
