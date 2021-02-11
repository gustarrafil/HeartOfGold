/*AGENDA NOVA	NTEC*/
#include <stdio.h>
#include <string.h>
#define N 102 //tamanho da string nome
#define T 22 //tamanho da string telefone
#define E 52 //tamanho da string email
#define C 1001 //quantidade maxima de contatos + struct "vazio"

int main() {
	typedef struct contato {
		char nome[N];
		char telefone[T];
		char email[E];
		char sexo;
		int idade;
		float peso;
		float altura;
	} Contato;
	Contato pessoa[C], pessoa_ordem;
	Contato pessoa_vazio = {"vazio", "vazio", "vazio", 'v', -1, -1.0, -1.0};
	char nome_busca[N];

	int op, contador, p;
	op = 1;
	pessoa[0] = pessoa_vazio;
	contador = 0;//quantos contatos tem, valor igual indice do pessoa_vazio

	while (op != 0) {
		system ("cls");
		printf ("****MENU AGENDA ELETRONICA****\n1: Adicionar contato\n2: Excluir contato\n3: Pesquisar contato\n4: Visualizar todos os contatos\n0: Sair!\n");
		scanf ("%d", &op);
		getchar();
		switch (op) {
			case 1:
				//****ADICIONAR****
				//pessoa[0] = pessoa_vazio;
				//contador = 0;//quantos contatos tem, valor igual indice do pessoa_vazio
				//int p;
				for (p = contador; p < C; p++) {//ADD COMECA AQUI
					printf ("****ADICIONAR CONTATO****\n");
					printf ("Digite o nome:\n");
					//setbuf(stdin, NULL);
					fgets (pessoa[p].nome, N, stdin);
					printf ("Digite o telefone (formato: (XX) XXXX-XXXX):\n");
					setbuf(stdin, NULL);
					fgets (pessoa[p].telefone, T, stdin);
					printf ("Digite e-mail:\n");
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
				//ORDENACAO SO FALTA ISSO!!!! NAO FUNCIONA EM P = 0
				//pessoa_ordem;
				//int p;
				for (p = 0; p < contador; p++) {//COMECA AQUI
					if (p == (contador - 1)) {
						break;
					}
						if ((strcmp (pessoa[p].nome, pessoa[p + 1].nome)) > 0) {
							pessoa_ordem = pessoa[p];
							pessoa[p] = pessoa[p + 1];
							pessoa[p + 1] = pessoa_ordem;
						}
				}
				break;//FIM ADICIONAR
			case 2:
				//****EXCLUIR****
				//int p;
				//pessoa_vazio;
				//char nome_busca[N];
				printf ("****EXCLUIR CONTATO****\nDigite o nome da exclusao:\n");/*COMECA AQUI*/
				//setbuf(stdin, NULL);
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
				break;//FIM EXCLUIR
			case 3:
				//****PESQUISAR****
				//char nome_busca[N];	
				printf ("****PESQUISAR CONTATO****\nDigite o nome da busca:\n");/*COMECA AQUI*/
				//setbuf(stdin, NULL);
				fgets (nome_busca, N, stdin);

				for (p = 0; p < contador; p++) {
					//compara strings
					if ((strcmp (pessoa[p].nome, nome_busca)) == 0) { /*se forem iguais*/
						printf ("%s%s%s%c\n%d\n%.2f\n%.2f\n", pessoa[p].nome, pessoa[p].telefone, pessoa[p].email, pessoa[p].sexo, pessoa[p].idade, pessoa[p].peso, pessoa[p].altura);	
						system ("pause");
						break;//mostra infos e para
					}
					if (p == (contador - 1)) {
						printf ("****Nome nao encontrado!****\n");
					}
				}
				break;//FIM PESQUISAR
			case 4:
				//****VISUALIZAR TODOS****
				//pessoa_vazio;
				printf ("****VISUALIZAR TODOS OS CONTATOS****\n");
				if ((strcmp (pessoa[0].nome, pessoa_vazio.nome)) == 0) {
					printf ("****Agenda Vazia!****\n");
				}
				else {
					for (p = 0; p < contador; p++) {
						printf ("%s%s%s%c\n%d\n%.2f\n%.2f\n", pessoa[p].nome, pessoa[p].telefone, pessoa[p].email, pessoa[p].sexo, pessoa[p].idade, pessoa[p].peso, pessoa[p].altura);
					}
				}
				system ("pause");
				break;//FIM VISUALIZAR TODOS
		}//FIM SWITCH
		if ((op != 0) && (op != 1) && (op != 2) && (op != 3) && (op != 4)) {
			printf ("****Opcao Invalida, tentar novamente****\n");
		}
	}	
	return 0;
}
