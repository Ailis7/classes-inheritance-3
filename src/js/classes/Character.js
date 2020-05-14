export default class Character {
  set powerMode(state) {
    if (this.powerModeCount === undefined) {
      this.powerModeCount = 3;
    } else {
      throw new Error('Power Mode уже израсходован или включен');
    }
  }

  get powerMode() {
    return this.powerModeCount;
  }

  get characteristics() {
    if (this.powerModeCount > 0) {
      this.powerModeCount -= 1;
      return { attack: this.attack * 2, defence: this.defence * 2, health: this.health * 2 };
    }
    return 'Power Mode уже израсходован или не включен';
  }
}
