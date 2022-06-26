document.getElementById("header-logout").addEventListener("click", logout);

const registers = JSON.parse(localStorage.getItem("registered"));
const animaisPerdidos = registers.filter((item) => item.service === "" && item.lostPets.length !== 0);
const clinicasVeterinarias = registers.filter((item) => item.service === "clinica-veterinaria");
const petShops = registers.filter((item) => item.service === "pet-shop");
const hotels = registers.filter((item) => item.service === "pet-hotel");
const cuidadores = registers.filter((item) => item.service === "Cuidador");
const ongs = registers.filter((item) => item.service === "ONG");

// listagem de animais perdidos
let adinionaCardAnimaisPerdidos = (data) => {
  let card = document.createElement("div");
  card.id = data.id;

  card.innerHTML = `<img class="activeIMg" id=${data.pet_id} src=${data.pet_photo}>
  <p id=${data.pet_id} class="activeText">${data.pet_name}</p>`;

  document.getElementById("box-vet-animais-perdidos").appendChild(card).classList.add("active");
};

animaisPerdidos.reverse().forEach((element) => {
  element.lostPets.forEach((el) => {
    adinionaCardAnimaisPerdidos(el);
  });
});

// listagem de clinicas veterinarias
let adinionaCardClinicasVeterinarias = (data) => {
  let card = document.createElement("div");
  card.id = data.id;

  card.innerHTML = `<img class="activeIMg" id=${data.id} src=${data.image}>
  <p id=${data.id} class="activeText">${data.name}</p>`;

  document.getElementById("box-vet-clinicas-veterinarias").appendChild(card).classList.add("active");
};

clinicasVeterinarias.reverse().forEach((element) => {
  adinionaCardClinicasVeterinarias(element);
});

// listagem de pet shop
let adinionaCardPetShop = (data) => {
  let card = document.createElement("div");
  card.id = data.id;

  card.innerHTML = `<img class="activeIMg" id=${data.id} src=${data.image}>
  <p id=${data.id} class="activeText">${data.name}</p>`;

  document.getElementById("box-vet-pets-shops").appendChild(card).classList.add("active");
};

petShops.reverse().forEach((element) => {
  adinionaCardPetShop(element);
});

// listagem de hoteis
let adinionaCardHoteisParaPet = (data) => {
  let card = document.createElement("div");
  card.id = data.id;

  card.innerHTML = `<img class="activeIMg" id=${data.id} src=${data.image}>
  <p id=${data.id} class="activeText">${data.name}</p>`;

  document.getElementById("box-vet-hoteis").appendChild(card).classList.add("active");
};

hotels.reverse().forEach((element) => {
  adinionaCardHoteisParaPet(element);
});

// listagem de cuidadores
let adinionaCardCuidadores = (data) => {
  let card = document.createElement("div");
  card.id = data.id;

  card.innerHTML = `<img class="activeIMg" id=${data.id} src=${data.image}>
  <p id=${data.id} class="activeText">${data.name}</p>`;

  document.getElementById("box-vet-cuidador").appendChild(card).classList.add("active");
};

cuidadores.reverse().forEach((element) => {
  adinionaCardCuidadores(element);
});

// listagem de ongs
let adinionaCardOngs = (data) => {
  let card = document.createElement("div");
  card.id = data.id;

  card.innerHTML = `<img class="activeIMg" id=${data.id} src=${data.image}>
  <p id=${data.id} class="activeText">${data.name}</p>`;

  document.getElementById("box-vet-ong").appendChild(card).classList.add("active");
};

ongs.reverse().forEach((element) => {
  adinionaCardOngs(element);
});


function logout() {
  localStorage.removeItem("login");
}
