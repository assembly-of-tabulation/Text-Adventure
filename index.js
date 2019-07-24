let locationImages = document.getElementById("location-img"); 
let contentText = document.getElementById("contentText"); 
let buttonContainer = document.getElementById('buttonContainer');
let nameInput = document.getElementById('nameInput');
let userName;

nameInput.onkeypress = (event) => {
  console.log(nameInput.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    userName =  nameInput.value;
    nameInput.parentNode.removeChild(nameInput)
    advanceTo(scenario.two)
  }
};

let changeText = (words) => {
  contentText.innerHTML = words.replace("your name", userName);
};

let changeImage = (img) => {
  locationImages.style.backgroundImage = "url(" + img + ")";
};

let changeButtons = (buttonList) => {
  buttonContainer.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonContainer.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

let advanceTo = (scenario) => {
  changeImage(scenario.image)
  changeText(scenario.text)
  changeButtons(scenario.buttons)
};

advanceTo(scenario.one);

function playerAttack() {

  player[3].attackResult.push(player[2].attackRoll());
  player[3].attackResult.shift();
  console.log(`Attack Roll Result: ${player[3].attackResult}`);
  if (enemy[1].currentHealth >= 0) {
    if (player[3].attackResult >= enemy[6].defense[0]) {
      console.log("Attack Succeeded!")
      player[5].damageResult.push(+ player[4].damageRoll());
      player[5].damageResult.shift();

      enemy[1].currentHealth.push(enemy[1].currentHealth[0] - player[5].damageResult[0]);
      enemy[1].currentHealth.shift();
      
      console.log(`Damage Roll Result: ${player[5].damageResult}`);
      console.log(`Current Health: ${enemy[1].currentHealth}`);

      let reduceHealthBar = enemy[1].currentHealth / 240 * 100;
      console.log(reduceHealthBar);
      if (enemy[1].currentHealth > 0) {
        return document.querySelector(".healthBar").style.width = `${reduceHealthBar}%`;
      } else {
        enemy[1].currentHealth = 0;
        enemy[7].dead = true;
        console.log(enemy[1].currentHealth);
        console.log(enemy[7]);
        return document.querySelector(".healthBar").style.display = "none";
      }
    } else {
        console.log("Attack failed!")
    }
  } else {
    enemy[1].currentHealth = 0;
    enemy[7].dead = true;
    console.log(enemy[1].currentHealth);
    console.log(enemy[7]);
    return document.querySelector(".healthBar").style.display = "none";
  }
}