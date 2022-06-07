let adinionaCardPet = (imagem, texto) =>{
    
    let card = document.createElement( "div" );
        
    card.innerHTML = `<img class="activeIMg" src=${ imagem }> <p class="activeText">${texto}</p>`

    document.getElementById('boxVet').appendChild(card).classList.add("active");
}

arrayTesteAnimais = [
    animal = {
        nomeAnimal : "testenome",
        fotoTeste : "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&resize=680,453"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&resize=680,453"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&resize=680,453"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&resize=680,453"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&resize=680,453"
    },    {
        nomeAnimal : "testenome",
        fotoTeste : "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&resize=680,453"
    }
]

arrayTesteAnimais.forEach(element => {
    adinionaCardPet(element.fotoTeste, element.nomeAnimal);
});

