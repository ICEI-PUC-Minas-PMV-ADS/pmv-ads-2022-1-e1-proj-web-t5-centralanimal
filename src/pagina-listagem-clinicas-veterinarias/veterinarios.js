const loggedUser = JSON.parse(localStorage.getItem("login"));

if (loggedUser) {
  document.getElementById("header-content-login").style.display = "none";
  document.getElementById("header-my-information").style.display = "flex";
  document
    .getElementById("header-content-logo-link-logo")
    .setAttribute("href", "../pagina-inicial/pagina-inicial.html");
  document
    .getElementById("header-content-logo-link-title")
    .setAttribute("href", "../pagina-inicial/pagina-inicial.html");
} else {
  document.getElementById("header-content-login").style.display = "flex";
  document.getElementById("header-my-information").style.display = "none";
}

const registers = JSON.parse(localStorage.getItem("registered"));
const vets = registers.filter((item) => item.service === "clinica-veterinaria");

let adinionaCardPet = (data) => {
  let card = document.createElement("div");
  card.id = data.id;
  card.addEventListener("click", getCardId);

  card.innerHTML = `<img class="activeIMg" id=${data.id} src=${data.image}> <p id=${data.id} class="activeText">${data.name}</p>`;

  document.getElementById("boxVet").appendChild(card).classList.add("active");
};

vets.reverse().forEach((element) => {
  adinionaCardPet(element);
});

const companyName = document.getElementById("modal-enterprise-edit-form-title");
const companyDescription = document.getElementById(
  "modal-enterprise-description"
);
const companyPhone = document.getElementById("modal-enterprise-phone");
const companyEmail = document.getElementById("modal-enterprise-email");
const companyAddress = document.getElementById("modal-enterprise-address");
const companyImage = document.getElementById("modal-enterprise-image");
const companyDocument = document.getElementById("modal-enterprise-document");

function getCardId(event) {
  const id = event.target.id;
  const item = registers.filter((item) => item.id === id)[0];

  console.log(item);
  companyName.innerText = item.name;
  companyDescription.innerText = item.description;
  companyPhone.innerText = `Telefone: ${item.phoneNumber}`;
  companyEmail.innerText = `Email: ${item.email}`;
  companyAddress.innerText = `Endereço: ${item.address.address}, ${
    item.address.number
  } - ${item.address.complement ? `${item.address.complement}.` : ""} ${
    item.address.neighborhood
  }, ${item.address.city} - ${item.address.state} ${item.address.country} - ${
    item.address.zipCode
  }`;
  companyImage.setAttribute("src", item.image);
  companyDocument.innerText = item.cnpj;
}

document.getElementById("header-logout").addEventListener("click", logout);

function logout() {
  localStorage.removeItem("login");
}
