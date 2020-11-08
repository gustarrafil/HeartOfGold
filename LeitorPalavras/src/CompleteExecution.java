import java.io.FileNotFoundException;

public class CompleteExecution {
    public CompleteExecution () throws FileNotFoundException {
        Reader file_list = new Reader();

        for (int k=0; k<file_list.list_input.size();k++) {
            Scan each_file = new Scan(file_list.list_input);
//                for(int p=0;p<each_file.original_list.length;p++) {
//                    System.out.println(each_file.original_list[p]);
//                }

            Joint following_words = new Joint(each_file.original_list);
//                System.out.println(following_words.all_joints);

            Order alphabetical_order = new Order(each_file.original_list);
//                System.out.println(alphabetical_order.ordered_list);

            InitialList starting_composed_list =
                    new InitialList(alphabetical_order.ordered_list);
//                System.out.println(starting_composed_list.complete);

            FinalList group_done = new FinalList(following_words.all_joints,
                    starting_composed_list.complete);
//                System.out.println(group_done.final_list);

            String file_name = file_list.original_file_name;
            ExportCSV export_csv_file = new ExportCSV(group_done.final_list, file_name);
        }
    }
}
