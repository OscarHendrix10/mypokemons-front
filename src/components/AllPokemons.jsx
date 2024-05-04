import React, { useEffect, useState } from 'react'
import PokeApiService from '../helpers/pokeApiService'
import Modal from './Modal'

const AllPokemons = () => {
  const [details, setDetails] = useState([]);
  const [pokemonn, setPokemonn] = useState({});

  useEffect(() => {
    PokeApiService.fetchPokemon().then((data) => {
      const cards = data.results.map((card) => {
        return {
          url: card.url
        }
      })
      cards.forEach((card) => {
        PokeApiService.fetchPokemonDetails(card.url).then((detail) => {
          setDetails((details) => [...details, detail]);
        })
      })
    })
    PokeApiService.fetchPokemon();

    return () => { };
  }, []);

  const addPokemon = (e) => {
    const pokemon = {
      name: e.target.parentElement.parentElement.querySelector('#name').textContent,
      hp: e.target.parentElement.querySelector('#hp').textContent,
      power: e.target.parentElement.querySelector('#power').textContent,
      image: e.target.parentElement.parentElement.parentElement.querySelector('#pokemonImage').src
    }
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="has-text-centered">
            <h1 className="title  has-text-centered">List of Pokemons</h1>
            <Modal></Modal>
          </div>
          <br />
          <div className="columns is-multiline">
            {details.map((detail) => (
              <div class="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src={detail.sprites.other.dream_world.front_default}
                      alt={detail.name}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          id='pokemonImage'
                          src={detail.sprites.front_default}
                          alt={detail.name}
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4" id='name'>{detail.name}</p>
                      <p className="subtitle is-6"> Total Moves: {detail.moves.length}</p>
                    </div>
                  </div>

                  <div className="content">
                    <ul>
                      <li id='hp'>
                        HP: {detail.stats[0].base_stat}
                      </li>
                      <li id='power'>
                        Power: {detail.stats[1].base_stat}
                      </li>
                    </ul>
                    <button className="button is-link is-light" onClick={addPokemon}>Add in the Pokeball</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllPokemons