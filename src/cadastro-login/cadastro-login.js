document.getElementById("checkbox").addEventListener("click");

function showInput() {
  const checkbox = document.getElementById("checkbox");
  const cnpjInput = document.getElementById("checkbox-cnpj-input");
  console.log(checkbox);
  if (checkbox.checked == true) {
    cnpjInput.style.display = "block";
  } else {
    cnpjInput.style.display = "none";
  }
}
