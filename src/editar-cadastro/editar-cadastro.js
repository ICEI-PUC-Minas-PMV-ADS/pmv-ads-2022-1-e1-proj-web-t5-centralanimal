const loggedUser = JSON.parse(localStorage.getItem("login"));
const registers = JSON.parse(localStorage.getItem("registered"));

const inputName = document.getElementById("edit-name-input");
inputName.value = loggedUser.name ? loggedUser.name : "";
const inputEmail = document.getElementById("edit-email-input");
inputEmail.value = loggedUser.email ? loggedUser.email : "";
const inputPhone = document.getElementById("edit-phone-input");
inputPhone.value = loggedUser.phoneNumber ? loggedUser.phoneNumber : "";
const inputCpfCnpj = document.getElementById("edit-cpf-cnpj-input");
inputCpfCnpj.value = loggedUser.isOrganization
  ? loggedUser.cnpj
    ? loggedUser.cnpj
    : ""
  : loggedUser.cpf
  ? loggedUser.cpf
  : "";
inputCpfCnpj.setAttribute(
  "placeholder",
  loggedUser.isOrganization ? "CNPJ" : "CPF"
);
const inputZip = document.getElementById("edit-zip-input");
inputZip.value = loggedUser.address.zipCode ? loggedUser.address.zipCode : "";
const inputAddress = document.getElementById("edit-address-input");
inputAddress.value = loggedUser.address.address
  ? loggedUser.address.address
  : "";
const inputNumber = document.getElementById("edit-number-input");
inputNumber.value = loggedUser.address.number ? loggedUser.address.number : "";
const inputComplement = document.getElementById("edit-complement-input");
inputComplement.value = loggedUser.address.complement
  ? loggedUser.address.complement
  : "";
const inputNeighborhood = document.getElementById("edit-neighborhood-input");
inputNeighborhood.value = loggedUser.address.neighborhood
  ? loggedUser.address.neighborhood
  : "";
const inputCity = document.getElementById("edit-city-input");
inputCity.value = loggedUser.address.city ? loggedUser.address.city : "";
const inputState = document.getElementById("edit-state-input");
inputState.value = loggedUser.address.state ? loggedUser.address.state : "";
const inputCountry = document.getElementById("edit-country-input");
inputCountry.value = loggedUser.address.country
  ? loggedUser.address.country
  : "";
const inputImage = document.getElementById("edit-image-input");
inputImage.value = loggedUser.image;
const inputDescription = document.getElementById("edit-description-input");
inputDescription.value = loggedUser.description;

if (loggedUser.isOrganization) {
  inputDescription.setAttribute("required", true);
  inputDescription.style.display = "block";
}

document
  .getElementById("edit-form")
  .addEventListener("submit", editInformation);

function editInformation(event) {
  event.preventDefault();

  const name = inputName.value;
  const email = inputEmail.value;
  const phoneNumber = inputPhone.value;
  const document = inputCpfCnpj.value;
  const zipCode = inputZip.value;
  const address = inputAddress.value;
  const number = inputNumber.value;
  const complement = inputComplement.value;
  const neighborhood = inputNeighborhood.value;
  const city = inputCity.value;
  const state = inputState.value;
  const country = inputCountry.value;
  const image = inputImage.value;
  const description = inputDescription.value;

  const newData = {
    ...loggedUser,
    name,
    email,
    phoneNumber,
    cnpj: loggedUser.isOrganization ? document : "",
    cpf: !loggedUser.isOrganization ? document : "",
    image,
    description,
    address: {
      address,
      zipCode,
      number,
      complement,
      neighborhood,
      city,
      state,
      country,
    },
  };

  const index = registers.map((item) => item.id).indexOf(loggedUser.id);
  registers.splice(index, 1, newData);
  const newRegisters = registers;
  localStorage.removeItem("login");
  localStorage.setItem("login", JSON.stringify(newData));
  localStorage.removeItem("registered");
  localStorage.setItem("registered", JSON.stringify(newRegisters));
  alert("Informações atualizadas com sucesso!");
}

document.getElementById("header-logout").addEventListener("click", logout);

function logout() {
  localStorage.removeItem("login");
}

document
  .getElementById("close-account")
  .addEventListener("click", closeAccount);

function closeAccount() {
  const shouldCloseAccount = confirm("Deseja realmente excluir sua conta?");

  if (shouldCloseAccount) {
    const index = registers.map((item) => item.id).indexOf(loggedUser.id);
    registers.splice(index, 1);
    const newRegisters = registers;
    localStorage.removeItem("registered");
    localStorage.setItem("registered", JSON.stringify(newRegisters));
    localStorage.removeItem("login");
    location.href = "../index.html";
    alert("Sua conta foi excluída!");
  }
}
