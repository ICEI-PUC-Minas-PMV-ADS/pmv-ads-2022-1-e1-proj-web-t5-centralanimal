document.getElementById("header-logout").addEventListener("click", logout);

const registers = JSON.parse(localStorage.getItem("registered"));

let incluirValoresParaLista = (objOrg, divDaListagem) =>{

  const arrayDeOrganizacoes = registers.filter((item) => item.service === objOrg);

  let adinionaCardClinicasVeterinarias = (data) => {
    let card = document.createElement("div");
    card.id = data.id;
  
    card.innerHTML = `<img class="activeIMg" id=${data.id} src=${data.image}>
    <p id=${data.id} class="activeText">${data.name}</p>`;
  
    document.getElementById(divDaListagem).appendChild(card).classList.add("active");
  };

  let cont = 0;
  if(cont < 5){
    arrayDeOrganizacoes.reverse().forEach((element) => {
      adinionaCardClinicasVeterinarias(element);
      cont++
    });
  }
}

const arrayDeAtribuiicoesOrgs = ["clinica-veterinaria", "box-vet-clinicas-veterinarias", "pet-shop", "box-vet-pets-shops", "pet-hotel", "box-vet-hoteis", "Cuidador", "box-vet-cuidador", "ONG", "box-vet-ong" ]

for(var i = 0; i < arrayDeAtribuiicoesOrgs.length; i+=2){
  incluirValoresParaLista(arrayDeAtribuiicoesOrgs[i], arrayDeAtribuiicoesOrgs[i+1]);
}

function logout() {
  localStorage.removeItem("login");
}