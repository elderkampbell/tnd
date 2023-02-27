import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energy: EnergyType;
  private static _increase = 0;

  static instanceOf(): void {
    this._increase += 1;
  }

  constructor(name: string) {
    super(name);

    this._energy = 'mana';

    Necromancer.instanceOf();
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  public static createdArchetypeInstances() {
    return this._increase;
  }
}

export default Necromancer;
