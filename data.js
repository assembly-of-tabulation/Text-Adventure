var scenario = {
  one: {
    image: "placeholder-img.png",
    text: "Placeholder string - Scenario Two: Intro",
  },
  two: {
    image: "placeholder-img.png",
    text: "Placeholder string - Scenario Two",
    buttons: [
      ["Option one", "advanceTo(scenario.three)"], 
      ["Option two", "advanceTo(scenario.four)"],
      ["Option three", "advanceTo(scenario.five)"]
    ]
  },
  three: {
    image: "placeholder-img.png",
    text: "Placeholder string - Scenario Three",
    buttons: [
      ["Option one", "advanceTo(scenario.four)"]
    ]
  },
    four: {
    image: "placeholder-img.png",
    text: "Placeholder string - Scenario Four",
    buttons: [
      ["Option one", "advanceTo(scenario.five)"],
      ["Option two", "advanceTo(scenario.five)"]
    ]
  },
    five: {
    image: "placeholder-img.png",
    text: "Placeholder string - Scenario Five: End",
  },
};