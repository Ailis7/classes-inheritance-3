import Character from './Character';

export default class Undead extends Character {
  constructor() {
    super();
    this.attack = 25;
    this.defence = 25;
  }
}
