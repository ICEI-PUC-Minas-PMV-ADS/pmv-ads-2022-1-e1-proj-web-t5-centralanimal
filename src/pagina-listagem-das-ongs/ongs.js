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

document.getElementById("header-logout").addEventListener("click", logout);

function logout() {
  localStorage.removeItem("login");
}

const registers = JSON.parse(localStorage.getItem("registered"));
const ongs = registers.filter((item) => item.service === "ONG");

let adinionaCardPet = (data) => {
  let card = document.createElement("div");
  card.id = data.id;
  card.addEventListener("click", getCardId);

  card.innerHTML = `<img class="activeIMg" id=${data.id} src=${data.image}> <p id=${data.id} class="activeText">${data.name}</p>`;

  document.getElementById("boxVet").appendChild(card).classList.add("active");
};

ongs.forEach((element) => {
  adinionaCardPet(element);
});

function getCardId(event) {
  console.log(event.target.id);
}
