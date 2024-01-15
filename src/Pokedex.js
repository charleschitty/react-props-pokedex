import { Pokecard } from "./Pokecard";


/** Given an array of objects describing different pokemon,
 *  renders a sequence of Pokecard components
 *
 *  Ex Input: [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}]
 */
function Pokedex({ pokemons }) {
  return (
    <div>
      <ul>
        {pokemons.map(p => <li>{Pokecard(p)}</li>)};
      </ul>
    </div>
  )
};


export { Pokedex }