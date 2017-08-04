const {flashcardContentEasy} = require('./flashcardContentEasy');
const {flashcardContentMedium} = require('./flashcardContentMedium');
const {flashcardContentHard} = require('./flashcardContentHard');
const HanziWriter = require('hanzi-writer');
const hanziData = require('hanzi-writer');
let writer;

class View {

  constructor(game, $el) {
    this.flashcardContent = flashcardContentEasy.concat(flashcardContentMedium).concat(flashcardContentHard);
    this.game = game;
    this.$el = $el;
    this.bindEvents();
    this.randomIndex = 0;
    this.orderArray = [];
    this.render();
    this.front = true;
    this.easy = true;
    this.medium = true;
    this.hard = true;
    this.setLevels();
    this.updateCards = this.updateCards.bind(this);
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
        onComplete: function() { }
      });
    });

    $(".reanimate-button").on("click", () => {
      if (this.front) {
        this.$el.toggleClass('flipped');
        this.front = false;
      }
      writer.animateCharacter({
        onComplete: function() { }
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

  setLevels() {
    let that = this;
    $( "#easy" ).change(function() {
      let $input = $( this );

      if ($input.prop("checked")) {
        that.easy = true;
      } else {
        that.easy = false;
      }
      that.updateCards();
    });

    $( "#medium" ).change(function() {
      let $input = $( this );
      if ($input.prop("checked")) {
        that.medium = true;
      } else {
        that.medium = false;
      }
      that.updateCards();
    });

    $( "#hard" ).change(function() {
      let $input = $( this );
      if ($input.prop("checked")) {
        that.hard = true;
      } else {
        that.hard = false;
      }
      that.updateCards();
    });
  }

  updateCards() {
    this.flashcardContent = [];

    if (this.easy) {
      this.flashcardContent = this.flashcardContent.concat(flashcardContentEasy);
    }
    if (this.medium) {
      this.flashcardContent = this.flashcardContent.concat(flashcardContentMedium);
    }
    if (this.hard) {
      this.flashcardContent = this.flashcardContent.concat(flashcardContentHard);
    }

    if (this.flashcardContent.length === 0) {
        // Get the error modal
      let errorModal = document.getElementById('errorModal');
      // Get the <span> element that closes the modal
      let span = document.getElementsByClassName("errorClose")[0];

      errorModal.style.display = "block";

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          errorModal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target === errorModal) {
              errorModal.style.display = "none";
          }
      };
    }


  }

  addIndexToOrderArray(number) {
    this.orderArray.push(number);
  }

  generateRandomNum() {
    const number = Math.floor((Math.random() * this.flashcardContent.length));
    return number;
  }

  render() {
    let index = this.generateRandomNum();
    const card = this.flashcardContent[index];
    const question = card.question;
    const pinyin = card.pinyin;
    const answer = `<p>${card.answer}<br /><br />${card.pinyin}</p>`;

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
      delayBetweenStrokes: 300, // delay between drawing subsequent strokes in ms

      // colors

      strokeColor: '#555',
      highlightColor: '#AAF', // color used to highlight strokes as a hint during quizzing
      outlineColor: '#DDD',
      drawingColor: '#333', // color of the line drawn by the user during quizzing
  });
  }

}

module.exports = View;
