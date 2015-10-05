(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  // document.querySelector(SELECTOR)
  //   .addEventListener(TYPE, CALLBACK);
  // // AKA
  // jQuery(SELECTOR).on(TYPE, CALLBACK);
  // // Where CALLBACK is...
  // function CALLBACK (EVENT){
  //   // Do something with Models and Views...
  //   // Maybe do something with EVENT...?
  // }


  game.board(); // to draw my board


  // Controller for "rewind move"...
  jQuery('#rewind').on('click', function(event){
    console.log('rewind');
    game.reset();
    game.board();
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });
  // Controller for "next move"...
  jQuery('#next').on('click', function(event){
    console.log('next');
    game.next();
    game.board();
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });
 //controller for prev
  jQuery('#prev').on('click', function(event){
    console.log('prev');
    game.prev();
    game.board();
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  // jQuery(/* your "fast-forward" button */).on(/* wat? */, function(event){
  // jQuery('#forward').on('click', function(event){
  //   console.log('fast-forward');
  //   game.end();
  //   game.board();
  //   // TODO: Tell the Model -- `game` -- to advance to the last move...
  //   // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  // });

  // Controller for anything else...
  // jQuery(/* any other buttons out there? */).on(/* dunno */, function(event){
  //   // TODO: Fire tracer bullet!
  //   // TODO: Tell the Model -- `game` -- to do something it knows how to do...
  //   // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  // });

// Am I supposed to recognize this?
})(window || module && module.exports || this)
