let adinionaCardPet = (imagem, texto) =>{
    
    let card = document.createElement( "div" );
        
    card.innerHTML = `<img class="activeIMg" src=${ imagem }> <p class="activeText">${texto}</p>`

    document.getElementById('boxVet').appendChild(card).classList.add("active");
}

arrayTesteAnimais = [
    animal = {
        nomeAnimal : "testenome",
        fotoTeste : "https://www.uninga.br/wp-content/uploads/2021/05/IMG_0075-scaled.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://www.uninga.br/wp-content/uploads/2021/05/IMG_0075-scaled.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://www.uninga.br/wp-content/uploads/2021/05/IMG_0075-scaled.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://www.uninga.br/wp-content/uploads/2021/05/IMG_0075-scaled.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://www.uninga.br/wp-content/uploads/2021/05/IMG_0075-scaled.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://www.uninga.br/wp-content/uploads/2021/05/IMG_0075-scaled.jpg"
    }
]

arrayTesteAnimais.forEach(element => {
    adinionaCardPet(element.fotoTeste, element.nomeAnimal);
});

