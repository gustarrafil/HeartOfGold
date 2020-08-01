/*VISUALIZAR TODOS	NTEC*/
#include <stdio.h>
int main() {
	pessoa_vazio;

	if ((strcmp (pessoa[0], pessoa_vazio)) == 0) {
		printf ("****Agenda Vazia!****\n");
	}
	else {
		for (p = 0; p < contador; p++) {
			printf ("%s%s%s%c\n%d\n%.2f\n%.2f\n", pessoa[p].nome, pessoa[p].telefone, pessoa[p].email, pessoa[p].sexo, pessoa[p].idade, pessoa[p].peso, pessoa[p].altura);
		}
	}

	return 0;
}
