document.getElementById("checkbox").addEventListener("click", showInput);

function showInput() {
  const checkbox = document.getElementById("checkbox");
  const cnpjInput = document.getElementById("checkbox-cnpj-input");

  if (checkbox.checked == true) {
    cnpjInput.style.display = "block";
  } else {
    cnpjInput.style.display = "none";
  }
}
