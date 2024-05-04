


class PokeApiService {
  
    static async fetchPokemon() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        const resp  = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        return resp.json();
      } catch (error) {
        console.error(error);
      }
    }

    static async fetchPokemonDetails(url) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
            const resp  = await fetch(url);
            return resp.json();
        } catch (error) {
            console.error(error);
        }
    }

}

export default PokeApiService;