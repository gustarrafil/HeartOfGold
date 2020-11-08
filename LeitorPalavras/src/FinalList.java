import java.util.ArrayList;
import java.util.HashMap;

public class FinalList {
    ArrayList<ArrayList<String>> final_list = new ArrayList<ArrayList<String>>();

    public FinalList (HashMap<String, ArrayList<String>> all_joints,
                      ArrayList<ArrayList<String>> complete) {

        for (int k = 0; k < complete.size(); k++) {
            final_list.add(new ArrayList<String>());
            final_list.get(k).add(complete.get(k).get(0));
            for (int p = 0; p < all_joints.get(complete.get(k).get(0)).size(); p++) {
                final_list.get(k).add(all_joints.get(complete.get(k).get(0)).get(p));
            }
        }
    }
}
