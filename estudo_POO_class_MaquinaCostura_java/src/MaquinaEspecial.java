public class MaquinaEspecial extends MaquinaCostura {

    // atributos adicionados na classe filha especial
    String acessorioEspecial;
    private boolean suporteCalca;

    // metodos set e get para o atributo private
    public void setCalca (boolean calca) {
        this.suporteCalca = calca;
    }
    public boolean getCalca () {
        return this.suporteCalca;
    }
    public void suporteEncaixado () {
        boolean SimNao = getCalca();
        if (SimNao == true) {
            setCalca(false);
        } else {
            setCalca(true);
        }
    }

    // metodo construtor para atribuir modo especial, com novos atributos
    public MaquinaEspecial (String modelo, String modo, String acessorio) {
        this.modeloMaquina = modelo;
        this.modoCostura = modo;
        this.acessorioEspecial = acessorio;
        setCalca(true);
    }

    // sobrecarga do metodo principal, com saida de acao
    @Override
    public void costurar (int distancia, char posicao) {
        super.costurar(distancia, posicao);
        System.out.println("A máquina de modelo " + this.modeloMaquina + "costura no modo " + this.modoCostura + ", com distância " + this.distanciaExtremosPonto + " entre extremos, e posição " + this.posicaoAgulha + " da agulha");
    }
}
