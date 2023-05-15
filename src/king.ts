import { Character } from './character.ts';

export class King extends Character {
  rulingYears;

  constructor(name: string, house: string, age: number, rulingYears: number) {
    super(name, house, age);
    this.rulingYears = rulingYears;
    this.communicate = "You're all gonna die";
  }
}
