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