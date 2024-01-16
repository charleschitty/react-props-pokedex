import './Pokecard.css';

const POKEMON_IMAGE_SOURCE = (
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`
);

/** Shows a single pokemon, with their name, image, and type */
function Pokecard({ id, name, type, base_experience }) {

  const pokeImg = `${POKEMON_IMAGE_SOURCE}/${id}.png`;
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{ name }</h3>
      <img src={ pokeImg } alt="pokemon"></img>
      <p>Type: { type }</p>
      <p>EXP: { base_experience }</p>
    </div>
  )
};


export { Pokecard };