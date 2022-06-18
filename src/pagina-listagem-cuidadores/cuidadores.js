const registers = JSON.parse(localStorage.getItem("registered"));
const petShops = registers.filter((item) => item.service === "Cuidador");

let adinionaCardPet = (data) => {
  let card = document.createElement("div");

  card.innerHTML = `<img class="activeIMg" src=${data.image}> <p class="activeText">${data.name}</p>`;

  document.getElementById("boxVet").appendChild(card).classList.add("active");
};

petShops.forEach((element) => {
  adinionaCardPet(element);
});
