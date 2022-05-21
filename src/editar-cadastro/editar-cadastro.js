const loggedUser = JSON.parse(localStorage.getItem("login"));

console.log(loggedUser);

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
const inputDescription = document.getElementById("edit-description-input");
inputDescription.value = loggedUser.description;
inputDescription.setAttribute(
  "required",
  loggedUser.isOrganization ? true : false
);
inputDescription.style.display = loggedUser.isOrganization ? "block" : "none";
