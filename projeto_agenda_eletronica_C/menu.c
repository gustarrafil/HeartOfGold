/*MENU TA FUNCIONANDO TUDO CERTO, NAO MEXE NISSO*/
#include <stdio.h>
int main() {
	int op;
	op = 1;

	while (op != 0) {
		printf ("****MENU AGENDA ELETRONICA****\n1: Adicionar contato\n2: Excluir contato\n3: Pesquisar contato\n4: Visualizar todos os contatos\n0: Sair!\n");
		scanf ("%d", &op);
		switch (op) {
			case 1:
				printf ("add\n");
				break;
			case 2:
				printf ("remove\n");
				break;
			case 3:
				printf ("search\n");
				break;
			case 4:
				printf ("view all\n");
				break;
		}
				
		if ((op != 0) && (op != 1) && (op != 2) && (op != 3) && (op != 4)) {
			printf ("****Opcao Invalida, tentar novamente****\n");
		}
		
	}	
	return 0;
}
