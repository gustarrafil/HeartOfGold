import java.util.ArrayList;

public class InitialList {
    ArrayList<ArrayList<String>> complete = new ArrayList<ArrayList<String>>();

    public InitialList (ArrayList<String> ordered_list) {

        for (int k = 0; k < ordered_list.size(); k++) {
            complete.add(new ArrayList<>());
            complete.get(k).add(ordered_list.get(k));
        }
    }
}
