# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

O software será estruturado no "modelo C4" que significa contexto, conteiners, componentes e código. Tal modelo de diagramação visa combater ambiguidades e confusões. 
Assim a arquitetura da solução subdivide-se em quatro níveis:
No nível 1 (um) nós temos o contexto do sistema mostra os sistema de software em construção, representado pela cor azul conforme figura 1, e a forma como os usuários interagem com ele; no nível 2, um diagrama de container, mostra os aplicativos, Navegador, a internet e a hospedagem do código de desenvolvimento; no nível 3, há a ampliação dos conteiners, revelando as tecnologias dentro deles, A página web composta por HTML, CSS e Javascript, o local de armazenamento e aplicação webfront a ser desenvolvida, com o código hospedado no repositório Github.



## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

O Diagramas foram modelados com base em níveis, onde cada camada representa uma hierarquia: 


![Diagrama de Componentes](/docs/img/nivel1.png)
<center>Figura 1 - nível 1 - Contexto de Sistema</center>

![Diagrama de Componentes](/docs/img/nivel2.png)
<center>Figura 2 - nível 2 - Diagrama de conteiners</center>

![Diagrama de Componentes](/docs/img/nivel3.png)
<center>Figura 3 - nível 3 - Diagrama de componentes</center>


Nível 1 o contexto do sistema de Software

- **Software** - Segundo Pressman (2006), um software é um conjunto composto por instruções decomputador    estruturas de dados e documentos;
- **Usuário** - Pessoas recém-chegadas em cidades novas que procuram informações sobre animais.
- **Administrador** - Donos de Petshop; Médicos veterinários.

Nível 2 - A solução implementada em determinado contexto detém os seguintes conteneirs:
- **Navegador** - Interface básica do sistema  
- **Internet** -  uma rede mundial que tem como objetivo interligar computadores para fornecer ao usuário o acesso a diversas informações.
- **Hospedagem** - - local na Internet onde as páginas são mantidas e acessadas pelo navegador.
Nível 3 - Cada conteneir contém os seguintes componentes:
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
       **Aplicação Webfront end- Central animal** - Marcada com a coloração azul, que indica o software a ser construído utilizando as tecnologias de desenvolvimento front-end HTML, CSS, JavaScript.
Nível 4 - o Código
    - **HTML** HTML ou HyperText Markup Language é a linguagem de marcação, baseada em marcas ou (tags), utilizada para produção de documentos ou páginas Web, no formato de hipertextos, que são interpretados pelos Navegadores. Os hipertextos são documentos que utilizam hiperlinks para outros documentos relacionados, daí o nome Web (teia).
    - **CSS**linguagem CSS permite separar o conteúdo de um site Web do seu estilo. 
    - **JAVASCRIPT**a linguagem JavaScript adiciona a interatividade e permite a criação de aplicações ricas.
             
> **Links Úteis**:
>
> - [O modelo C4 de documentação para Arquitetura de Software](https://www.infoq.com/br/articles/C4-architecture-model/)
> - [The C4 model for visualising software architecture
Context, Containers, Components, and Code] (https://c4model.com/)
> - [ECMA Script 262. Especificação da Linguagem Javascript] (https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
> - [How CSS works] (https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works)
> -[HTML: HyperText Markup Language] (https://developer.mozilla.org/en-US/docs/Web/HTML)


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> 