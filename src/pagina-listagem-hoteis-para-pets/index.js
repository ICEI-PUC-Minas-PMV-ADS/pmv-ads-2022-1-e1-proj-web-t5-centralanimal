let adinionaCardPet = (imagem, texto) =>{
    
    let card = document.createElement( "div" );
        
    card.innerHTML = `<img class="activeIMg" src=${ imagem }> <p class="activeText">${texto}</p>`

    document.getElementById('boxVet').appendChild(card).classList.add("active");
}

arrayTesteAnimais = [
    animal = {
        nomeAnimal : "testenome",
        fotoTeste : "https://vetus.com.br/universidade/wp-content/uploads/2016/05/hotel-02.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://vetus.com.br/universidade/wp-content/uploads/2016/05/hotel-02.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://vetus.com.br/universidade/wp-content/uploads/2016/05/hotel-02.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://vetus.com.br/universidade/wp-content/uploads/2016/05/hotel-02.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://vetus.com.br/universidade/wp-content/uploads/2016/05/hotel-02.jpg"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://vetus.com.br/universidade/wp-content/uploads/2016/05/hotel-02.jpg"
    }
]

arrayTesteAnimais.forEach(element => {
    adinionaCardPet(element.fotoTeste, element.nomeAnimal);
});

