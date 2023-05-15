export class Character {
  static tvShow = 'Game of Thrones';

  name;
  house;
  age;
  alive;
  communicate;

  constructor(name: string, house: string, age: number) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.alive = true;
    this.communicate = '';
  }

  endLife() {
    this.alive = false;
  }

  saySentence() {
    return this.communicate;
  }
}
