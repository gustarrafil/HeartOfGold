/*ESTRUTURA*/
#include <stdio.h>
#include <string.h>
#define N 101
#define T 21
#define E 51
#define C 1000
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

	
