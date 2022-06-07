let adinionaCardPet = (imagem, texto) =>{
    
    let card = document.createElement( "div" );
        
    card.innerHTML = `<img class="activeIMg" src=${ imagem }> <p class="activeText">${texto}</p>`

    document.getElementById('boxVet').appendChild(card).classList.add("active");
}

arrayTesteAnimais = [
    animal = {
        nomeAnimal : "testenome",
        fotoTeste : "https://amapa.ind.br/imagens/blog/1611857707-Post_Ja_esta_em_vigor_a_nova_regulamentacao_para_as_pet_shops.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://amapa.ind.br/imagens/blog/1611857707-Post_Ja_esta_em_vigor_a_nova_regulamentacao_para_as_pet_shops.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://amapa.ind.br/imagens/blog/1611857707-Post_Ja_esta_em_vigor_a_nova_regulamentacao_para_as_pet_shops.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://amapa.ind.br/imagens/blog/1611857707-Post_Ja_esta_em_vigor_a_nova_regulamentacao_para_as_pet_shops.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://amapa.ind.br/imagens/blog/1611857707-Post_Ja_esta_em_vigor_a_nova_regulamentacao_para_as_pet_shops.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://amapa.ind.br/imagens/blog/1611857707-Post_Ja_esta_em_vigor_a_nova_regulamentacao_para_as_pet_shops.jpg"
    }
]

arrayTesteAnimais.forEach(element => {
    adinionaCardPet(element.fotoTeste, element.nomeAnimal);
});

