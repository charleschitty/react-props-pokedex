import { Pokecard } from "./Pokecard";
import './Pokedex.css';

/** Given an array of objects describing different pokemon,
 *  renders a sequence of Pokecard components
 *
 *  Ex props: [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}]
 */
function Pokedex({ pokemons, totalExp, isWinner }) {

  return (
    <div className="Pokedex">
      <h1 className="Pokedex-name">Pokedex</h1>
      <ul className="Pokedex-pokemon">
        {pokemons.map(
          p =>
              <li className="Pokedex-pokecard">
                <Pokecard
                  id = {p.id}
                  name = {p.name}
                  type = {p.type}
                  base_experience = {p.base_experience}
                />
              </li>
          )
        }
      </ul>
      <p>Total EXP: { totalExp }</p>
      <p>{ isWinner ? "THIS HAND WINS!" : "This hand lost." }</p>
    </div>
  )
};


export { Pokedex };