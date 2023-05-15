import { Character } from './character.ts';

export class Squire extends Character {
  knight;
  pelotismo;

  constructor(
    name: string,
    house: string,
    age: number,
    knight: string,
    pelotismo: number
  ) {
    super(name, house, age);
    this.knight = knight;
    this.pelotismo = pelotismo;
    this.communicate = "I'm a loser";
  }
}
