import { Counselor } from './counselor.ts';
import { Fighter } from './fighter.ts';
import { King } from './king.ts';
import { Squire } from './squire.ts';

export const createCharacters = () => {
  const charactersContainer = [];

  const characterJoffrey = new King('Joffrey', 'Baratheon', 20, 5);

  const characterJaime = new Fighter('Jamie', 'Lannister', 30, 'sword', 7);

  const characterDaenerys = new Fighter('Daenerys', 'Targaryen', 25, 'axe', 5);

  const characterTyrion = new Counselor(
    'Tyrion',
    'Lannister',
    35,
    characterDaenerys
  );

  const characterBronn = new Squire(
    'Bronn',
    'Lannister',
    40,
    characterJaime,
    10
  );

  charactersContainer.push(
    characterJoffrey,
    characterJaime,
    characterDaenerys,
    characterTyrion,
    characterBronn
  );

  return charactersContainer;
};
