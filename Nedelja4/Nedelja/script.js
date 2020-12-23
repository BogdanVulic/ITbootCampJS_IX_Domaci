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
            attack: 7,
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
        abilities: ['Flying', 'Intimidate', 'Electrocute'],
        characteristics: {
            attack: 8,
            defence: 5,
            speed: 6
            }
    },
    {//sedmi
        name: 'Bidoof',
        type: 'Normal',
        abilities: ['Simple', 'Unaware', 'Bug'],
        characteristics: {
            attack: 3,
            defence: 3,
            speed: 2
            }
    },
    {//osmi
        name: 'Greninja',
        type: 'Water',
        abilities: ['Torrent', 'Electric', 'Ice'],
        characteristics: {
            attack: 6,
            defence: 4,
            speed: 8
            }
    },
    {//deveti
        name: 'Dragonite',
        type: 'Dragon',
        abilities: ['Inner Focus', 'Flying', 'Ice'],
        characteristics: {
            attack: 3,
            defence: 3,
            speed: 2
            }
    }
];
const strongestPokemon = (pokemons, strongest = 0) => {
    let attack = 0;
    pokemons.forEach(pokemon => {
        if(pokemon.characteristics.attack > attack){
            attack = pokemon.characteristics.attack;
            strongest = pokemon;
        }
    })
    return strongest;
}
let divWrapper = document.querySelector('.wrapper');
let buttonAllPokemons = document.querySelector('#prikaz');
let buttonStrongestPokemon = document.querySelector('#pobednik');

buttonAllPokemons.addEventListener('click', () => {
    //event.preventDefaults();
    pokemons.forEach((pokemon) => {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let img = document.createElement('img');
        p.innerText = 'Name: ' + pokemon.name + '\nType: ' + pokemon.type + '\nAbilities: ' +     pokemon.abilities.join(', ') + '\nCharacteristics:' + '\nAttack: ' + pokemon.characteristics.attack + ', Defence: ' + pokemon.characteristics.defence + ', Speed: ' + pokemon.characteristics.speed + '.';
        p.style.border = "solid black 1px";
        p.style.fontSize = "80%";
        p.style.padding = '10px';
        p.style.backgroundColor = '#FBF6BB';
        p.style.borderRadius = '5px';
    img.src = `${pokemon.name}.png`; 
    img.style.width = '90%';
    div.style.width = '29%';
    div.style.float = 'left';
    div.style.border = 'solid black 1px';
    div.style.padding = '10px'
    div.style.margin = '10px';
    div.style.borderRadius = '5px';

    div.appendChild(p);
    div.appendChild(img);
    divWrapper.appendChild(div);
    })
})
buttonStrongestPokemon.addEventListener('click', () => {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let strongest = strongestPokemon(pokemons);
        p.innerText = 'Name: ' + strongest.name + '\nType: ' + strongest.type + '\nAbilities: ' +     strongest.abilities.join(', ') + '\nCharacteristics:' + '\nAttack: ' + strongest.characteristics.attack + ', Defence: ' + strongest.characteristics.defence + ', Speed: ' + strongest.characteristics.speed + '.';
        p.style.border = "solid black 1px";
        p.style.fontSize = "80%";
        p.style.padding = '10px';
        p.style.backgroundColor = '#FBF6BB';
        p.style.borderRadius = '5px';
    img.src = `${strongest.name}.png`; 
    img.style.width = '90%';
    div.style.width = '50%';
    div.style.float = 'left';
    div.style.border = 'solid black 1px';
    div.style.padding = '10px'
    div.style.margin = '10px';
    div.style.borderRadius = '5px';

    div.appendChild(p);
    div.appendChild(img);
    divWrapper.appendChild(div);
})
