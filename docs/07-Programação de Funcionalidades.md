# Programação de Funcionalidades

- Página inicial (RF-01 e RF-02)

> Feito por: Amanda Cacholi (header e footer), Marcus Vinicius Ferreira (informações do conteúdo da página)

![Home](img/home.png)

Requisitos atendidos

- RF-01
- RF-02

Artefatos da funcionalidade

- index.html
- styles.css
- reset.css

Instruções de acesso

1. Abrir index.html

- Tela de cadastro e login (RF-03 e RF-04)

> Feito por: Amanda Cacholi

![Registro e Login](img/register-and-login-01.png)
![Registro e Login](img/register-and-login-02.png)

Requisitos atendidos

- RF-03
- RF-04

Artefatos da funcionalidade

- cadastro-login.html
- cadastro-login.css
- cadastro-login.js
- reset.css

Estrutura de dados

```
    {
      id: string,
      name: string,
      email: string,
      password: string,
      isOrganization: boolean,
      service: string,
      cnpj: string,
      description: string,
      image: string,
      address: {},
      comments: [],
      ranking: number,
    }
```

Instruções de acesso

1. Abrir index.html
2. Clicar em "Login" ou "Cadastre-se"
3. Realizar um cadastro ou fazer login
4. Conferir informações inseridas no local storage

- Telas de listagens

> Feito por: Marcus Vinícius (layout), Amanda Cacholi (integração com local storage)

![Listagem animais perdidos](img/list-lost-pets.png)
![Listagem de ONGs](img/list-ongs.png)
![Listagem de hotéis para pets](img/list-pet-hotel.png)
![Listagem de pet shops](img/list-pet-shop.png)
![Listagem de clínicas veterinárias](img/list-vet.png)

Requisitos atendidos

- RF-05

Artefatos da funcionalidade

- animais-perdidos.html
- animais-perdidos.css
- animais-perdidos.js
- veterinarios.html
- veterinarios.css
- veterinarios.js
- orgs.html
- orgs.css
- orgs.js
- pet-hotel.html
- pet-hotel.css
- pet-hotel.js
- pet-shops.html
- pet-shops.css
- pet-shops.js

Instruções de acesso

1. Listagem de animais perdidos

- Clicar em "Animais Perdidos" no cabeçalho

2. Listagem clínicas veterinárias

- Na página inicial, clicar em "Clínicas veterinárias

3. Listagem ONGs

- Clicar em "ONGs" no cabeçalho

4. Listagem de hotéis para pets

- Na página inicial, clicar em "Hoteis para pets"

5. Listagem pet shops

- Na página inicial, clicar em "Pet shops"
  Tela de cadastro de animais perdidos

> Feito por: Marcus Vinícius (layout), Amanda Cacholi (salvar informações do pet no local storage)

![Cadastro animais perdidos logado](img/lost-pet-register-logged.png)
![Cadastro animais perdidos não logado](img/lost-pet-register-not-logged.png)

Artefatos da funcionalidade

- animais-perdidos.html
- animais-perdidos.css
- animais-perdidos.js

Estrutura de dados

```
{
  pet_owner_name: string,
  pet_owner_email: string,
  pet_owner_phone: string,
  pet_owner_city: string,
  pet_owner_id: string,
  pet_name: string,
  pet_last_seen: string,
  pet_photo: stringo,
  pet_id: string,
}
```

Instruções de acesso

1. Da página inicial, clicar em "Animais Perdidos" no cabeçalho
2. Clicar em "Cadastre seu pet perdido"
3. Se o usuário estiver logado, aparecerá um formulário, se não, um aviso para que logue ou cadastre-se

- Tela de edição de cadastro

> Feito por: Amanda Cacholi

![Editar usuário](img/edit-user.png)
![Editar organização](img/edit-org.png)

Requisitos atendidos

- RF-07

Artefatos da funcionalidade

- editar-cadastro.html
- editar-cadastro.css
- editar-cadastr0.js

Instruções de acesso

1. Abrir index.html
2. Clicar em "Login" ou "Cadastre-se"
3. Realizar um cadastro ou fazer login
4. A partir da página inicial após o login, clicar em "Minhas informações"
5. Adicionar novas informações
6. Conferir se novas informações foram salvas no local storage

- Tela "Quem somos"

> Feito por: Marcus Vinicius

![Quem somos](img/about.png)

Artefatos da funcionalidade

- quem-somos.html
- quem-somos.css

Instruções de acesso

1. Abrir index.html
2. Clicar em "Quem somos" no cabeçalho
