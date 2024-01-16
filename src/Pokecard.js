import './Pokecard.css';

const POKEMON_IMAGE_SOURCE = (
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`
);

/** Given an  obj of props of id, name, image, and base-experiece,
 * shows a single pokemon, with their name, image, and type */
function Pokecard({ id, name, type, base_experience }) {

  const pokeImgUrl = `${POKEMON_IMAGE_SOURCE}/${id}.png`;
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{ name }</h3>
      <img src={ pokeImgUrl } alt={name}></img>
      <p>Type: { type }</p>
      <p>EXP: { base_experience }</p>
    </div>
  )
};

export { Pokecard };