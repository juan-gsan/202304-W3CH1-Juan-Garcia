import { Character } from './character.ts';

export class Fighter extends Character {
  weapon;
  skills;

  constructor(
    name: string,
    house: string,
    age: number,
    weapon: string,
    skills: number
  ) {
    super(name, house, age);
    this.weapon = weapon;
    this.skills = skills;
    this.communicate = 'First hit, then ask';
  }
}
