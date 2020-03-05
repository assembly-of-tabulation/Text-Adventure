# Text-Adventure

## Description

Text Adventure Game. 

## Project Set Up

- [ ] `fork & clone` this repository.
- [ ] `cd` into the forked copy of this repository.
- [ ] **RUN** `git checkout -b chosenName`
- [ ] **RUN** `yarn` or `npm init`
- [ ] **RUN** `yarn start` or `npm start` to fire up your React application. 


## Git Push to Master Branch

- [ ] **RUN** `git add .`
- [ ] **RUN** `git commit -m"The Commit"`
- [ ] **RUN** `git push origin chosenName`

## Minimum Viable Product

Finished project includes all of the following requirements:

- [ ] Main Menu // Landing Page
  - [x] Add basic HTML structure.
  - [x] Add basic CSS styling.
  - [ ] Add basic Javascript functionality. 
    - [ ] Text Input & commands
      - [ ] Display room image and text upon entering a new room
      - [ ] Enter keyword and `display/execute` relevant `text/image/event`
        - [x] text
        [ ] image 
        [ ] event

      - [x] BACK Button displays default text/image for current room
      - [ ] `CONTINUE` button displays/cycles through text entries for given `room/keyword/event`.

- [ ] Rooms data structure
  - [ ] 2-5 rooms to explore
    - [ ] outside/opening scene
      - [ ] text
      - [ ] items
      - [ ] encouter

    - [ ] Entry Way
      - [ ] text
      - [ ] items
      - [ ] encouter

    - [ ] Ballroom/MainCourt
      - [ ] text
      - [ ] items
      - [ ] encouter

    - [ ] BLANK ROOM
      - [ ] text
      - [ ] items
      - [ ] encouter

    - [ ] BLANK ROOM
      - [ ] text
      - [ ] items
      - [ ] encouter


- [ ] Encounter 
  - [ ] Add basic HTML structure.
  - [ ] Add basic CSS styling.
  - [ ] Add basic Javascript functionality. 
    - [ ] Add onchange for text input.
    - [ ] Add command list object for text input.
    - [ ] Wire up onchange to command list object.

  - [ ] Skills/Abilities
    - [ ] Final list of skills for MVP
    - [ ] 

  - [ ] Weapons data structure
    - [ ] name --(dagger, axe, etc)
    - [ ] type --(blade, blunt, polearm, etc)
    - [ ] hit bonus 
    - [ ] wound range --(dagger: 0-2)
    - [ ] wound target-to-hit --(dagger: 1 wound requires success+2)
