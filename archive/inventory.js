 

var Inventory = {

	items: {

		potions: {
			"Health Potion": 2
		},

		scrolls: {}, 

		keys: {
			"Bronze Key": 1,
			"Master Key": 5
		}


	},

	equipment: {

		weapons: {
			"Short Sword": 1,
			"Throwing Knives": 3
		},

		armor: {
			"Leather Armor": 1
		},

		relics: {
			"Stone Jewel Ring": 1
		}

	},

	ready: {

		weapons: {
			"Short Sword": 1
		},

		armor: {
			"Leather Armor": 1
		},

		relics: {}


	}


}

localStorage.setItem('Inventory', JSON.stringify(Inventory));