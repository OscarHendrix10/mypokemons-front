import React, { useState } from 'react'
import TablePokemos from './TablePokemos';

const Modal = () => {
    const [isActive, setIsActive] = useState(false);

  const toggleModal = () => {
    setIsActive(!isActive);
  };


  return (
      <>
     <div>
      <button className="button is-danger" onClick={toggleModal}>
        My PokeBall
      </button>

      <div className={isActive ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <h2 className="title">My pokemons in my Pokeball</h2>
            <TablePokemos></TablePokemos>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleModal}></button>
      </div>
    </div>
    </>
  )
}

export default Modal