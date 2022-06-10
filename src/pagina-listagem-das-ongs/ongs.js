const registers = JSON.parse(localStorage.getItem("registered"));
const ongs = registers.filter((item) => item.service === "ONG");

let adinionaCardPet = (data) => {
  let card = document.createElement("div");

  card.innerHTML = `<img class="activeIMg" src=${data.image}> <p class="activeText">${data.name}</p>`;

  document.getElementById("boxVet").appendChild(card).classList.add("active");
};

ongs.forEach((element) => {
  adinionaCardPet(element);
});
