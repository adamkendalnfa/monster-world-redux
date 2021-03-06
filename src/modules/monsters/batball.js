import Monster from './monsters';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 1;
const attackMultiplier = 3;
const defenseMultiplier = 1;
const spAttackMultiplier = 1;
const spDefenseMultiplier = 1;
const speedMultiplier = 3;
const baseExpYield = 1;

export default class extends Monster {
  constructor(lvl) {
    super(
      lvl,
      hpMultiplier,
      attackMultiplier,
      defenseMultiplier,
      spAttackMultiplier,
      spDefenseMultiplier,
      speedMultiplier,
      baseExpYield
    );

    this.abilities = [
      abilities.bite,
      abilities.fireBreath,
      abilities.stare,
      abilities.razorLeaf
    ];

    this.name = 'Batball';
    this.sprite = 'assets/images/monsters/BatBall1.png';
    this.type = elementalTypes.fire;
  }
}
