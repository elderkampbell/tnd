import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number;
  private static _increase = 0;

  static instanceOf(): void {
    this._increase += 1;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;

    Dwarf.instanceOf();
  }

  public static createdRacesInstances() {
    return this._increase;
  }
}

export default Dwarf;
