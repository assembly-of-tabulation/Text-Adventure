 

// #####################     Dont Use hypotheticalPlayer - GLOBAL   ##################################

let hypotheticalPlayer = {
	level: 1,

	health: {
		health_total: 100,
		health_current: 100 },

	armorClass: 10,

	stats_character: [
		{str: 10 },
		{dex: 10 },
		{con: 14 },
		{cha: 126},
		{int: 8  },
		{wis: 14 }
	],

	menu_attack: [
		{
			shortSword: {
				bonus: 0,
				damageDie: 4}
		}, // End shortSword

		{
			longSpear: {
				bonus: 1,
				damageDie: 6}
		} // End longSpear
	], // End Array - stats__attack 

	methods: {
		// HIT ROLL: 		calculate hit rolls success
		// DAMAGE ROLL: 	calculate damage dealt to monster
		// TAKE DAMAGE:	reduce current health
		// HEAL: increase current health
		// ADD ATTACK METHOD: stats__attack --i.e. throwingKnives: {bonus: -1, damageDie: 3}
		
	} 

} // End Object - player

// ##############################################################################
// -------------------      DATA / SCENE OBJ     --------------------------------
// ##############################################################################



const scene_1__dialogue_1 = "So thou art totally wandering, lost in a crazy forest, right? So then, get this; you're creeping through some bushes and you find an old door!"

const scene_1__dialogue_2 = ".. Before you get too much time to think, a dark beastly figure comes out of nowhere and, like totally approaches the door. It doesn't see you though.."



const DataController = (function() {

	const scene = {

	}



})();

// ##############################################################################
// -------------------      Test Player Obj - GLOBAL    --------------------------------
// ##############################################################################

const TestPlayer = {
	level: 1,

	health: {
		health_total: 100,
		health_current: 100 },

	armorClass: 10,

	menu_attacks: {

		'fisticuffs': {
			bonus: 1,
			attack_die: 4 },

		'short_sword': {
			bonus: 0,
			attack_die: 6 },

		'throwing_knives': {
			bonus: 2,
			attack_die: 4 }

	}, // End menu_attacks Obj

	// inventory: {
	// 	torch: {
	// 		name: 'Torch',
	// 		count: 2 },

	// 	short_sword: {
	// 		name: 'Short Sword',
	// 		count: 1 },

	// 	throwing_knives: {
	// 		name: 'Throwing Knives',
	// 		count: 3 },

	// 	potion: {
	// 		name: 'Healing Potion',
	// 		count: 2 }


	// },

	// --METHODS FOR HANDLING PLAYER--


		// HIT ROLL: 		calculate hit rolls success
		hit_roll: function(bonus) {
			let mod;		//use in place of bonus
			bonus === undefined ? mod = 0 : mod = bonus; 
	      let attackRollResult = Math.floor(Math.random() * (20 - 1)) + 1 + mod;
	      console.log(attackRollResult);
		},

		// DAMAGE ROLL: 	calculate damage dealt to monster
		damage_roll: function(max, bonus) {
			let mod;		//use in place of bonus
			bonus === undefined ? mod = 0 : mod = bonus; 
	      let attackRollResult = Math.floor(Math.random() * (max - 1)) + 1 + mod;
	      console.log(attackRollResult);
		},

		// TAKE DAMAGE:	reduce current health
		health_reduce: function(value) {
			console.log(this);
		}

		// HEAL: increase current health
		// INCREMENT / DECREMENT - LEVEL
		// ADD / REMOVE - ATTACK METHOD: stats__attack --i.e. throwingKnives: {bonus: -1, damageDie: 3}
		// ADD / REMOVE - BONUS, MAX-HP, ARMOR-CLASS, ETC, ETC.

} // End TestPlayer Obj



// ##############################################################################
// -------------------      MONSTER CLASS - GLOBAL     --------------------------------
// ##############################################################################

function Monster(name, maxHealth, AC, attackDie, maxTreasure, exp) {

	this.monsterName = name;

	this.health_max = maxHealth;
	this.health_current = maxHealth;

	this.armor_class = AC;
	this.attack_die = attackDie;

	this.treasure_max = maxTreasure;
	this.exp = exp;

	//methods

	
	return {

		// HIT ROLL: 		calculate hit rolls success
		hit_roll: function(bonus) {
			let mod;		//use in place of bonus
			bonus === undefined ? mod = 0 : mod = bonus; 
	      let attackRollResult = Math.floor(Math.random() * (20 - 1)) + 1 + mod;
	      console.log(attackRollResult);
		},

		// DAMAGE ROLL: 	calculate damage dealt to monster
		attack_roll: function(max, bonus) {
			let mod;		//use in place of bonus
			bonus === undefined ? mod = 0 : mod = bonus; 
	      let attackRollResult = Math.floor(Math.random() * (max - 1)) + 1 + mod;
	      console.log(attackRollResult);
		},

		// TAKE DAMAGE:	reduce current health
		health_reduce: function(value) {
			console.log(this);
		},

		// ENCOUNTER:
		encounter: function() {
			console.log('this is an encounter.')
		}
		// HEAL: increase current health
		// ADD ATTACK METHOD: stats__attack --i.e. throwingKnives: {bonus: -1, damageDie: 3}
	}
}


	

	


// ##############################################################################
// -------------------    UI - CONTROLLER      --------------------------------
// ##############################################################################

const UIController = (function() {

	const test = "This is the UIController speaking to you from the Moon..";



	

	return {

		publicTest: function() {
			console.log(test);
		}
	}

	
})();



// ##############################################################################
// -------------------   MAIN   CONTROLLER    --------------------------------
// ##############################################################################

const Controller = (function(dataCtrl, UICtrl) {

	const setupEventListeners = function() {

		document.querySelector('#continue-text-btn').addEventListener('click', next_text);
		document.querySelector('#submit').addEventListener('click', function(e) {
			e.preventDefault();
			change_location_image();
			const commandInput = document.getElementById('command-input').value = '';
		})
	}


	const gremlin = new Monster("Gremlin", 30, 3, 3, 5, 2);
	// encounter(gremlin)
	
	const displayText = function(text) {
		let sceneText = document.querySelector('#content-text');
		sceneText.innerHTML = text;
	}

	displayText(scene_1__dialogue_1); 
	// change_location_image();


	const change_location_image = function(e) {
			
			const location_image = document.querySelector('#location-img');
			location_image.src = '../img/front-door-beast-appears.png';
	}

	const next_text = function(e) {
			displayText(scene_1__dialogue_2);
	}


	const fillMenuList = function () {

		// Get <ul> by id; items, equipment
		const menuItemsUL = document.getElementById('items');
		const menuEquipmentUL = document.getElementById('equipment');
		console.log(menuItemsUL);


		// Get Inventory.items.potions object
		const inventoryItemsPotionsList = Inventory.items.potions;
		console.log(Object.keys(inventoryItemsPotionsList));


		// Acts like jQuery's  empty() method
		while (menuItemsUL.firstChild) {
			menuItemsUL.removeChild(menuItemsUL.firstChild);
		}


		// iterating through object keys and values
		for (let [key, value] of Object.entries(inventoryItemsPotionsList)) {
			console.log( `${key} : ${value}` );

			// Create <li> element
			let element_li = document.createElement('li');

			// Create textNode
			let text = document.createTextNode(`${key}: ${value}`);

			// Add text to li element
			element_li.appendChild(text);

			// Append li to menu
			menuItemsUL.appendChild(element_li);
		}
	};

	fillMenuList();




	return {
		init: function() {
			setupEventListeners();
		},

		change_location_image: function() {

		}
	}

})(DataController, UIController);

Controller.init();

//make location image change with dialogue;
// organize _main and _eventlisteners;
