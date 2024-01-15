
const POKEMON_IMAGE_SOURCE = (
  `htpps://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`
);

/** Shows a single pokemon, with their name, image, and type */
function Pokecard({ id, name, type, base_experience }) {

  const pokeImg = `${POKEMON_IMAGE_SOURCE}/${id}.png`;
  return (
    <div className="Pokecard">
      <h3>{ name }</h3>
      <img src={ pokeImg } alt="pokemon image"></img>
      <p>{ type }</p>
      <p>EXP: { base_experience }</p>
    </div>
  )
};


export { Pokecard };