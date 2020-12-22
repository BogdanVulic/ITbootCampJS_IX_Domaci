let pokemons = [
    {//prvi
        name: 'Rayquaza',
        type: 'Dragon',
        abilities: ['Airlock', 'Flying', 'Firebreath', 'Dodge'],
        characteristics: {
            attack: 9,
            defence: 6,
            speed: 6
            }
    },
    {//drugi
    name: 'Jirachi',
    type: 'Psychic',
    abilities: ['Airlock', 'Serene grace'],
    characteristics: {
        attack: 6,
        defence: 6,
        speed: 6
        }
    },
    {//treci
        name: 'Deoxys',
        type: 'Psychic',
        abilities: ['Pressure', 'Serene grace', 'Fire'],
        characteristics: {
            attack: 9,
            defence: 3,
            speed: 9
            }
    },
    {//cetvrti
        name: 'Turtwig',
        type: 'Grass',
        abilities: ['Overgrow', 'Poison', 'Bug'],
        characteristics: {
            attack: 4,
            defence: 4,
            speed: 2
            }
    },
    {//peti
        name: 'Grotle',
        type: 'Grass',
        abilities: ['Overgrow', 'Ice', 'Bug'],
        characteristics: {
            attack: 6,
            defence: 5,
            speed: 3
            }
    },
    {//sesti
        name: 'Staraptor',
        type: 'Normal',
        abilities: ['Airlock', 'Flying', 'Intimidate', 'Electrocute'],
        characteristics: {
            attack: 8,
            defence: 5,
            speed: 6
            }
    },
    {//sedmi
        name: 'Bidoof ',
        type: 'Normal',
        abilities: ['Simple', 'Unaware', 'Bug'],
        characteristics: {
            attack: 3,
            defence: 3,
            speed: 2
            }
    }
];
const AllAbilities = (pokemons) => {
    let result = [];
    pokemons.forEach(pokemon => pokemon.abilities.forEach(ability => result.push(ability)));
    return result;
}
pokemons.sort((a, b) => a.characteristics.speed - b.characteristics.speed);