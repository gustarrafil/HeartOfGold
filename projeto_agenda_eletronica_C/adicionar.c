/*ADICIONAR	NTEC*/
#include <stdio.h>
#include <string.h>
int main() {
	pessoa[0] = pessoa_vazio;
	contador = 0;//quantos contatos tem, valor igual indice do pessoa_vazio
	int p;
	for (p = contador; p < C; p++) {//ADD COMECA AQUI
		printf ("***ADICIONAR CONTATO***\n");
		printf ("Digite o nome:\n");
		setbuf(stdin, NULL);
		fgets (pessoa[p].nome, N, stdin);
		printf ("Digite o telefone (formato: (XX) XXXX-XXXX):\n");
		fgets (pessoa[p].telefone, T, stdin);
		printf ("Digite o e-mail:\n");
		fgets (pessoa[p].email, E, stdin);
		printf ("Digite o sexo:\n");
		scanf ("%c", &pessoa[p].sexo);
		printf ("Digite a idade:\n");
		scanf ("%d", &pessoa[p].idade);
		printf ("Digite o peso:\n");
		scanf ("%f", &pessoa[p].peso);
		printf ("Digite a altura:\n");
		scanf ("%f", &pessoa[p].altura);

		pessoa[p + 1] = pessoa_vazio;
		contador += 1;
		break;
	}
	return 0;
}
