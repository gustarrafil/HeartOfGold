/*PESQUISAR	NTEC*/
#include <stdio.h>
int main() {
	char nome_busca[N];
	
	printf ("****PESQUISAR CONTATO****\nDigite o nome da busca:\n");//COMECA AQUI
	setbuf(stdin, NULL);
	fgets (nome_busca, N, stdin);

	for (p = 0; p < contador; p++) {
		//compara strings
		if ((strcmp (pessoa[p].nome, nome_busca)) == 0) { //se forem iguais
			printf ("%s%s%s%c\n%d\n%.2f\n%.2f\n", pessoa[p].nome, pessoa[p].telefone, pessoa[p].email, pessoa[p].sexo, pessoa[p].idade, pessoa[p].peso, pessoa[p].altura);	
			break;//mostra infos e para
		}
		if (p == (contador - 1)) {
			printf ("****Nome nao encontrado!****\n");
		}
	}
	
	return 0;
}
