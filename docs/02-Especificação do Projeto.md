# Especificações do Projeto

## Personas

Luana Alves - 27 anos

- Assistente social
- Ela tem uma cachorrinha, e representa o grupo de pessoas que têm pets e gostam de viajar, mas acabam encontrando dificuldades na hora de achar um hotel para pets confivável, ou um cuidador.

Pedro Carvalho - 33 anos

- empresário dono de uma hamburgueria
- Ele acabou de adotar um gatinho, e representa o grupo de pessoas que ainda não conhecem lugares confiáveis para cuidar dos seus animais, e usaria a plataforma para encontrar um bom veterinário.

Ana Paula Souza - 40 anos

- Advogada
- Seus filhos têm insistido para adotarem um cachorro, mas ela tem tido dificuldades em achar lugares onde possa adotar. Ela representa as pessoas que procuram animais que estejam para adoção.

Werberson Costa - 28 anos

- Programador
- Ele se preocupa com a causa animal, as vezes resgata alguns animais e tenta achar um novo lar para eles. Ele representa as ONGs, ou pessoas, que encontram animais em situação vulnerável e querem colocá-los em um lar permanente.

Fabiola Ferreira - 30 anos

- Médica veterinária
- Ela representa o público veterinário que busca expandir o alcance de seu trabalho, ela usaria a plataforma para divulgar seus serviços.

Gabriel Fernandes - 40 anos

- Empresário, dono do pet shop
- Representa o público de empresários com serviçoes voltados para pets, no caso dele, ele é dono do pet shop "Pet Feliz, e busca alcançar um público maior.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| `PERSONA`         | `FUNCIONALIDADE`                                                                    | `MOTIVO/VALOR`                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Luana Alves       | Ter um local de confiança para deixar meu pet, independentemente do local que estou | Poder planejar minhas viagens com tranquilidade sabendo que meu pet estará em um local de qualidade e confortável. |
| Pedro Carvalho    | Saber os melhores lugares para cuidar do meu gato                                   | Levar meu gato para realizar qualquer procedimento, sabendo que ele terá o melhor atendimento.                     |
| Ana Paula Souza   | Saber onde adotar animais de estimação                                              | Dar aos meus filhos a oportunidade de terem um pet                                                                 |
| Weberson Costa    | Conectar-me com pessoas dispostas a adotarem animais                                | Doar os animais que cuido para pessoas interessadas                                                                |
| Fabiola Ferreira  | Ter acesso a clientes interessados em nossos serviços                               | Oferecer e divulgar serviços para clientes que desejam realizar procedimentos em seus animais de estimação         |
| Gabriel Fernandes | Conectar clientes que amam cuidar de pets                                           | Dar aos pets o melhor tratamento possível sem que os seus donos se preocupem com a falta de qualidade              |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID    | Descrição do Requisito                                                                                                                                                     | Prioridade |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RF-01 | A página principal vai contar com cards com as descrições das soluções que são oferecidas.                                                                                 | ALTA       |
| RF-02 | A página principal vai contar com botões que levam às telas de cadastro e login.                                                                                           | ALTA       |
| RF-03 | Tela de cadastro onde usuários ou organizações poderão se cadastrar.                                                                                                       | ALTA       |
| RF-04 | Tela de login de organizações e usuários.                                                                                                                                  | ALTA       |
| RF-05 | A página inicial do usuário vai mostrar a lista de ONGs, clínicas veterinárias, hotéis para cachorro e cuidadores separados por áreas.                                     | MÉDIA      |
| RF-06 | A página principal de cada organização terá as próprias informações que estão disponibilizadas no site, terá também a opção de visualizar os usuários cadastrados no site. | MÉDIA      |
| RF-07 | Os cadastros podem fazer edições em seus perfis.                                                                                                                           | MÉDIA      |
| RF-08 | Caixa de comentários de outros usuários na página de cada organização, comentários já feitos.                                                                              | MÉDIA      |
| RF-09 | Caixa de texto para os usuários adicionarem comentários nas páginas das organizações.                                                                                      | MÉDIA      |
| RF-10 | Ranking de empresas por qualidade do serviço prestado                                                                                                                      | BAIXA      |
| RF-11 | Ranking dos usuários baseados nas informações úteis que informam nos comentários, os outros usuários poderão avaliar o comentário como útil.                               | BAIXA      |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                             | Prioridade |
| ------- | -------------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O site deve ser publicado em um ambiente aessível publicamente na internet(GitHub ouHeroku)        | ALTA       |
| RNF-002 | O site deve ser compatível com os principais navegadores do mercdo (Chrome,Firefox,Microsoft Edge) | ALTA       |
| RNF-003 | O site deve ter bom nível de contraste entre os elementos da tela em conformidade;                 | MEDIA      |
| RNF-005 | O site irá contar com autenticação de login para reforçar a segurança dentro da nossa plataforma;  | BAIXA      |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                                                 |
| --- | ------------------------------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre letivo.             |
| 02  | O aplicativo deve se restringir ás tecnologias básicas da Web no Frontend |
| 03  | A equipe não pode subcontratar o desenvolvimento do trabalho.             |
