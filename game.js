

/*
// Player

// Stats
------------

healthy
staggered
wounded
critical
dead

skills:
Lock-picking
Asian Persuasion

weapon damage
armor defense
evasion(dex)

spell/magic

item

speak/communicate?

====================================
888888888888888888888888888888888888
====================================

// Encounter

health

weapon damage
armor defense
evasion(dex)

spell/magic

item

speak/communicate?


*/


// let Weapons = {

// 	dagger: {
// 		damageDie: 4,
// 		bonus: 0,	
// 	},

// 	shortSword: {
// 		damageDie: 6,
// 		bonus: 0,	
// 	},

// 	spear: {
// 		damageDie: 6,
// 		bonus: 1,	
// 	},

// }

// let Armor = {

// 	clothGear: {
// 		damageResist: 0,
// 		dexBonus: 2,
// 	},

// 	leatherGear: {
// 		damageResist: 2,
// 		dexBonus: 2,
// 	},

// 	studdedGear: {
// 		damageResist: 4,
// 		dexBonus: 0,
// 	}

// }



// let player = {

// 	health: {
// 		max: 10,
// 		current: 10
// 	},

// 	baseDexterity: 9,


// }





// DATA CONTROLLER
// =======================
let ModelController = (function() {

	//let RoomState = "outside"; // gameStates.room    gameStates.textKey

	let gameState = {
		room: "outside",
		textKey: "outside",
	};

	let Rooms = {

		"outside": {

			text: `After getting lost in the <span class="key-word">thiccness</span> of the forest, you emerge from the bushes to find a massive fortress you never knew existed. There is a <span class="key-word">door</span> before you and an unlit <span class="key-word">torch</span> hangs on the massive wall nearby.`,

			keysList: ['torch', 'door', 'thiccness', 'enter',],

			allKeys: {

				torch: {

					text: [`You reach for the torch and grab the sominabitch!`, `The torch is in your hands, now. Will you light it?`],
				},

				thiccness: {

					text: `Thicc thighs save lives.. Thicc trees hide bees..`,
				},

				door: {

					text: `The door is old and worn, and has a rusty iron knocker with a keyhole above it. The door is slightly ajar, whatever entered was in a hurry and didn't shut the door close. Perhaps on purpose.. Either way, you can <span class="key-word">enter</span> the fortress.`,
				},

				enter: {

					text: `You enter.`,
					enterRoom: function() { console.log('You entered a new room..') },
				}

			}, // End of allKeys

		}, // End of outside


		"entryWay": {

			text: ``,

			keysList: [],

			allKeys: {}

		}, // End of entryWay
		
	} // End of Rooms

	// TESTING LOCAL STORAGE
	//////////////////////////////////////////////////////////////
	// Test Object for testing the use of localStorage.
	let ItemDictionary = {
		potion: {
			removeWoundCount: 2,
			immediateRemoval: 1,
			delay: 5
		},
		blizzardScroll: {
			text: 'A flash of blue light is emitted from the scroll and suddenly an icy cold wind blows massive flakes of snow.',
			woundRange: [0,1,2],
			effect: function() { console.log("Creatures targeted by the spell are frozen and cannot move for 10 actions"); },
			woundSuccess: {0: '-', 1: 3, 2: 7},
		}
	}

	// Testing storing data in the localStorage
	localStorage.game = JSON.stringify(ItemDictionary);
	//////////////////////////////////////////////////////////////


	return {

		testModel: function() {
			console.log(Rooms);
		},

		getRoomState: function() {
			return gameState.room;
			// return RoomState;
		},

		setRoomState: function(newRoomState) {
			gameState.room = newRoomState
			//RoomState = newRoomState;
		},

		getRooms: function() {
			return Rooms;
		},

		getCommandContent: function() {
			return {

				roomData: Rooms,
				currentRoom: gameState.room,
			}
		},




	}


})();




// UI CONTROLLER
// ===========================
let UIController = (function() {

	const DOMstrings = {
		roomImage: '#room-image',
		textBox: '#text-box',
		continueBtn: '#continue-text-btn',
		backBtn: '#back-text-btn',
		commandForm: '#command-form',
		commandInput: '#command-input',

	};

	


	return {

		getCommand: function() {
			return {
				input: document.querySelector(DOMstrings.commandInput).value,
			}
		},

		getRoomContent: function() {

			return {
				textField: document.querySelector(DOMstrings.textBox),
				image: document.querySelector(DOMstrings.roomImage),
			}

		},

		getDOMstrings: function() {
			return DOMstrings;
		},

		setText: function(newText) {
				document.querySelector(DOMstrings.textBox).innerHTML = newText;
		},


	}


})();




// MAIN CONTROLLER
// =======================
let Controller = (function(UICtrl, modelCtrl) {

	let currentRoom = modelCtrl.getRoomState();
	let allRooms = modelCtrl.getRooms();

	function setupEventListeners() {
		let DOM = UICtrl.getDOMstrings();

		// Submit command/keyword
		document.querySelector(DOM.commandForm).addEventListener('submit', function(e) {
			let command = UICtrl.getCommand();

			e.preventDefault();

			enterCommand(command.input);
		});

		// Back Button 
		document.querySelector(DOM.backBtn).addEventListener('click', function(e){
			let roomContent, currentRoom, roomText;

			roomContent = UICtrl.getRoomContent();
			currentRoom = modelCtrl.getRoomState();
			roomText = allRooms[currentRoom].text;

			roomContent.textField.innerHTML = roomText;
		})

		// Continue Button
		document.querySelector(DOM.continueBtn).addEventListener('click', function(e){
			let roomContent, currentRoom, roomText;

			roomContent = UICtrl.getRoomContent();
			currentRoom = modelCtrl.getRoomState();
			roomText = allRooms[currentRoom].text;

			roomContent.textField.innerHTML = roomText;
		})



	};


	function enterRoom(newRoom) {
		let roomContent, roomText, roomImageSrc;

		roomContent = UICtrl.getRoomContent();

		roomText = allRooms[newRoom].text;

		// Display Room text to UI
		roomContent.textField.innerHTML = roomText;

		// Display Room Image to UI

	};


	function enterCommand(keyWord) {         		// allRooms, currentRoom
		let keyWordList, keyFound, roomContent;

		console.log('Command was entered...')

		commandContent = modelCtrl.getCommandContent();

		keyWordList = commandContent.roomData[commandContent.currentRoom].keysList;

		keyFound = keyWordList.includes(keyWord);

		if (keyFound) {
			var key = commandContent.roomData[commandContent.currentRoom].allKeys[keyWord];
			if (typeof(key.text) === "object") {
				UICtrl.setText(key.text[0]);
			}else { UICtrl.setText(key.text);}
		}


	};

	return {

		init: function() {
			console.log("Application has started..");
			setupEventListeners();
			enterRoom(currentRoom);
		}
	}

})(UIController, ModelController);

Controller.init();