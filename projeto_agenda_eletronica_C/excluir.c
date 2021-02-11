/*EXCLUIR	NTEC*/
#include <stdio.h>
int main() {
	int p;
	pessoa_vazio;
	char nome_busca[N];

	printf ("****EXCLUIR CONTATO****\nDigite o nome da exclusao:\n");//COMECA AQUI
	setbuf(stdin, NULL);
	fgets (nome_busca, N, stdin); //pede nome pra busca no vetor

	for (p = 0; p < contador; p++) {
		/*comparao do nome busca com existentes*/
		if ((strcmp (pessoa[p].nome, nome_busca)) == 0) {
			for (p + 1; p <= contador; p++) { /*manda todos structs pro inicio, sobrepondo o que foi "deletado"*/
				pessoa[p] = pessoa[p + 1];
			}
			contador -= 1;
			pessoa[contador] = pessoa_vazio;
		}
		if (p == (contador - 1)) {
			printf ("****Nome nao encontrado!****\n");
		}
	}	

	return 0;
}
