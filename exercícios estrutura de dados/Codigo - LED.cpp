//---------------------------------------------------------------------------
#include <stdlib.h>
#include <stdio.h>
#include <windows.h>
//---------------------------------------------------------------------------

/* -----------------------------------------------------------------------------
Estrutura LISTA ENCADEADA DUPLA
------------------------------------------------------------------------------*/

typedef struct no_ld {
	int dado;
	struct no_ld *prox, *ant;
}  Tno_ld;

// Tabela de codigo de erros
// 0 - sem erro
// 1 - ...
// 2 - ...


/* -----------------------------------------------------------------------------
Prototipos das funcoes
------------------------------------------------------------------------------*/
int Inicializar_LD          (Tno_ld **inicio);
int Inicializar2_LD         (Tno_ld **inicio);
int Inserir_inicio_LD       (Tno_ld **inicio, int info);
int Inserir_fim_LD          (Tno_ld **inicio, int info);
int Inserir_meio_LD         (Tno_ld **inicio, int info, int pos);
int Remover_inicio_LD       (Tno_ld **inicio);
int Remover_meio_LD         (Tno_ld **inicio, int pos);
// FAZER int Remover_fim_LD (Tno_ld **inicio);
int Listar_LD               (Tno_ld *inicio);
int Listar_Invertido_LD     (Tno_ld *inicio);
// FAZER int Obter_dado_LD  (Tno_ld *inicio, int pos, int *dado);
int Obter_pos_LD            (Tno_ld *inicio, int dado, int *pos);
int Obter_Tamanho_LD        (Tno_ld *inicio, int *tam);
int Inverter_LD             (Tno_ld **inicio);

/* Variaveis global */


/* ----------------------------------------------------------------------------
Funções de apoio
-----------------------------------------------------------------------------*/
void gotoxy( int x, int y )
{
COORD coord;
coord.X = (short)x;
coord.Y = (short)y;
SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

/* -----------------------------------------------------------------------------
PRINCIPAL
------------------------------------------------------------------------------*/
int main(void)
{

	int info;
	int erro; /* valor de erro retornado pelas funcoes */
	Tno_ld *ini;
	int q;  /* receber a opcao do usuario */
	erro=Inicializar_LD (&ini);
	do {
	    system("cls");
	    //gotoxy (20,18); printf("TAMANHO: %d",sizeof(int));
	    gotoxy (20,1); printf("LISTA ENCADEADA DUPLA - LED");
		gotoxy(0,0); printf("\n\nOpcoes: \n\n");
		gotoxy(0,7);
		printf("1 -> Inserir no inicio \n");
		printf("2 -> Inserir no final\n");
		printf("3 -> Remover no inicio\n");
		printf("4 -> Mostrar toda a lista \n");
		printf("5 -> Inicializar a lista (versao 2)\n");
		printf("6 -> Inverter a lista\n");
		printf("9 -> Sair \n:");
		scanf("%d", &q);     /* Ler a opcao do usuario */
		switch(q) {
			case 1: printf("Dado para insercao na lista: ");
                    scanf("%d",&info);
                    erro=Inserir_inicio_LD (&ini, info);
                    if (erro == 0) printf("Insercao realizada com sucesso\n");
                    system("pause");
					break;
			case 2: printf("Dado para insercao na lista: ");
                    scanf("%d",&info);
                    Inserir_fim_LD (&ini, info);
			        break;
            case 3: erro = Remover_inicio_LD (&ini);
                    if (erro==1)
                    {
                        printf("\nLista vazia. Impossivel remover");
                    }
                    system("pause");
                    break;
			case 4: erro=Listar_LD (ini);
                    if (erro==1)
                    {
                        printf("\nLista vazia. Impossivel listar");
                    }
                    system("pause");
					break;
			case 5: erro=Inicializar2_LD (&ini);
                    printf("\nInicializacao realizada com sucesso !\n");
                    printf("\nLISTA VAZIA !\n");
                    system("pause");
					break;
			case 6: erro=Inverter_LD (&ini);
                    printf("\nInversao realizada !\n");
                    system("pause");
					break;
			case 9: break;
			default: printf("\n\n Opcao nao valida");
		}
		getchar();    /* Limpa o buffer de entrada */
	} while ((q != 9) );

}


/* ------------------------------------------------------------------------------------
LISTAR todos os elementos presentes na lista encadeada
--------------------------------------------------------------------------------------*/
int Listar_LD (Tno_ld *inicio)
{
	int i;
	if (inicio == NULL)
	{
        return 1;  /* lista vazia */
	}
    printf("LISTA ::  ");
	while (inicio != NULL) {
		   printf("%d  ",inicio->dado);
		   inicio = inicio->prox;
    }
    printf("\n");
	return 0; /* sem erro */
} /* Fim da função de MOSTRAR */

/* ------------------------------------------------------------------------------------
LISTAR todos os elementos presentes na lista encadeada na ordem inversa
--------------------------------------------------------------------------------------*/
int Listar_Invertido_LD (Tno_ld *inicio)
{
	int i;
	if (inicio == NULL)
	{
        return 1;  /* lista vazia */
	}
    printf("LISTA ::  ");

	while (inicio->prox != NULL) // ir ate a ultima posicao
    {
		inicio = inicio->prox;
    }

    while (inicio != NULL) // ir alem da primeira posicao imprimindo
    {
        printf("%d  ",inicio->dado);
	    inicio = inicio->ant;
    }
    printf("\n");
	return 0; /* sem erro */
} /* Fim da função de MOSTRAR */


/* ------------------------------------------------------------------------------------
INICIALIZAR
--------------------------------------------------------------------------------------*/
int Inicializar_LD (Tno_ld **inicio)
{
	*inicio= NULL;
	return 0; /* sem erro */
} /* Fim da função de INICIALIZAR */

// =================================================
int Inicializar2_LD(Tno_ld **inicio)
{
    Tno_ld *percorre, *aux;
	if(*inicio != NULL)
	{
       percorre = *inicio;
	   while (percorre != NULL)
	   {
             aux = percorre;
	         percorre = percorre -> prox;
	         free(aux);
	   }
	   *inicio = NULL;
	   return 1; // inicializa apagando tudo da listsa
	}
	else
	{
	   Inicializar_LD(inicio); // inicializa
	   return 0;
	}
}


// =================================================
int Obter_Tamanho_LD(Tno_ld *inicio, int *tam)
{
    Tno_ld *percorre;
    *tam = 0;
	if(inicio != NULL)
	{
       percorre = inicio;
	   while (percorre != NULL)
	   {
         (*tam)++;
         percorre = percorre -> prox;
	   }
     }
    else
    {
         *tam = 0;
    }
}

/* -------------------------------------------------------------------------------------
INSERÇÃO
---------------------------------------------------------------------------------------*/
int Inserir_inicio_LD (Tno_ld **inicio, int info)
{
    Tno_ld *no_novo;

    /* Criacao do novo no - Alocação de memoria */
    no_novo = (Tno_ld *) malloc(sizeof(Tno_ld));
    no_novo -> dado = info;

	if (*inicio==NULL)
	{    // insercao em lista vazia
	    no_novo -> prox = NULL;
	    *inicio = no_novo;
	    no_novo -> ant = NULL;
	}
	else { // insercao em lista nao vazia
	    no_novo -> prox = *inicio;
	    no_novo -> ant = NULL;
	    (*inicio)->ant = no_novo;// anterior do 1o. aponta para o novo
	    *inicio = no_novo; // atualizo o 1o., que passa a ser o novo

	}
    return 0;
}

// ------------------------------------------------------------------
int Inserir_meio_LD (Tno_ld **inicio, int info, int pos)
{
    int tam;
    Tno_ld *no_novo, *percorre;

    // Tratamento de erros =======================================
    if (pos<= 0)
       return 1;  // posicao invalida para insercao

    Obter_Tamanho_LD(*inicio, &tam);
    if (pos > tam+1)
       return 2;   // posicao invalida. Acima do tamanho da lista
    // ===========================================================

    // Alocacao do novo no
    no_novo = (Tno_ld *)malloc(sizeof(Tno_ld));
    no_novo -> dado = info;

    // procura pela posicao de insercao
    if (pos==1)
    {   // insercao no inicio
        Inserir_inicio_LD (inicio, info);
    }
    else
    {   if (pos == tam+1)
        {
            Inserir_fim_LD (inicio, info);
        }
        else {
                int pos_aux=1;
                percorre = *inicio;
                while (pos_aux!=pos-1) // parar uma posicao antes
                {
                   percorre = percorre -> prox;
                   pos_aux++;
                }
                no_novo -> prox = percorre -> prox; // D
                percorre -> prox = no_novo;         // B
                no_novo -> ant = percorre;          // A
                (no_novo->prox)->ant = no_novo;     // C

        }
    }
    return 0;
}

/* ---------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------*/
int Inserir_fim_LD (Tno_ld **inicio, int info)
{
    Tno_ld *no_novo, *percorre;

    /* Criacao do novo no - Alocação de memoria */
    no_novo = (Tno_ld *) malloc(sizeof(Tno_ld));
    no_novo -> dado = info;
    no_novo -> prox = NULL;
	if (*inicio==NULL)
	{ // lista vazia.
	    *inicio = no_novo;
	    no_novo -> ant = NULL;
	}
	else { // lista nao vazia
	     percorre = *inicio;
	     while (percorre->prox != NULL) // ate o ultimo
	     {
	         percorre = percorre -> prox;
	     }
	    percorre->prox = no_novo;  // ligação do ultimo com o novo
	    no_novo -> ant = percorre; // liga o novo ultimo ao anterior
	}
	return 0;
}

int Obter_Pos_LD (Tno_ld *inicio, int valor, int *pos)
{
  *pos = 0;
  while (inicio != NULL)
  {
     (*pos)++;
     if (valor == inicio->dado)
       return 0;     // dado encontrado
     inicio = inicio -> prox;
  }
  return 1;  // dado nao encontrado
}


/* -------------------------------------------------------------------------
REMOCAO
-------------------------------------------------------------------------*/
int Remover_inicio_LD (Tno_ld **inicio)
{
    Tno_ld *aux;
    if (*inicio == NULL)
    {
         printf("\nLISTA VAZIA ! \nRemocao Impossivel\n");
        return 1;  /* lista vazia, impossivel remover primeiro */
    }
    else {
        aux = *inicio;
        *inicio = (*inicio)->prox;
        (*inicio)->ant = NULL;
        free(aux);
        return 0;
    }
}

int Remover_meio_LD (Tno_ld **inicio, int pos)
{
    Tno_ld *percorre;
    int pos_aux;
    int tam;
    // Tratamento de erros =======================================
    if (*inicio == NULL)
    {   printf("\nLISTA VAZIA ! \nRemocao Impossivel\n");
        return 1;  // lista vazia, impossivel remover primeiro
    }
    if (pos<= 0)
        return 2;  // posicao invalida para remocao
    Obter_Tamanho_LD(*inicio, &tam);
    if (pos > tam)
        return 3;  // posicao invalida. Acima do tamanho da lista
    // ===========================================================
    percorre = *inicio;
    pos_aux = 1;
    while (pos_aux != pos) // encontrar o no para remocao
    {
       percorre = percorre->prox;
       pos_aux++;
    }
    // ligar o vizinho anterior com o vizinho proximo
    (percorre -> ant)->prox = percorre->prox;
    // ligar o vizinho proximo com o vizinho anterior
    (percorre -> prox) ->ant = percorre->ant;

    free(percorre);

}


/* -------------------------------------------------------------------------
INVERTER LISTA
-------------------------------------------------------------------------*/
int Inverter_LD (Tno_ld **inicio)
{
    Tno_ld *percorre,*aux1, *aux2;
    percorre=*inicio;
    if(percorre==NULL)
    {
        return 1;//Caso a lista esteja vazia.
    }
    else if(percorre->prox==NULL)
    {
        return 0;//Caso a lista tenha apenas um nó.
    }
    else
    {
        while (percorre != NULL) // ate o ultimo
	     {
             // Troca do ant pelo prox e vice-versa em cada no
             aux1 = percorre->prox;
             percorre->prox = percorre->ant;
             percorre->ant = aux1;

             if (aux1 == NULL) // o percorre esta no ultimo no
                *inicio = percorre; // define novo inicio
             // Avançar para o proximo no de inversao
             percorre = percorre -> ant;
    	 }
    }
    return 0;
}
