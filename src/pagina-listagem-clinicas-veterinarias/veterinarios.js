const registers = JSON.parse(localStorage.getItem("registered"));
const vets = registers.filter((item) => item.service === "clinica-veterinaria");

let adinionaCardPet = (data) => {
  let card = document.createElement("div");

  card.innerHTML = `<img class="activeIMg" src=${data.image}> <p class="activeText">${data.name}</p>`;

  document.getElementById("boxVet").appendChild(card).classList.add("active");
};

vets.forEach((element) => {
  adinionaCardPet(element);
});
