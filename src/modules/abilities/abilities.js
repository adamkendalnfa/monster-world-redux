import checkTypeEffectiveness from './check-type-effectiveness';
import dealDamage from './deal-damage';
import modifyAbility from './modify-ability';
import elementalTypes from './../elemental-types';

var allAbilities = {
	useAbility: function (controller, attacker, ability, defender) {

		// if (ability.category === 'status' || ability.category === 'special') {
		// 	modifyAbility(ability, attacker, defender);
		// }
		// console.log(controller, attacker, ability, defender)

		let damageModifier = checkTypeEffectiveness(ability, defender);
		dealDamage.apply(this, [controller, attacker, ability, damageModifier, defender])
		return damageModifier
	},
};

class Abilities {
	constructor(name, accuracy, category, power, type) {
		this.name = name;
		this.accuracy = accuracy;
		this.category = category;
		this.power = power;
		this.type = type;
	}
}

class StatusAbilities extends Abilities {
	constructor(name, accuracy, category, power, type, attribute, effect, modifier, targetSelf) {
		super(name, accuracy, category, power, type);
		this.attribute = attribute;
		this.effect = effect;
		this.modifier = modifier;
		this.targetSelf = targetSelf;
	}
}

// elementalTypes: normal, fire, water, grass, etc..
// Categories: physical, special, status
// Power: range from 10-???,  status moves have 0 power
// Accuracy: Range from 0.5-1
// Effect: A description of the special effects on some abilities
// Ability type effectiveness data
// allAbilities.this = new Abilities('name', accuracy, 'category', power, 'type');

allAbilities.bite = new Abilities('Bite', 0.9, 'physical', 45, elementalTypes.normal);
allAbilities.scratch = new Abilities('Scratch', 1, 'physical', 40, elementalTypes.normal);
allAbilities.growl = new StatusAbilities(
	'Growl',
	1,
	'status',
	0,
	elementalTypes.normal,
	'attack',
	'Decrease opponent attack damage',
	0.8,
	false
	);
allAbilities.stare = new StatusAbilities(
	'Stare',
	1,
	'status',
	0,
	elementalTypes.normal,
	'defense',
	'Decrease opponent defense',
	0.9,
	false
	);
allAbilities.fireBreath = new Abilities('Fire Breath', 0.9, 'special', 50, elementalTypes.fire);

    // attribute: 'condition',
    // conditionApplied: 'burn',
    // effect: 'Chance of burn',
    // modifier: 0.1,
    // targetSelf: false,
allAbilities.fireBlast = new Abilities('Fire Blast', 0.9, 'special', 80, elementalTypes.fire);

    // attribute: 'condition',
    // conditionApplied: 'burn',
    // effect: 'Chance of burn',
    // modifier: 0.1,
    // targetSelf: false,
allAbilities.razorLeaf = new Abilities('Razor Leaf', 0.9, 'special', 60, elementalTypes.grass);

    // attribute: 'defense',
    // conditionApplied: 'burn',
    // effect: 'Reduces defending monster defense',
    // modifier: 0.9,
    // targetSelf: false,
allAbilities.waterBlast = new Abilities('Water Blast', 0.9, 'special', 50, elementalTypes.water);

    // attribute: 'attack',
    // category: 'special',
    // effect: 'Reduces defending monsters attack',
    // modifier: 0.9,
    // targetSelf: false,

export { allAbilities as default };