import './style.css';
import { createCharacters } from './createCharacters.ts';

const charactersContainer = createCharacters();
const template = document.querySelector('.characters-list')!;

const cardJoffrey = `<li class="character col">
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
          <i class="emoji"></i>
        </div>
      </li>`;

const cardJaime = `<li class="character col">
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
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;

const cardDaenerys = `<li class="character col">
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
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;

const cardTyrion = `<li class="character col">
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
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;

const cardBronn = `<li class="character col">
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
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;

template.innerHTML =
  cardJoffrey + cardJaime + cardDaenerys + cardTyrion + cardBronn;
