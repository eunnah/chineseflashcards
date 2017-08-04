const {flashcardContent} = require('./flashcardContent');
const HanziWriter = require('hanzi-writer');
const hanziData = require('hanzi-writer');
let writer;

class View {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.bindEvents();
    this.randomIndex = 0;
    this.orderArray = [];
    this.render();
    this.front = true;
  }

  bindEvents() {
    this.$el.click( event => {
      const $card = $(event.currentTarget);
      $card.toggleClass('flipped');

      if (this.front) {
        this.front = false;
      } else {
        this.front = true;
      }
      writer.animateCharacter({
        onComplete: function() { console.log('finished animating!'); }
      });
    });

  $(".reanimate-button").on("click", () => {
    if (this.front) {
      this.$el.toggleClass('flipped');
      this.front = false;
    }
    writer.animateCharacter({
      onComplete: function() { console.log('finished animating!'); }
    });
  });

  $(".next-button").on("click", () => {
    if (!this.front) {
      this.$el.toggleClass('flipped');
      this.front = true;
    }
    this.render();
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
    const answer = `<p>${card.answer}<br /><br />${card.pinyin}</p><div class="image">`;

    console.log(HanziWriter);

    $("div.front").html(question);
    $("div.back").html(answer);

    writer = new HanziWriter('target', question, {
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
  }

}

module.exports = View;
