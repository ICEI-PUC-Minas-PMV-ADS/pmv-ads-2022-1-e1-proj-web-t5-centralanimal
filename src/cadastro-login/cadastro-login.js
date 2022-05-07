const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", showInput);

const cnpjInput = document.getElementById("checkbox-cnpj-input");

function showInput() {
  if (checkbox.checked == true) {
    cnpjInput.style.display = "block";
    cnpjInput.setAttribute("required", true);
  } else {
    cnpjInput.style.display = "none";
    cnpjInput.setAttribute("required", false);
  }
}

document.querySelector("form").addEventListener("submit", saveInformation);

function saveInformation(e) {
  e.preventDefault();

  const nameValue = document.getElementById("register-name-input").value;
  const emailValue = document.getElementById("register-email-input").value;
  const passwordValue = document.getElementById(
    "register-password-input"
  ).value;
  const isOrganization = document.getElementById("checkbox");
  const cnpjValue = document.getElementById("checkbox-cnpj-input").value;

  const data = [
    {
      id: Date.now() + Math.random().toFixed(),
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      isOrganization: isOrganization.checked,
      cnpj: cnpjValue ? cnpjValue : "",
      comments: [],
      ranking: undefined,
    },
  ];

  const hasRegister = localStorage.getItem("registered");
  console.log(JSON.parse(hasRegister));

  // if (hasRegister) {
  //   if ()
  // }

  localStorage.setItem("registered", JSON.stringify(data));
  localStorage.setItem("login", JSON.stringify(data[0]));
}

const hasRegister = localStorage.getItem("registered");
// console.log(hasRegister);
console.log(JSON.parse(hasRegister));
