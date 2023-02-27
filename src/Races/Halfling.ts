import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;
  private static _increase = 0;

  static instanceOf(): void {
    this._increase += 1;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;

    Halfling.instanceOf();
  }

  public static createdRacesInstances() {
    return this._increase;
  }
}

export default Halfling;
