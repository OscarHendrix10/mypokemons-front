import React from 'react'

const TablePokemos = () => {
    return (
        <div>
            <div className='has-text-white-bis'>MyPokemons</div>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Pokemon</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pikachu</td>
                        <td>
                            <button className='button is-danger'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Charmander</td>
                        <td>
                            <button className='button is-danger'>Delete</button>
                        </td>
                    </tr>   
                </tbody>
            </table>
        </div>
    )
}

export default TablePokemos