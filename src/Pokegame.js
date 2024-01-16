import { Pokedex } from './Pokedex';


/** Pokegame:
 *
 *  Takes list of 8 pokemon props and randomly assigns them into two hands of
 *  4 cards each.
 */
function Pokegame({ pokemons }) {

  for (let i = pokemons.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [pokemons[i], pokemons[j]] = [pokemons[j], pokemons[i]];
  }

  const firstHand = pokemons.slice(0, pokemons.length / 2);
  const secondHand = pokemons.slice(pokemons.length / 2);

  const firstHandExp = firstHand
    .map(x => x.base_experience)
    .reduce((a, b) => a + b, 0);

  const secondHandExp = secondHand
    .map(x => x.base_experience)
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <Pokedex
        pokemons={firstHand}
        totalExp={firstHandExp}
        isWinner={firstHandExp > secondHandExp}
      />
      <Pokedex
        pokemons={secondHand}
        totalExp={secondHandExp}
        isWinner={secondHandExp > firstHandExp}
      />
    </div>
  )
}

export { Pokegame };