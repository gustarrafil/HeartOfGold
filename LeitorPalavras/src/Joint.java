import java.util.ArrayList;
import java.util.HashMap;

public class Joint {

    HashMap<String, ArrayList<String>> all_joints = new HashMap<String, ArrayList<String>>();
    ArrayList<String> each_joint = new ArrayList<String>();

    public Joint (String[] original_list) {

        for (int k = 0; k < original_list.length - 1; k++) {
            each_joint = new ArrayList<String>();
            String first_word = original_list[k];
            String second_word = original_list[k + 1];

            if (!all_joints.containsKey(first_word)) {
                each_joint.add(second_word);
                all_joints.put(first_word, each_joint);
            } else {
                if (!all_joints.get(first_word).contains(second_word)) {
                    all_joints.get(first_word).add(second_word);
                } else {
                    continue;
                }
            }
        }
    }
}
