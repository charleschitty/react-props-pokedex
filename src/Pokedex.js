import { Pokecard } from "./Pokecard";
import './Pokedex.css';

/** Given an array of objects describing different pokemon,
 *  renders a sequence of Pokecard components
 *
 *  Ex Input: [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}]
 */
function Pokedex({ pokemons }) {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-name">Pokedex</h1>
      <ul className="Pokedex-pokemon">
        {pokemons.map(p => <li>{Pokecard(p)}</li>)};
      </ul>
    </div>
  )
};


export { Pokedex }