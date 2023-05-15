import './style.css';
import { createCharacters } from './createCharacters.ts';

const charactersContainer = createCharacters();
const template = document.querySelector('.characters-list')!;

let cardJoffrey = `<li class="character col">
        <div class="card character__card">
          <img src="img/joffrey.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[0].name} ${charactersContainer[0].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[0].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: ${charactersContainer[0].rulingYears}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="👑"></i>
        </div>
      </li>`;

let cardJaime = `<li class="character col">
        <div class="card character__card">
          <img src="img/jaime.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[1].name} ${charactersContainer[1].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[1].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Arma que usa: ${charactersContainer[1].weapon}</li>
                <li>Destreza: ${charactersContainer[1].skills}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class=" 🗡"></i>
        </div>
      </li>`;

let cardDaenerys = `<li class="character col">
        <div class="card character__card">
          <img src="img/daenerys.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[2].name} ${charactersContainer[2].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[2].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Arma que usa: ${charactersContainer[2].weapon}</li>
                <li>Destreza: ${charactersContainer[2].skills}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class=" 🗡"></i>
        </div>
      </li>`;

let cardTyrion = `<li class="character col">
        <div class="card character__card">
          <img src="img/tyrion.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[3].name} ${charactersContainer[3].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[3].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Personaje al que asesora: ${charactersContainer[3].characterAdvised}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="🎓"></i>
        </div>
      </li>`;

let cardBronn = `<li class="character col">
        <div class="card character__card">
          <img src="img/bronn.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[4].name} ${charactersContainer[4].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[4].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Personaje al que sirve: ${charactersContainer[4].knight}</li>
                <li>Pelotismo: ${charactersContainer[4].pelotismo}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class=" 🛡"></i>
        </div>
      </li>`;

template.innerHTML =
  cardJoffrey + cardJaime + cardDaenerys + cardTyrion + cardBronn;

if (!charactersContainer[0].alive) {
  cardJoffrey = `<li class="character col">
        <div class="card character__card">
          <img src="img/joffrey.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[0].name} ${charactersContainer[0].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[0].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: ${charactersContainer[0].rulingYears}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="👑"></i>
        </div>
      </li>`;
}

if (!charactersContainer[1].alive) {
  cardJaime = `<li class="character col">
        <div class="card character__card">
          <img src="img/jaime.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[1].name} ${charactersContainer[1].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[1].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Arma que usa: ${charactersContainer[1].weapon}</li>
                <li>Destreza: ${charactersContainer[1].skills}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class=" 🗡"></i>
        </div>
      </li>`;
}

if (!charactersContainer[2].alive) {
  cardDaenerys = `<li class="character col">
        <div class="card character__card">
          <img src="img/daenerys.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[2].name} ${charactersContainer[2].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[2].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Arma que usa: ${charactersContainer[2].weapon}</li>
                <li>Destreza: ${charactersContainer[2].skills}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class=" 🗡"></i>
        </div>
      </li>`;
}

if (!charactersContainer[3].alive) {
  cardTyrion = `<li class="character col">
        <div class="card character__card">
          <img src="img/tyrion.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[3].name} ${charactersContainer[3].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[3].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Personaje al que asesora: ${charactersContainer[3].characterAdvised}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="🎓"></i>
        </div>
      </li>`;
}

if (!charactersContainer[4].alive) {
  cardBronn = `<li class="character col">
        <div class="card character__card">
          <img src="img/bronn.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[4].name} ${charactersContainer[4].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[4].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Personaje al que sirve: ${charactersContainer[4].knight}</li>
                <li>Pelotismo: ${charactersContainer[4].pelotismo}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class=" 🛡"></i>
        </div>
      </li>`;
}

const speakButton = document.querySelector('.character__action')!;

speakButton.addEventListener('click', () => {
  const appContainer = document.querySelector('.app')!;
  appContainer.innerHTML =
    template +
    `<div class="comunications">
    <p class="comunications__text display-1">${charactersContainer[0].communicate}</p>
    <img class="comunications__picture" src="img/joffrey.jpg" alt="Joffrey Baratheon" />
  </div>`;
});
