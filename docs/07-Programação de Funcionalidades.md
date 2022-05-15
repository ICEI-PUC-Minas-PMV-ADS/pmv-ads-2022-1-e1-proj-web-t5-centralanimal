# Programação de Funcionalidades

- Tela de cadastro e login (RF-03 e RF-04)

![Registro e Login](img/register-and-login-01.png)
![Registro e Login](img/register-and-login-02.png)

Requisitos atendidos

- RF-03
- RF-04

Artefatos da funcionalidade

- cadastro-login.html
- cadastro-login.css
- cadastro-login.js

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
