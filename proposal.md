## Panda Cards

### Background

Panda Chinese Flashcards provides a visually flashy and engaging way for Mandarin Chinese language learners to quickly and easily practice their knowledge and memorization of Chinese characters and their associated pinyin pronunciation.

The user selects a level of difficulty and is presented with a series of cards that contain vocabulary words and their corresponding Chinese characters.

### Functionality & MVP

There are multiple settings for users to modify their experience with the flashcards. Users will be able to:

- [ ] Toggle cards between English and Chinese
- [ ] Request hints
- [ ] Show character stroke order animation
- [ ] Have a quiz mode where the user can try to correctly answer multiple choice questions
- [ ] Keyboard controls
- [ ] Choose a level of difficulty

In addition, this project will include:
- [ ] An About modal describing the background and possible settings for the game
- [ ] A production Readme

### Wireframes

This app will be a single screen with a board, flashcard setting controls, and nav links to the Github and About modal.

### Architecture and Technologies

This project will be implemented with the following technologies:
- Vanilla JavaScript and `jquery` for overall structure and game logic
- Babel
- Webpack to bundle and serve up the various scripts
- `view.js` with `HTML5 Canvas` for DOM manipulation and rendering

Other files involved in this project:
- `board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.
- `card.js`: this script will handle the logic for user interaction with a single card, including giving hints and containing its own state (hidden or flipped)
- `quiz.js`: this script will handle the logic for quiz mode, including allowing the user to select a level of difficulty

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `Easel.js` API.  First, build out the `Card` object to connect to the `Board` object.  Then, use `board.js` to create and render cards. Goals for the day:

- Complete the `card.js` module (constructor, update functions)
- Render cards to the `Canvas` using `Easel.js`
- Make each card clickable, toggling the state of the card on click

**Day 3**: Create the quiz logic backend.  Build out the various rule sets and hint functionality.  Incorporate the quiz logic into the `Board.js` rendering.  Goals for the day:

- Export a `Game` object with correct type and handling logic

**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for quiz mode, a timer, toggling between language direction, and any other useful features
- Have a styled `Canvas`, nice looking controls and title

### Bonus features

- [ ] Add playable audio for providing examples of pronunciation
- [ ] Add sound effects
- [ ] Allow further customization of quiz questions, such as allowing users to upload their own questions or cards
