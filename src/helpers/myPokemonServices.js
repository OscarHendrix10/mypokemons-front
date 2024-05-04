import axios from 'axios';
import { routes } from '../routes';

class MyPokemonServices {

    static async addPokemon(pokemon) {
      try{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const resp = await axios.post(`${routes.DEV}/api/pokemon`, pokemon);

        return resp;
      }catch(err){
        console.log(err);
      }
    }

    static async fetchPokemon() {
      try{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const resp = await axios.get(`${routes.DEV}/api/pokemon`);
        return resp.data;
      }catch(err){
        console.log(err);
      }
    }

    static async deletePokemon(id) {
        try{
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const resp = await axios.delete(`${routes.DEV}/api/pokemon/${id}`);
            return resp;
        }catch(err){
            console.log(err);
        }
    }

}

export default MyPokemonServices;