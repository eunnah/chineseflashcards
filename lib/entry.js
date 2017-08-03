const View = require('./view');
const Game = require('./game');

$( () => {
  const rootEl = $('.card');
  const game = new Game();
  new View(game, rootEl);
});
