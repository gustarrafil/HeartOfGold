public class Main {
    public static void main (String[] args) {
        // instancia de objetos
        MaquinaComum comum = new MaquinaComum("modelocomum");
        MaquinaEspecial especial = new MaquinaEspecial("especial", "chulear", "Sapatilha para pregar zíper");

        // apagar e acender luz de todos os objetos
        System.out.println(comum.getLuz());
        comum.luzApagarAcender();
        System.out.println(comum.getLuz());
        System.out.println(especial.getLuz());
        especial.luzApagarAcender();
        System.out.println(especial.getLuz());

        // acesso aos atributos dos objetos instanciados
        System.out.println(comum.modeloMaquina);
        System.out.println(comum.modoCostura);
        System.out.println(especial.modeloMaquina);
        System.out.println(especial.modoCostura);
        System.out.println(especial.getCalca());
        System.out.println(especial.acessorioEspecial);

        // execucao da acao principal de costura
        comum.costurar(2,'e');
        especial.costurar(3,'d');
    }
}
