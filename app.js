const public_key = '02e8e8edeb62e37faf920fbbb10aa7fd'
const private_key = 'f1b4eadbc182279039d7e5bf0f846fe2075e6f89'
const character_url = 'https://gateway.marvel.com/v1/public/characters'
const comics_url = 'https://gateway.marvel.com/v1/public/comics'
const creadores_url = 'https://gateway.marvel.com/v1/public/creators'
const eventos_url = 'https://gateway.marvel.com/v1/public/events'
const series_url = 'https://gateway.marvel.com/v1/public/series'
const historias_url = 'https://gateway.marvel.com/v1/public/stories'
let offset = 0;


const getData = async (url, offset = 0) => {
  const timestamp = Math.floor(Date.now() / 1000)
  const hash = md5(timestamp + private_key + public_key);

  const response = await fetch(`${url}?ts=${timestamp}&apikey=${public_key}&hash=${hash}&offset=${offset}`)
  const data = response.json();
  return data;
}



function addData(datos) {
  const dataContainer = document.getElementById('data');
  dataContainer.innerHTML = "";

  datos.forEach(item => {
    const descriptionText = item.description.trim() || "NO INFO";
    dataContainer.innerHTML += `
      <div class="tarjeta">
        <h2 class="titulo">${item.name}</h2>
        <div class="imagen-container">
          <img src="${item.thumbnail.path}.${item.thumbnail.extension}" class="imagen">
          <div class="opacidad">
            <div class="texto-tarjeta">${descriptionText}</div>
          </div>
        </div>
      </div>
    `;
  });
}



function addData2(datos) {
  const dataContainer = document.getElementById('data');
  dataContainer.innerHTML = "";

  datos.forEach(item => {
    // const descriptionText = item.description.trim() || "NO INFO";
    dataContainer.innerHTML += `
      <div class="tarjeta">
        <h2 class="titulo">${item.title}</h2>
        <div class="imagen-container">
          <img src="${item.thumbnail.path}.${item.thumbnail.extension}" class="imagen">
          <div class="opacidad">
            <div class="texto-tarjeta">NO INFO</div>
          </div>
        </div>
        
      </div>
    `;
  });
}

function addData3(datos) {
  const dataContainer = document.getElementById('data');
  dataContainer.innerHTML = "";

  datos.forEach(item => {
    // const descriptionText = item.description.trim() || "NO INFO";
    dataContainer.innerHTML += `
      <div class="tarjeta">
        <h2 class="titulo">${item.firstName}</h2>
        <div class="imagen-container">
          <img src="${item.thumbnail.path}.${item.thumbnail.extension}" class="imagen">
          <div class="opacidad">
            <div class="texto-tarjeta">NO INFO</div>
          </div>
        </div>
        
      </div>
    `;
  });
}

function addData4(datos) {
  const dataContainer = document.getElementById('data');
  dataContainer.innerHTML = "";

  datos.forEach(item => {
    const descriptionText = item.description.trim() || "NO INFO";
    dataContainer.innerHTML += `
      <div class="tarjeta">
        <h2 class="titulo">${item.title}</h2>
        <div class="imagen-container">
          <img src="${item.thumbnail.path}.${item.thumbnail.extension}" class="imagen">
          <div class="opacidad">
            <div class="texto-tarjeta">${descriptionText}</div>
          </div>
        </div>
        
      </div>
    `;
  });
}

function addData5(datos) {
  const dataContainer = document.getElementById('data');
  dataContainer.innerHTML = "";

  datos.forEach(item => {
    // const descriptionText = item.description.trim() || "NO INFO";
    dataContainer.innerHTML += `
      <div class="tarjeta">
        <h2 class="titulo">${item.title}</h2>
        <div class="imagen-container">
          <img src="${item.thumbnail.path}.${item.thumbnail.extension}" class="imagen">
          <div class="opacidad">
            <div class="texto-tarjeta">NO INFO</div>
          </div>
        </div>
        
      </div>
    `;
  });
}

function addData6(datos) {
  const dataContainer = document.getElementById('data');
  dataContainer.innerHTML = "";

  datos.forEach(item => {
    const descriptionText = item.description.trim() || "NO INFO";
    dataContainer.innerHTML += `
      <div class="tarjeta">
        <h2 class="titulo">${item.title}</h2>
        <div class="imagen-container">
          <img src="img/marvel-img.png" class="imagen">
          <div class="opacidad">
            <div class="texto-tarjeta">NO INFO</div>
          </div>
        </div>
        
      </div>
    `;
  });
}

let offsets = {
  characters: 0,
  comics: 0,
  creators: 0,
  events: 0,
  series: 0,
  stories: 0
}



const buttons = document.querySelectorAll('#characters, #comics, #creators, #events, #series, #stories');

function setActiveButton(activeButton) {
  
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  activeButton.classList.add('active');
}

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Botón para mostrar personajes
const buttonCharacters = document.getElementById('characters');
buttonCharacters.addEventListener('click', (e) => {
  e.preventDefault();
  setActiveButton(buttonCharacters);

  offsets.characters = 0;

  getData(character_url, offset)
  .then(response => {
    console.log(response.data.results);
    addData(response.data.results);
  });

  prevButton.addEventListener('click', () => {
    if (offset > 20) {
      offset -= 20;
    }
    getData(character_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData(response.data.results);
    });
  
  });
  
  nextButton.addEventListener('click', () => {
    offset += 20;
    getData(character_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData(response.data.results);
    });
  });

});



// Botón para mostrar cómics
const buttonComics = document.getElementById('comics');
buttonComics.addEventListener('click', (e) => {
  e.preventDefault();
  setActiveButton(buttonComics);

  offsets.comics = 0;

  getData(comics_url, offset)
  .then(response => {
    console.log(response.data.results);
    addData2(response.data.results);
  });

  prevButton.addEventListener('click', () => {
    if (offset > 20) {
      offset -= 20;
    }
    getData(comics_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData2(response.data.results);
    });
  
  });
  
  nextButton.addEventListener('click', () => {
    offset += 20;
    getData(comics_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData2(response.data.results);
    });
  });
});



// Botón para mostrar creadores
const buttonCreators = document.getElementById('creators');
buttonCreators.addEventListener('click', (e) => {
  e.preventDefault();
  setActiveButton(buttonCreators);

  offsets.creators = 0;
  
  getData(creadores_url, offset)
  .then(response => {
    console.log(response.data.results);
    addData3(response.data.results);
  });

  prevButton.addEventListener('click', () => {
    if (offset > 20) {
      offset -= 20;
    }
    getData(creadores_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData3(response.data.results);
    });
  
  });
  
  nextButton.addEventListener('click', () => {
    offset += 20;
    getData(creadores_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData3(response.data.results);
    });
  });

});



// Botón para mostrar eventos
const buttonEvents = document.getElementById('events');
buttonEvents.addEventListener('click', (e) => {
  e.preventDefault();
  setActiveButton(buttonEvents);
  offsets.events = 0;
  getData(eventos_url, offset)
  .then(response => {
    console.log(response.data.results);
    addData4(response.data.results);
  });

  prevButton.addEventListener('click', () => {
    if (offset > 20) {
      offset -= 20;
    }
    getData(eventos_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData4(response.data.results);
    });
  
  });
  
  nextButton.addEventListener('click', () => {
    offset += 20;
    getData(eventos_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData4(response.data.results);
    });
  });
  
  
});




// Botón para mostrar series
const buttonSeries = document.getElementById('series');
buttonSeries.addEventListener('click', (e) => {
  e.preventDefault();
  setActiveButton(buttonSeries);
  offsets.series = 0;
  getData(series_url, offset)
  .then(response => {
    console.log(response.data.results);
    addData5(response.data.results);
  });

  prevButton.addEventListener('click', () => {
    if (offset > 20) {
      offset -= 20;
    }
    getData(series_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData5(response.data.results);
    });
  
  });
  
  nextButton.addEventListener('click', () => {
    offset += 20;
    getData(series_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData5(response.data.results);
    });
  });
});




// Botón para mostrar historias
const buttonStories = document.getElementById('stories');
buttonStories.addEventListener('click', (e) => {
  e.preventDefault();
  setActiveButton(buttonStories);
  offsets.stories = 0;
  getData(historias_url, offset)
  .then(response => {
    console.log(response.data.results);
    addData6(response.data.results);
  });
  prevButton.addEventListener('click', () => {
    if (offset > 20) {
      offset -= 20;
    }
    getData(historias_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData6(response.data.results);
    });
  
  });
  
  nextButton.addEventListener('click', () => {
    offset += 20;
    getData(historias_url, offset)
    .then(response => {
      console.log(response.data.results);
      addData6(response.data.results);
    });
  });
});

window.addEventListener('load', () => {
  const logInMessage = document.getElementById('logInMessage');
   logInMessage.style.display = 'block';
   logInMessage.innerHTML = `
   <h1>:)</h1>
   <h1>¡Bienvenido!</h1>
   <p>Has iniciado sesión</p>
   `;
   setTimeout(() => {
     logInMessage.style.display = 'none';
   }, 3000);

  setActiveButton(buttonCharacters);

  getData(character_url, offset)
  .then(response => {
    console.log(response.data.results);
    addData(response.data.results);
  });
});

