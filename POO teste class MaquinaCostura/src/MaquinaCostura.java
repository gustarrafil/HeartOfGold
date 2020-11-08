public abstract class MaquinaCostura {

    // atributos
    String modeloMaquina;
    String modoCostura;
    int distanciaExtremosPonto;
    char posicaoAgulha;
    private boolean luz = false;

    // metodos set e get para o atributo private
    public void setLuz (boolean luz) {
        this.luz = luz;
    }
    public boolean getLuz () {
        return this.luz;
    }
    public void luzApagarAcender () {
        boolean OnOff = getLuz();
        if (OnOff == true) {
            setLuz(false);
        } else {
            setLuz(true);
        }
    }

    // metodo de acao principal, que só recebe dados na classe abstrata
    public void costurar (int distancia, char posicao) {
        String modoCostura = this.modoCostura;
        this.distanciaExtremosPonto = distancia;
        this.posicaoAgulha = posicao;
    }
}