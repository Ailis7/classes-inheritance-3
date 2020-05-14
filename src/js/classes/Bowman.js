import Character from './Character';

export default class Bowman extends Character {
  constructor() {
    super();
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
    this.health = 10;
  }
}
