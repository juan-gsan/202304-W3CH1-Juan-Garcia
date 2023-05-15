import { Counselor } from './counselor.ts';
import { Fighter } from './fighter.ts';
import { King } from './king.ts';
import { Squire } from './squire.ts';

export const createCharacter = () => {
  const charactersContainer = [
    new King('Joffrey', 'Baratheon', 20, 5),
    new Fighter('Jamie', 'Lannister', 30, 'sword', 7),
    new Fighter('Daenerys', 'Targaryen', 25, 'axe', 5),
    new Counselor('Tyrion', 'Lannister', 35, 'Daenerys'),
    new Squire('Bronn', 'Lannister', 40, 'Jamie', 10),
  ];

  return charactersContainer;
};
