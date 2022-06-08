let adinionaCardPet = (imagem, texto) =>{
    
    let card = document.createElement( "div" );
        
    card.innerHTML = `<img class="activeIMg" src=${ imagem }> <p class="activeText">${texto}</p>`

    document.getElementById('boxVet').appendChild(card).classList.add("active");
}

arrayTesteAnimais = [
    animal = {
        nomeAnimal : "testenome",
        fotoTeste : "https://love.doghero.com.br/wp-content/uploads/2020/05/photo-1444212477490-ca407925329e-1024x640.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://love.doghero.com.br/wp-content/uploads/2020/05/photo-1444212477490-ca407925329e-1024x640.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://love.doghero.com.br/wp-content/uploads/2020/05/photo-1444212477490-ca407925329e-1024x640.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://love.doghero.com.br/wp-content/uploads/2020/05/photo-1444212477490-ca407925329e-1024x640.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://love.doghero.com.br/wp-content/uploads/2020/05/photo-1444212477490-ca407925329e-1024x640.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://love.doghero.com.br/wp-content/uploads/2020/05/photo-1444212477490-ca407925329e-1024x640.jpg"
    }
]

arrayTesteAnimais.forEach(element => {
    adinionaCardPet(element.fotoTeste, element.nomeAnimal);
});

