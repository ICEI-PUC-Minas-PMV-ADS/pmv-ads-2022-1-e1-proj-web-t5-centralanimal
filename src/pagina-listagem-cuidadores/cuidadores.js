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
const cuidadores = registers.filter((item) => item.service === "Cuidador");

let adinionaCardPet = (data) => {
  let card = document.createElement("div");

  card.innerHTML = `<img class="activeIMg" src=${data.image}> <p class="activeText">${data.name}</p>`;

  document.getElementById("boxVet").appendChild(card).classList.add("active");
};

cuidadores.forEach((element) => {
  adinionaCardPet(element);
});

document.getElementById("header-logout").addEventListener("click", logout);

function logout() {
  localStorage.removeItem("login");
}
