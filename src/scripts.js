const loggedUser = JSON.parse(localStorage.getItem("login"));
const registered = JSON.parse(localStorage.getItem("registered"));
const lostPets = JSON.parse(localStorage.getItem("lost-pets"));

if (loggedUser) {
  document.getElementById("header-content-login").style.display = "none";
  document.getElementById("header-my-information").style.display = "flex";
  document
    .getElementById("header-content-logo-link-logo")
    .setAttribute("href", "./pagina-inicial/pagina-inicial.html");
  document
    .getElementById("header-content-logo-link-title")
    .setAttribute("href", "./pagina-inicial/pagina-inicial.html");
} else {
  document.getElementById("header-content-login").style.display = "flex";
  document.getElementById("header-my-information").style.display = "none";
}

document.getElementById("header-logout").addEventListener("click", logout);

function logout() {
  localStorage.removeItem("login");
}

console.log(lostPets);

const valoresIniciaisRegistros = [
  {
    address: {
      address: "R. João Alves Muniz",
      city: "Saquarema",
      complement: "",
      country: "Brasil",
      neighborhood: "Coqueiral",
      number: "1342",
      state: "RJ",
      zipCode: "28990000",
    },
    cnpj: "07.661.890/0001-21",
    comments: [],
    cpf: "",
    description:
      "É uma ONG criada em Dezembro/99, com o propósito de acolher cães de rua que estejam em estado crítico de saúde, extremamente debilitados ou em situação de risco.",
    email: "contato@soscompanheiros.com",
    id: "16557707272590",
    image:
      "data:image/png;base64,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",
    isOrganization: true,
    lostPets: [],
    name: "SOS Caopanheiros",
    password: "123",
    phoneNumber: "(22) 2651-7094",
    service: "ONG",
  },
  {
    address: {
      address: "Av. Dom Hélder Câmara",
      city: "Rio de Janeiro",
      complement: "",
      country: "Brasil",
      neighborhood: "Benfica",
      number: "1801",
      state: "RJ",
      zipCode: "20.973-011",
    },
    cnpj: "00.108.055/000,1-10",
    comments: [],
    cpf: "",
    description: "Sociedade União Internacional Protetora dos Animais",
    email: "contato@suipa.com",
    id: "16557710704080",
    image: "https://www.suipa.org.br/images/fundos/logomarca.png",
    isOrganization: true,
    lostPets: [],
    name: "SUIPA",
    password: "123",
    phoneNumber: "21 3297-8750",
    service: "ONG",
  },
  {
    address: {
      address: "Rua Goiás",
      city: "Imperatriz",
      complement: "",
      country: "Brasil",
      neighborhood: "Maranhão Novo",
      number: "152",
      state: "MA",
      zipCode: "65903-060",
    },
    cnpj: "116.000.672-55",
    comments: [],
    cpf: "",
    description:
      "Sou uma pessoa apaixonada por animais desde que me conheço por gente. Tenho dois gatos que são meus filhos, Nina e Ziggy.",
    email: "manuelalaisrodrigues@cuppari.com.br",
    id: "16557714370221",
    image:
      "https://proxis.com.br/wp-content/uploads/2019/02/mulher-sorrindo-no-parque.jpg",
    isOrganization: true,
    lostPets: [],
    name: "Manuela Laís Regina Rodrigues",
    password: "123",
    phoneNumber: "(98) 98660-4742",
    service: "Cuidador",
  },
  {
    address: {
      address: "Rua Vera Cláudia",
      city: "Maranguape",
      complement: "",
      country: "Brasil",
      neighborhood: "Novo Maranguape II",
      number: "265",
      state: "CE",
      zipCode: "61944-630",
    },
    cnpj: "905.968.519-95",
    comments: [],
    cpf: "",
    description:
      "Sou uma pessoa que não pode ver um cachorro abandonado ou um pássaro que já quer cuidar e dar carinho.",
    email: "claudio_davi_dias@siemens.com",
    id: "16557718060711",
    image:
      "https://www.petlove.com.br/dicas/wp-content/uploads/2013/10/Homem-abracando-cachorro-1280x720.jpg",
    isOrganization: true,
    lostPets: [],
    name: "Cláudio Davi Benjamin Dias",
    password: "123",
    phoneNumber: "(85) 99692-1691",
    service: "Cuidador",
  },
  {
    address: {
      address: "Quadra SHN Quadra 4",
      city: "Brasília",
      complement: "",
      country: "Brasil",
      neighborhood: "Asa Norte",
      number: "863",
      state: "DF",
      zipCode: "70704-000",
    },
    cnpj: "",
    comments: [],
    cpf: "077.184.268-66",
    description: "",
    email: "sergio.vicente.darosa@prognum.com.br",
    id: "16557720060071",
    image:
      "https://www.correio24horas.com.br//fileadmin/_processed_/9/4/csm_pjimage__46__b52c03a995.jpg",
    isOrganization: false,
    lostPets: [
      {
        pet_id: "16557721768141",
        pet_last_seen: "Rua da casa",
        pet_name: "Bethoven",
        pet_owner_city: "Brasília",
        pet_owner_email: "sergio.vicente.darosa@prognum.com.br",
        pet_owner_id: "16557720060071",
        pet_owner_name: "Sérgio Vicente Luan da Rosa",
        pet_owner_phone: "(61) 98160-6534",
        pet_photo:
          "https://www.canilgoldenpremier.com.br/wp-content/uploads/2018/08/dicas-de-higiene.jpg",
      },
    ],
    name: "Sérgio Vicente Luan da Rosa",
    password: "123",
    phoneNumber: "(61) 98160-6534",
    service: "",
  },
  {
    address: {
      address: "Quadra EQNM 24/26",
      city: "Brasília",
      complement: "Bloco E",
      country: "Brasil",
      neighborhood: "Ceilândia Norte (Ceilândia)",
      number: "126",
      state: "DF",
      zipCode: "72210-585",
    },
    cnpj: "",
    comments: [],
    cpf: "918.928.816-5,9",
    description: "",
    email: "andrea-assuncao86@wizardararaquara.com.br",
    id: "16557722790641",
    image:
      "https://previews.123rf.com/images/lenanichizhenova/lenanichizhenova1709/lenanichizhenova170900188/85142937-woman-with-a-cat.jpg",
    isOrganization: false,
    lostPets: [
      {
        pet_id: "16557724542670",
        pet_last_seen: "Rua de casa",
        pet_name: "Mimi",
        pet_owner_city: "Brasília",
        pet_owner_email: "andrea-assuncao86@wizardararaquara.com.br",
        pet_owner_id: "16557722790641",
        pet_owner_name: "Andrea Silvana Heloise Assunção",
        pet_owner_phone: "(61) 98984-3949",
        pet_photo:
          "https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_deitado_em_um_tapete_em_casa_com_uma_coleira_vermelha.jpg?itok=oqfMz1GU",
      },
    ],
    name: "Andrea Silvana Heloise Assunção",
    password: "123",
    phoneNumber: "(61) 98984-3949",
    service: "",
  },
  {
    address: {
      address: "Av. Brigadeiro Faria Lima",
      city: "São Paulo",
      complement: "Conjunto 3F",
      country: "Brasil",
      neighborhood: "Jardim Paulistano",
      number: "2013",
      state: "SP",
      zipCode: "01402-001",
    },
    cnpj: "59.223.792/0001-06",
    comments: [],
    cpf: "",
    description: "Clínica veterinária",
    email: "suporte@vetwork.com.br",
    id: "16557726175900",
    image:
      "https://vetwork.com.br/wp-content/themes/vetwork/assets/img/logo-vetwork.png",
    isOrganization: true,
    lostPets: [],
    name: "VetWork",
    password: "123",
    phoneNumber: "11.97344.5954",
    service: "clinica-veterinaria",
  },
  {
    address: {
      address: "Rua Edith Alves de Miranda",
      city: "Cachoeiras de Macacu",
      complement: "",
      country: "Brasil",
      neighborhood: "Centro",
      number: "2",
      state: "RJ",
      zipCode: "28680-000",
    },
    cnpj: "17.700.828/0001-55",
    comments: [],
    cpf: "",
    description: "Há mais de 25 anos se dedicando à Medicina Veterinária",
    email: "vettcenter.rm@gmail.com",
    id: "16557728717930",
    image:
      "https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/273608471_323603993115245_2950731826910323236_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qVz4qU7oeccAX8gqIaK&_nc_ht=scontent-gig2-1.xx&oh=00_AT8esXj2kmo27shiv3LS0LkBy2NXq6NMcPCuugroG4NChQ&oe=62BB8A3B",
    isOrganization: true,
    lostPets: [],
    name: "Clínica Veterinária VetCenter",
    password: "123",
    phoneNumber: "(21) 2649-2453",
    service: "clinica-veterinaria",
  },
  {
    address: {
      address: "Av. Alphaville",
      city: "Barueri",
      complement: "",
      country: "Brasil",
      neighborhood: "Alphaville",
      number: "580",
      state: "SP",
      zipCode: "06472-010",
    },
    cnpj: "99.838.955/0001-80",
    comments: [],
    cpf: "",
    description:
      "Só quem é apaixonado por animais sabe: a relação de amor e cumplicidade que temos com nossos bichinhos de estimação é um vínculo único! Por essa razão, não medimos esforços para oferecer o que há de melhor para trazer ainda mais alegria e qualidade de vida. Rações, acessórios, medicamentos e brinquedos estão na nossa listinha de prioridades; e tudo isso você encontra em nosso Pet Shop online.",
    email: "contato@petz.com",
    id: "16557730312410",
    image: "https://static.petz.com.br/images/logo.png",
    isOrganization: true,
    lostPets: [],
    name: "Petz",
    password: "123",
    phoneNumber: "(11) 3434-6980",
    service: "pet-shop",
  },
  {
    address: {
      address: "R. Minas Gerais",
      city: "Divinópolis",
      complement: "",
      country: "Brasil",
      neighborhood: "Centro",
      number: "1592",
      state: "MG",
      zipCode: "35500-007",
    },
    cnpj: "64.354.330/0001-68",
    comments: [],
    cpf: "",
    description: "Pet shop",
    email: "contato@petcenter.com",
    id: "16557732281041",
    image:
      "data:image/jpeg;base64,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",
    isOrganization: true,
    lostPets: [],
    name: "Pet Center - Pet Shop São Roque",
    password: "123",
    phoneNumber: "(37) 3222-3524",
    service: "pet-shop",
  },
  {
    address: {
      address: "Rua G",
      city: "Guapimirim",
      complement: "",
      country: "Brasil",
      neighborhood: "Fzenda Raul Seixas",
      number: "sn",
      state: "RJ",
      zipCode: "25940-000",
    },
    cnpj: "23.844.636/0001-15",
    comments: [],
    cpf: "",
    description:
      "Felipe Girardi e Geisa Bordenave, donos de cães e apaixonados por animais, fundaram o Casa Verde Pet Resort buscando oferecer um serviço de hospedagem que deixasse os cães felizes e seus donos tranquilos, pois sabem bem o quanto é difícil precisar ficar longe dos nossos melhores amigos.",
    email: "contato@casaverde.com",
    id: "16557733780311",
    image:
      "https://www.anuncioemfoco.com.br/imagens/anuncios/041016030658/0712_casa-verde-pet-resort.jpg",
    isOrganization: true,
    lostPets: [],
    name: "Casa Verde Pet Resort - Hotel para Cães",
    password: "123",
    phoneNumber: "(21) 98861-9969",
    service: "pet-hotel",
  },
  {
    address: {
      address: "Estrada Municipal",
      city: "Tanguá",
      complement: "LT 18 Q 32",
      country: "Brasil",
      neighborhood: "Vila Cortes",
      number: "sn",
      state: "RJ",
      zipCode: "24890-000",
    },
    cnpj: "58.281.487/0001-08",
    comments: [],
    cpf: "",
    description:
      "Somos um hotel/ SPA para cães com completa infraestrutura em 6.000 m2 de área verde e total segurança. Reunimos aqui qualidades para proporcionar ao seu cão uma experiência única.",
    email: "petinnspapet@gmail.com",
    id: "16557736032141",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpfUjn0NokNwwk6xPbX-IcYeXiB9qK7IpIPVg6CxJoXnLq_o-pv6bS15wUV4grydBItw&usqp=CAU",
    isOrganization: true,
    lostPets: [],
    name: "Pet Inn Spa",
    password: "123",
    phoneNumber: "21 96726-3674",
    service: "pet-hotel",
  },
];
const valoresIniciaisAnimaisPerdidos = [
  {
    pet_id: "16557721768141",
    pet_last_seen: "Rua da casa",
    pet_name: "Bethoven",
    pet_owner_city: "Brasília",
    pet_owner_email: "sergio.vicente.darosa@prognum.com.br",
    pet_owner_id: "16557720060071",
    pet_owner_name: "Sérgio Vicente Luan da Rosa",
    pet_owner_phone: "(61) 98160-6534",
    pet_photo:
      "https://www.canilgoldenpremier.com.br/wp-content/uploads/2018/08/dicas-de-higiene.jpg",
  },
  {
    pet_id: "16557724542670",
    pet_last_seen: "Rua de casa",
    pet_name: "Mimi",
    pet_owner_city: "Brasília",
    pet_owner_email: "andrea-assuncao86@wizardararaquara.com.br",
    pet_owner_id: "16557722790641",
    pet_owner_name: "Andrea Silvana Heloise Assunção",
    pet_owner_phone: "(61) 98984-3949",
    pet_photo:
      "https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_deitado_em_um_tapete_em_casa_com_uma_coleira_vermelha.jpg?itok=oqfMz1GU",
  },
];

if (!registered) {
  localStorage.setItem("registered", JSON.stringify(valoresIniciaisRegistros));
  localStorage.setItem(
    "lost-pets",
    JSON.stringify(valoresIniciaisAnimaisPerdidos)
  );
}
