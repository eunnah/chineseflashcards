const {flashcardContent} = require('./flashcardContent');

class View {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.bindEvents();
    this.randomIndex = 0;
    this.orderArray = [];
    this.render();
  }

  bindEvents() {
    this.$el.click( event => {
      const $card = $(event.currentTarget);
      $card.toggleClass('flipped');
    });
  }

  addIndexToOrderArray(number) {
    this.orderArray.push(number);
  }

  generateRandomNum() {
    const number = Math.floor((Math.random() * flashcardContent.length));
    return number;
  }

  render() {
    let index = this.generateRandomNum();
    const card = flashcardContent[index];
    const question = card.question;
    const pinyin = card.pinyin;

    let writer = new HanziWriter('target-div', card, {
    charDataLoader: // character loading closure - see section below for more info,
    showOutline: true, // show a faded outline of the character
    showCharacter: true, // whether or not to draw the completed character

    // positioning options

    width: 200, // width of the character, in px
    height: 200, // height of the character, in px
    padding: 20, // padding between edges of character and edges of the target div, in px

    // animation options

    strokeAnimationDuration: 300, // duration of each stroke in ms
    delayBetweenStrokes: 1000, // delay between drawing subsequent strokes in ms

    // colors

    strokeColor: '#555',
    highlightColor: '#AAF', // color used to highlight strokes as a hint during quizzing
    outlineColor: '#DDD',
    drawingColor: '#333', // color of the line drawn by the user during quizzing
  });



    const answer = `<p>${card.answer}<br /><br />${card.pinyin}</p><div class="image">`;

    $("div.front").html(question);
    $("div.back").html(answer);
  }
}

module.exports = View;
