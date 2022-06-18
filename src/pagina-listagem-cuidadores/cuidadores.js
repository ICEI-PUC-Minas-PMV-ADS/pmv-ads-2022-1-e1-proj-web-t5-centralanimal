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
