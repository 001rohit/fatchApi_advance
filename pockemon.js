async function FetchData(){
    try{
        const pokemonName = document.getElementById("input").value.toLowerCase() ;
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){

            throw new Error("Could not fetch resource");

        }
        const data = await response.json();

        const pokemonImage = data.sprites.front_default;

        const imgElement = document.getElementById("pokemon-img")

        imgElement.src = pokemonImage

        imgElement.style.display = "block"
    }
    catch(error){
        console.log(error)
    }
}
