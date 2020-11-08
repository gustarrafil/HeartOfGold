public class MaquinaComum extends MaquinaCostura {

    // filha comum que nao acrescenta atributos

    // metodo construtor para atribuir modo comum
    public MaquinaComum (String modelo) {
        this.modeloMaquina = modelo;
        this.modoCostura = "comum";
    }

    // sobrecarga do metodo principal, com saida de acao
    @Override
    public void costurar (int distancia, char posicao) {
        super.costurar(distancia, posicao);
        System.out.println("A máquina de modelo " + this.modeloMaquina + "costura no modo " + this.modoCostura + ", com distância " + this.distanciaExtremosPonto + " entre extremos, e posição " + this.posicaoAgulha + " da agulha");
    }
}
