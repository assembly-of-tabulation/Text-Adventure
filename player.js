const player = [
  {
    totalHealth: [240]
  },
  {
    currentHealth: [240]
  },
  {
    attackRoll: function(min, max) {
      min = Math.floor(1);
      max = Math.floor(20);
      let attackRollResult = Math.floor(Math.random() * (max - min)) + min;
      return attackRollResult;
    },
  },
  {
    attackResult: [0]
  },
  {
    damageRoll: function(min, max) {
      min = Math.ceil(1);
      max = Math.floor(12);
      let damageRollResult = Math.floor(Math.random() * (max - min)) + min;
      return damageRollResult;
    },
  },
  {
    damageResult: [0]
  }, 
  {
    defense: [10]
  },
  {
    dead: false
  }
]