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

  // FIND what x.base_experience is if it's a number or not
  const firstHandExp = firstHand.map(x => x.base_exerience).reduce((a, b) => a + b, 0);
  const secondHandExp = secondHand.map(x => x.base_exerience).reduce((a, b) => a + b, 0);
  debugger;

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