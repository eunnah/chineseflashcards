## Panda Cards

### Background

Panda Chinese Flashcards provides a visually flashy and engaging way for Mandarin Chinese language learners to quickly and easily practice their knowledge and memorization of Chinese characters and associated pinyin pronunciation.

The user selects a level of difficulty and is presented with a series of cards that contain vocabulary words and their corresponding Chinese characters.

### Functionality & MVP

There are multiple settings for users to modify their experience with the flashcards. Users will be able to:

- [ ] Toggle cards between English and Chinese
- [ ] Show character stroke order animation
- [ ] Choose a level of difficulty

In addition, this project will include:
- [ ] An About modal describing the background and possible settings for the game
- [ ] A production Readme

### Wireframes

This app will be a single screen with a board, flashcard setting controls, and nav links to the Github and About modal.

### Architecture and Technologies

This project will be implemented with the following technologies:
- Vanilla JavaScript and `jquery` for overall structure and game logic
- Webpack to bundle and serve up the various scripts
- `view.js` for DOM manipulation and rendering

Other files involved in this project:
- `quiz.js`: this script will handle the logic for quiz mode, including allowing the user to select a level of difficulty

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all scripts outlined above.

**Day 2**: Build out `view.js` to create and render cards. Goals for the day:

- Create and render cards
- Seed data for cards
- Make each card clickable, toggling the state of the card on click

**Day 3**: Create the quiz logic backend.  Build out the various rule sets and hint functionality.  Incorporate the quiz logic into the rendering.  Goals for the day:

- Export a `Game` object with correct type and handling logic

**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for quiz mode, a timer, toggling between language direction, and any other useful features
- Add CSS styling; have nice looking controls and title

### Bonus features

- [ ] Have a quiz mode where the user can try to correctly answer multiple choice questions
- [ ] Keyboard controls
- [ ] Add playable audio for providing examples of pronunciation
- [ ] Add sound effects
- [ ] Allow further customization of quiz questions, such as allowing users to upload their own questions or cards
