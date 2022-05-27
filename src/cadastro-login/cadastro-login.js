// Registro

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", showInput);

const cnpjInput = document.getElementById("checkbox-cnpj-input");
const serviceInputContainer = document.getElementById("select-service-input");
const serviceInput = document.getElementById("organization-services");

function showInput() {
  if (checkbox.checked == true) {
    cnpjInput.style.display = "block";
    serviceInputContainer.style.display = "block";
    cnpjInput.setAttribute("required", true);
    serviceInput.setAttribute("required", true);
  } else {
    cnpjInput.style.display = "none";
    serviceInputContainer.style.display = "none";
    cnpjInput.setAttribute("required", false);
    serviceInput.setAttribute("required", false);
  }
}

document
  .getElementById("form-register")
  .addEventListener("submit", saveInformation);

function saveInformation(event) {
  event.preventDefault();

  const nameValue = document.getElementById("register-name-input").value;
  const emailValue = document.getElementById("register-email-input").value;
  const passwordValue = document.getElementById(
    "register-password-input"
  ).value;
  const isOrganization = document.getElementById("checkbox");
  const serviceValue = document.getElementById("organization-services").value;
  const cnpjValue = document.getElementById("checkbox-cnpj-input").value;

  const data = [
    {
      id: Date.now() + Math.random().toFixed(),
      name: nameValue,
      email: emailValue,
      phoneNumber: "",
      password: passwordValue,
      isOrganization: isOrganization.checked,
      service: serviceValue,
      cnpj: cnpjValue ? cnpjValue : "",
      cpf: "",
      description: "",
      lostPets: [],
      image: "",
      address: {},
      comments: [],
      ranking: undefined,
    },
  ];

  const hasRegister = localStorage.getItem("registered");
  const registers = JSON.parse(hasRegister);

  if (hasRegister) {
    const findExistingRegister = registers.filter(
      (item) => item.email === emailValue
    );

    if (findExistingRegister.length) {
      alert("Esse email já está cadastrado, realize o login ao lado!");
    } else {
      const newRegister = [...registers, data[0]];
      localStorage.removeItem("registered");
      localStorage.setItem("registered", JSON.stringify(newRegister));
      localStorage.setItem("login", JSON.stringify(data[0]));
      location.href = "../pagina-inicial/pagina-inicial.html";
    }
  } else {
    localStorage.setItem("registered", JSON.stringify(data));
    localStorage.setItem("login", JSON.stringify(data[0]));
    location.href = "../pagina-inicial/pagina-inicial.html";
  }
}

// Login

document.getElementById("form-login").addEventListener("submit", login);

function login(event) {
  event.preventDefault();

  const emailValue = document.getElementById("login-email-input").value;
  const passwordValue = document.getElementById("login-password-input").value;

  const registers = JSON.parse(localStorage.getItem("registered"));
  const findLogin = registers.filter((item) => item.email === emailValue);

  if (findLogin.length) {
    const findPassword = findLogin[0].password === passwordValue ? true : false;

    if (!findPassword) {
      alert("Você digitou a senha errada, tente novamente!");
    } else {
      localStorage.setItem("login", JSON.stringify(findLogin[0]));
      location.href = "../pagina-inicial/pagina-inicial.html";
    }
  } else {
    alert("Email não cadastrado, cadastre-se ao lado!");
  }
}
