const registers = JSON.parse(localStorage.getItem("registered"));
const hotels = registers.filter((item) => item.service === "pet-hotelcuidadores");

let adinionaCardPet = (data) => {
  let card = document.createElement("div");

  card.innerHTML = `<img class="activeIMg" src=${data.image}> <p class="activeText">${data.name}</p>`;

  document.getElementById("boxVet").appendChild(card).classList.add("active");
};

hotels.forEach((element) => {
  adinionaCardPet(element);
});
