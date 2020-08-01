/*ORDEM ALFABETICA	NTEC*/
#include <stdio.h>
#include <string.h>
int main() {
	pessoa_ordem;
	int p;

	for (p = 1; p < contador; p++) {//COMECA AQUI
		if ((strcmp (pessoa[p - 1].nome, pessoa[p].nome)) > 0) {
			pessoa_ordem = pessoa[p - 1];
			pessoa[p - 1] = pessoa[p];
			pessoa[p] = pessoa_ordem;
		}
	}
	
	return 0;
}
