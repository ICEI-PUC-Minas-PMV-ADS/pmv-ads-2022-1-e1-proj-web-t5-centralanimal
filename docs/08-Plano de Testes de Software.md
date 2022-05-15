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
