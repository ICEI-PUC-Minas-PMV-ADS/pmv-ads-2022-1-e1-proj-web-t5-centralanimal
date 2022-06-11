# Plano de Testes de Software

| Caso de teste      | CT-01 - Página principal                                                                      |
| ------------------ | --------------------------------------------------------------------------------------------- |
| Requisito RF-01    | A página principal vai contar com cards com as descrições das soluções que são oferecidas.    |
| Requisito RF-02    | A página principal vai contar com botões que levam às telas de cadastro e login.              |
| Passos             | 1. Abrir index.html                                                                           |
| Objetivo do teste  | Verificar se a página inicial possui todas as informações necessárias                         |
| Critérios de êxito | - Ao clicar em login ou cadastro, o usuário deve ser levado para a página de login e cadastro |

| Caso de teste     | CT-02 - Cadastro                                                                                                                               |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisito RF-03   | Tela de cadastro onde usuários ou organizações poderão se cadastrar.                                                                           |
| Objetivo do teste | Verificar funcionalidade de cadastro                                                                                                           |
| Passos            | 1. Abrir index.html; 2. Clicar em "login" ou "cadastro"; 3. Preencher informações de cadastro; 4. Verificar informação salva no local storage; |
| Critério de êxito | - Ao inserir as informações do cadastro a tela deve ser redirecionada para a tela inicial;                                                     |
| Critério de êxito | - Se for digitado um email já cadastrado, exibir mensagem informando o mesmo;                                                                  |

| Caso de teste     | CT-03 - Login                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisito RF-04   | Tela de login de organizações e usuários.                                                                                                   |
| Objetivo do teste | Verificar funcionalidade de login                                                                                                           |
| Passos            | 1. Abrir index.html; 2. Clicar em "login" ou "cadastro"; 3. Preencher informações de login; 4. Verificar informação salva no local storage; |
| Critério de êxito | - Se cadastrado, ao inserir as informações do login a tela deve ser redirecionada para a tela inicial;                                      |
| Critério de êxito | - Se for digitado um email não cadastrado, exibir mensagem informando o mesmo;                                                              |
| Critério de êxito | - Se for digitado um email cadastrado mas com a senha incorreta, exibir mensagem informando o mesmo;                                        |

| Caso de teste     | CT-04 - Listagens de Organizações                                                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisito RF-05   | A página inicial do usuário vai mostrar a lista de ONGs, clínicas veterinárias, hotéis para cachorro e cuidadores separados por áreas.                                                  |
| Requisito RF-06   | A página principal de cada organização terá as próprias informações que estão disponibilizadas no site, terá também a opção de visualizar os usuários cadastrados no site.              |
| Objetivo do teste | Verificar mostragem de listagens de cada organização                                                                                                                                    |
| Passos            | 1. Abrir index.html; 2. clicar em opção apresentada em navbar, como "ONGS" ou "Animais Perdidos" e também descendo a pagina inicial, clicando em algum dos textos/imagens, apresentados.|
| Passos            | 3. em animais perdidos, estando logado na aplicação, tem a possibilidade de cadastrar um animal perdido, caso não esteja logado, essa opção te dará o encaminhamento para o login.      |
| Critério de êxito | - clicando em algum dos itens de organizações, aparecer a listagens com todas as organizações cadastradas no local storage;                                                             |
<!-- | Critério de êxito | - Se for digitado um email não cadastrado, exibir mensagem informando o mesmo;                                                                                                          |
| Critério de êxito | - Se for digitado um email cadastrado mas com a senha incorreta, exibir mensagem informando o mesmo;                                                                                    | -->

<!-- A página inicial do usuário vai mostrar a lista de ONGs, clínicas veterinárias, hotéis para cachorro e cuidadores separados por áreas.	MÉDIA
RF-06	A página principal de cada organização terá as próprias informações que estão disponibilizadas no site, terá também a opção de visualizar os usuários cadastrados no site.	MÉDIA
RF-07	Os cadastros podem fazer edições em seus perfis.	MÉDIA
RF-08	Caixa de comentários de outros usuários na página de cada organização, comentários já feitos.	MÉDIA
RF-09	Caixa de texto para os usuários adicionarem comentários nas páginas das organizações.	MÉDIA
RF-10	Ranking de empresas por qualidade do serviço prestado	BAIXA
RF-11	Ranking dos usuários baseados nas informações úteis que informam nos comentários, os outros usuários poderão avaliar o comentário como útil. -->