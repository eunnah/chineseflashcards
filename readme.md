## Panda Cards

### Background

Panda Chinese Flashcards provides a visually flashy and engaging way for Mandarin Chinese language learners to quickly and easily practice their knowledge and memorization of simplified Chinese characters and associated pinyin pronunciation.

The user has the choice to select a level of difficulty and is presented with a series of cards that contain vocabulary words and their corresponding Chinese characters.

### Features

There are multiple settings for users to modify their experience with the flashcards. Users can:

- [ ] Toggle cards between English and Chinese
- [ ] View and replay character stroke order animation
- [ ] Choose a level of difficulty

![gameplay screenshot](https://raw.githubusercontent.com/eunnah/chineseflashcards/master/images/screenshot1.png)

- A simple modal provides instructions on how to navigate the flashcards.

### Architecture and Technologies

This project is implemented with the following technologies:
- Vanilla JavaScript and `jquery` for overall structure and game logic
- Webpack to bundle and serve up the various scripts
- `view.js` for DOM manipulation and rendering

Other files that will eventually be added to this project:
- `quiz.js`: this script will handle the logic for quiz mode, including allowing the user to select a level of difficulty and get scored on a series of randomized questions.

### Bonus features

- [ ] Add playable audio for providing examples of pronunciation
- [ ] Add sound effects
- [ ] Keyboard controls
- [ ] Quiz mode
- [ ] Allow further customization of quiz questions, such as allowing users to upload their own questions or cards
