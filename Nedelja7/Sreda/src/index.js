import axios from 'axios';
// Na stranici je select element pomocu kog se bira da li zelimo prikaz brodova ili lansiranja.

// U hederu stoji naziv kompanije.

// Pri izboru opcije brodovi na stranici se prikazuju svi brodovi koje spacex API nudi.

// Pri izboru opcije lansiranja na stranici se prikazuju sva prethodna lansiranja koje spacex API nudi.

// API: https://docs.spacexdata.com/
// Koristiti projekat sa casa
const select = document.querySelector('#select');
const container = document.querySelector('#container');

select.addEventListener('change', (e) => {
    e.preventDefault();
    select.value == 'ship' ? getShips() : getLaunches();
})
const getShips = () => {
    container.innerHTML = '';
    axios.get('https://api.spacexdata.com/v3/ships')
         .then(response => {
             console.log(response.data[0].url)
            response.data.forEach(ship => {
                addShipToDOM(ship);
            });
         })
}
const getLaunches = () => {
    container.innerHTML = '';
    axios.get('https://api.spacexdata.com/v3/launches')
         .then(response => {
            console.log(response.data[0]);
            response.data.forEach(launch => {
                addLaunchToDOM(launch);
            })
         })
}
const addShipToDOM = ship => {
    const divWrap = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('p');
    const year = document.createElement('p');
    const link = document.createElement('a');

    divWrap.className = 'div-wrap';
    img.className = 'image';

    img.src = ship.image;
    name.textContent = `Name: ${ship.ship_name}`;
    year.textContent = `Year built: ${ship.year_built}`;
    link.href = ship.url;
    link.target = '_blank';

    link.append(img)
    divWrap.append(link, name, year);
    container.append(divWrap);
}
const addLaunchToDOM = launch => {
    const divWrap = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('p');
    const year = document.createElement('p');
    const link = document.createElement('a');

    divWrap.className = 'div-wrap';
    img.className = 'image';

    img.src = launch.links.mission_patch_small;
    name.textContent = `Mission name: ${launch.mission_name}`;
    year.textContent = `Launch year: ${launch.launch_year}`;
    link.href = launch.links.video_link;
    link.target = '_blank';

    link.append(img)
    divWrap.append(link, name, year);
    container.append(divWrap);
}


