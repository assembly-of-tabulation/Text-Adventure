var locationImages = document.getElementById("location-img"); 
var contentText = document.getElementById("contentText"); 
var buttonContainer = document.getElementById('buttonContainer');
var nameInput = document.getElementById('nameInput');
var userName;

nameInput.onkeypress = (event) => {
  console.log(nameInput.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    userName =  nameInput.value;
    nameInput.parentNode.removeChild(nameInput)
    advanceTo(scenario.two)
  }
};

var changeText = (words) => {
  contentText.innerHTML = words.replace("Your name", userName);
};

var changeImage = (img) => {
  locationImages.style.backgroundImage = "url(" + img + ")";
};

var changeButtons = (buttonList) => {
  buttonContainer.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonContainer.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

var advanceTo = (scenario) => {
  changeImage(scenario.image)
  changeText(scenario.text)
  changeButtons(scenario.buttons)
};

advanceTo(scenario.one);