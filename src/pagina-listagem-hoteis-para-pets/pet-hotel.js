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
  document.getElementById("page-content-logged").style.display = "block";
  document.getElementById("page-content-form-logged-out").style.display =
    "none";
} else {
  document.getElementById("header-content-login").style.display = "flex";
  document.getElementById("header-my-information").style.display = "none";
  document.getElementById("page-content-logged").style.display = "none";
  document.getElementById("page-content-form-logged-out").style.display =
    "block";
  document.getElementById("page-content-form").style.overflowY = "hidden";
}

const registers = JSON.parse(localStorage.getItem("registered"));
const hotels = registers.filter((item) => item.service === "pet-hotel");

let adinionaCardPet = (data) => {
  let card = document.createElement("div");
  card.id = data.id;
  card.addEventListener("click", getCardId);
  
  if(data.image == ""){
    data.image = "https://sintep.org.br/sintep/admin/uploads/arquivos/1634930642sem-foto.png";
  }

  card.innerHTML = `<a class="activeLink" href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <img class="activeIMg" id=${data.id} src=${data.image}></a> <p id=${data.id} class="activeText">${data.name}</p>`;

  document.getElementById("boxVet").appendChild(card).classList.add("active");
};

hotels.reverse().forEach((element) => {
  adinionaCardPet(element);
});

const companyName = document.getElementById("modal-enterprise-edit-form-title");
const companyDescription = document.getElementById(
  "modal-enterprise-description"
);
const companyPhone = document.getElementById("modal-enterprise-phone");
const companyEmail = document.getElementById("modal-enterprise-email");
const companyAddress = document.getElementById("modal-enterprise-address");
const companyImage = document.getElementById("modal-enterprise-image");
const companyDocument = document.getElementById("modal-enterprise-document");

let orgId;
let orgComments = [];

function getCardId(event) {
  const id = event.target.id;
  orgId = id;

  const org = registers.filter((item) => item.id === id)[0];
  orgComments = org.comments;

  companyName.innerText = org.name;
  companyDescription.innerText = org.description;
  companyPhone.innerText = `Telefone: ${org.phoneNumber}`;
  companyEmail.innerText = `Email: ${org.email}`;
  companyAddress.innerText = `Endereço: ${org.address.address}, ${
    org.address.number
  } - ${org.address.complement ? `${org.address.complement}.` : ""} ${
    org.address.neighborhood
  }, ${org.address.city} - ${org.address.state} ${org.address.country} - ${
    org.address.zipCode
  }`;
  companyImage.setAttribute("src", org.image);
  companyDocument.innerText = org.cnpj;

  if (orgComments.length) {
    org.comments.reverse().map((item) => {
      let li = document.createElement("li");

      li.innerHTML = `
      <div class="comment-card">
      <p class="comment-title">${item.name} - ${item.date.slice(
        0,
        10
      )} - Nota: ${item.score}</p>
      <p class="comment-comment">${item.comment}</p>
      </div>
      `;

      document.getElementById("comment-list").appendChild(li);
    });
  }
}

// Comentário

const formComment = document.getElementById("comment-form");
document.getElementById("comment-form").addEventListener("submit", saveComment);

function saveComment(event) {
  event.preventDefault();

  const comment = document.getElementById("comment-input").value;
  const score = document.getElementById("organization-scores").value;

  const data = {
    comment,
    score: parseInt(score),
    date: new Date(),
    name: loggedUser.name,
    userId: loggedUser.id,
    id: Date.now() + Math.random().toFixed(),
  };

  const org = registers.filter((item) => item.id === orgId)[0];
  const newOrgInfo = { ...org, comments: [...org.comments, data] };

  const currentUserInfo = {
    ...loggedUser,
    comments: [...loggedUser.comments, data],
  };

  const alreadyCommented = org.comments
    .map((item) => item.userId)
    .includes(loggedUser.id);

  if (!alreadyCommented) {
    orgComments.push(data);

    const orgIndex = registers.map((item) => item.id).indexOf(orgId);
    const currentUserIndex = registers
      .map((item) => item.id)
      .indexOf(loggedUser.id);

    registers.splice(orgIndex, 1, newOrgInfo);
    registers.splice(currentUserIndex, 1, currentUserInfo);

    const newRegisters = registers;
    localStorage.setItem("registered", JSON.stringify(newRegisters));
    localStorage.setItem("login", JSON.stringify(currentUserInfo));

    alert("Avaliação postada!");
    document.location.reload();
  } else {
    alert("Vocẽ já deixou uma avaliação para essa organização!");
    formComment.reset();
  }
}

document.getElementById("btn-close").addEventListener("click", resetModal);

function resetModal() {
  document.location.reload();
}

document.getElementById("header-logout").addEventListener("click", logout);

function logout() {
  localStorage.removeItem("login");
}
