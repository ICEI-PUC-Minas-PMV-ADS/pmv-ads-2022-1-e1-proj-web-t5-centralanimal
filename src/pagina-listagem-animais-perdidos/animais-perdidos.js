// Lista pets perdidos
const hasLostPets = localStorage.getItem("lost-pets");
const lostPets = JSON.parse(hasLostPets)?.reverse();

let adinionaCardPet = (data) => {
  let card = document.createElement("div");

  card.innerHTML = `<img class="activeIMg" src=${data.pet_photo}> <p class="activeText">Nome do pet: ${data.pet_name}<br>Onde: ${data.pet_owner_city} <br>Telefone: ${data.pet_owner_phone} <br>Email: ${data.pet_owner_email} <br> Responsável: ${data.pet_owner_name} </p>`;

  document.getElementById("boxVet").appendChild(card).classList.add("active");
};

lostPets?.forEach((element) => {
  adinionaCardPet(element);
});

// Cadastra pets perdidos

const loggedUser = JSON.parse(localStorage.getItem("login"));
const registers = JSON.parse(localStorage.getItem("registered"));

if (loggedUser) {
  document.getElementById("header-content-login").style.display = "none";
  document.getElementById("header-my-information").style.display = "flex";
} else {
  document.getElementById("header-content-login").style.display = "flex";
  document.getElementById("header-my-information").style.display = "none";
}

const petOwnerName = document.getElementById("edit-name-input");
petOwnerName.value = loggedUser?.name ? loggedUser.name : "";
const petOwnerEmail = document.getElementById("edit-email-input");
petOwnerEmail.value = loggedUser?.email ? loggedUser.email : "";
const petOwnerPhone = document.getElementById("edit-phone-input");
petOwnerPhone.value = loggedUser?.phoneNumber ? loggedUser.phoneNumber : "";
const petOwnerCity = document.getElementById("edit-city-input");
petOwnerCity.value = loggedUser?.address.city ? loggedUser.address.city : "";

document
  .getElementById("edit-form")
  .addEventListener("submit", registerLostPets);

function registerLostPets(event) {
  event.preventDefault();

  const petOwnerName = document.getElementById("edit-name-input").value;
  const petOwnerEmail = document.getElementById("edit-email-input").value;
  const petOwnerPhone = document.getElementById("edit-phone-input").value;
  const petOwnerCity = document.getElementById("edit-city-input").value;
  const petName = document.getElementById("edit-pet-name-input").value;
  const lastSeen = document.getElementById("edit-last-seen-input").value;
  const petPhoto = document.getElementById("edit-image-input").value;

  const data = {
    pet_owner_name: petOwnerName,
    pet_owner_email: petOwnerEmail,
    pet_owner_phone: petOwnerPhone,
    pet_owner_city: petOwnerCity,
    pet_owner_id: loggedUser.id,
    pet_name: petName,
    pet_last_seen: lastSeen,
    pet_photo: petPhoto,
    pet_id: Date.now() + Math.random().toFixed(),
  };

  const hasLostPets = localStorage.getItem("lost-pets");
  const lostPets = JSON.parse(hasLostPets);

  if (hasLostPets) {
    localStorage.setItem("lost-pets", JSON.stringify([...lostPets, data]));
    document.location.reload();
    alert("Pet registrado com sucesso!");
  } else {
    localStorage.setItem("lost-pets", JSON.stringify([data]));
    document.location.reload();
    alert("Pet registrado com sucesso!");
  }
  localStorage.setItem(
    "login",
    JSON.stringify({
      ...loggedUser,
      lostPets: [...loggedUser.lostPets, data],
    })
  );

  const newData = { ...loggedUser, lostPets: [...loggedUser.lostPets, data] };

  const index = registers.map((item) => item.id).indexOf(loggedUser.id);
  registers.splice(index, 1, newData);
  const newRegister = registers;
  localStorage.setItem("registered", JSON.stringify(newRegister));
}

document.getElementById("header-logout").addEventListener("click", logout);

function logout() {
  localStorage.removeItem("login");
}
