import java.io.File;
import java.lang.reflect.Method;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class Main {

//    public static File folder = new File("D:\\gitlocal\\HeartOfGold\\classloader\\src");

    public static void main(String[] args) {

//        listFilesForFolder(folder);

        try {
            Class<?> cls = Class.forName("java.lang.String");
            System.out.println("class name " + cls.getName());
            System.out.println("package name " + cls.getPackage());
            Method[] methods = cls.getDeclaredMethods();
            System.out.println("---------- methods ---------------");
            for(Method method : methods) {
                System.out.println(method.getName());
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

//    public static void listFilesForFolder(final File folder) {
//        for (final File fileEntry : folder.listFiles()) {
//            if (fileEntry.isDirectory()) {
//                listFilesForFolder(fileEntry);
//            } else {
//                System.out.println(fileEntry.getName());
//            }
//        }
//    }
}
