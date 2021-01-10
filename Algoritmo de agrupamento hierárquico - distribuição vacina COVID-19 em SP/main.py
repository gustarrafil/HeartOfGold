# arquivo csv
# https://github.com/kelvins/Municipios-Brasileiros/blob/main/csv/municipios.csv
# arquivo xls
# https://www.ibge.gov.br/estatisticas/sociais/populacao/9103-estimativas-de-populacao.html?=&t=downloads

import pandas as pd
import matplotlib.pyplot as plt
import scipy.cluster.hierarchy as sch
from scipy.cluster import hierarchy
from pylab import rcParams

##########################################################################################

# ARQUIVO CSV

# acesso ao arquivo por leitura
arquivo_municipíos = open('municipios.csv', 'r', encoding="utf8")
lista_municipios = arquivo_municipíos.readlines()
arquivo_municipíos.close()

# pular a linha inicial com as colunas que seriam da tabela
lista_municipios = [item.strip() for item in lista_municipios[1:]]

# filtro de municipios de SP e organizacao de informacoes em lista de dicionarios
local_municipios = []
for item in lista_municipios:
    municipio = item.split(',')
    if int(municipio[5]) == 35:
        dicionario_municipio = {
            'codigo': municipio[0],
            'nome': municipio[1],
            'latitude': municipio[2],
            'longitude': municipio[3],
            'capital': municipio[4],
            'uf': municipio[5]
        }
        local_municipios.append(dicionario_municipio)

##########################################################################################
##########################################################################################

# ARQUIVO XLS

# acesso aos dados iniciais na planilha de Municipios
arquivo_populacao = r'POP2020_20201030.xls'
df_populacao = pd.read_excel(arquivo_populacao, sheet_name='Municípios', usecols=[0, 1, 2, 3, 4], skiprows=1)

# filtro inicial para municipios de SP
df_populacao = df_populacao[['UF', 'COD. UF', 'COD. MUNIC', 'NOME DO MUNICÍPIO', 'POPULAÇÃO ESTIMADA']]
df_sao_paulo = df_populacao.loc[df_populacao['UF'] == 'SP']

# conversao de tipos de dados para poder trabalhar (string -> int)
df_sao_paulo['POPULAÇÃO ESTIMADA'] = df_sao_paulo['POPULAÇÃO ESTIMADA'].astype(int)
df_sao_paulo['COD. MUNIC'] = df_sao_paulo['COD. MUNIC'].astype(int)

# filtro por quantidade de habitantes em cada municipio
sao_paulo_maiores = df_sao_paulo.loc[df_sao_paulo['POPULAÇÃO ESTIMADA'] >= 350000]

# configuracao de dados em lista de dicionarios
sao_paulo_maiores = sao_paulo_maiores.to_dict('records')

##########################################################################################
##########################################################################################

# PROCESSAMENTO

# comparacao dos dados filtrados para combinar a posicao com populacao
lista_final = []
for populacao in sao_paulo_maiores:
    for coordenadas in local_municipios:
        if coordenadas['nome'] == populacao['NOME DO MUNICÍPIO']:
            infos_municipio = {
                'nome': coordenadas['nome'],
                'latitude': float(coordenadas['latitude']),
                'longitude': float(coordenadas['longitude']),
                'habitantes': populacao['POPULAÇÃO ESTIMADA']
            }
            lista_final.append(infos_municipio)

# criacao da saida pronta dos dados para analise grafica em suas respectivas listas
lista_posicoes = []
lista_nomes = []
for item in lista_final:
    lat_long = [item['latitude'], item['longitude']]
    lista_posicoes.append(lat_long)
    lista_nomes.append(item['nome'])

print(lista_posicoes)
print(lista_nomes)

# lista_posicoes = [[1, 2], [1, 3], [2, 3], ...]
# lista_nomes = ["São Paulo", "Campinas", ...]

##########################################################################################

len(lista_nomes)

# configurando parametros de tamanho de figura e cores
rcParams['figure.figsize'] = 14, 5
hierarchy.set_link_color_palette(['r', 'g', 'm', 'y'])

# criando os agrupamentos usando a funcao linkage
# usa distancia euclidiana e metodo Ward variance minimization algorithm
dados = sch.linkage(lista_posicoes, method = 'ward', metric='euclidean')

# gera o dendrograma como imagem
# ordenada do menor para maior
grafico = sch.dendrogram(dados,
                       labels=lista_nomes,
                       distance_sort='true',
                       leaf_rotation=90,
                       color_threshold=1.8
                      )

# parametros para plotar o grafico e salvar como arquivo jpg
plt.title('Agrupamento das cidades')
plt.xlabel('Nome das Cidades')
plt.ylabel('Distancia entre Cidades')
plt.savefig('dendrograma.jpg', bbox_inches='tight', dpi=500)
plt.show()