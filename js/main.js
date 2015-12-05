(function(globals){
// Don't worry if that seems a little funky...
// alert('test');
  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */


   // My function to get the pieces from my html table
   function placeAPiece(x,y,piece) {
                                            //element.setAttribute(attributename,attributevalue)
   document.getElementById("chessboard").rows[x].cells[y].setAttribute("class", piece);
  //  jQuery('#chessboard').find('tr').eq(x).find('td').eq(y).addClass(piece);
   }
//http://stackoverflow.com/questions/3065342/how-do-i-iterate-through-table-rows-and-cells-in-javascript


  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
    * @see applyMove
   * @var {Array} of...?
   */
   var moves =
   [               // the first nine moves
     [ [6,3],[4,3] ],
     [ [0,6],[2,5] ],
     [ [6,2],[4,2] ],
     [ [1,4],[2,4] ],
     [ [6,6],[5,6] ],
     [ [1,3],[3,3] ],
     [ [7,5],[6,6] ],
     [ [0,5],[1,4] ],
     [ [7,6],[5,5] ],
   ] // END moves

  // var current; TODO: do we need this?

  // You don't need to understand `globals` yet...
  var game = globals.game = {
    /*
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
  board: function(){
    for (x=0; x < 8; x++){ // iterate through
      for (y=0; y < 8; y++){
        var mypiece = board[x][y];
        placeAPiece(x+1,y+1,mypiece);//take every position in the array and
    }}                              // add whatever I css class I attached to it on the board

      console.log("CurrentMove: " + currentMove);
      console.log("board in main")
      return board.map(function(row){
        return row.slice();
      });

    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();
      currentMove = 0;
      return this;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      console.log ("next from main.js");
      fromValue = moves[currentMove][0]; //the zero indicates FROM
      toValue = moves[currentMove][1]; // the one indicates TO
      // myPiece - the zero indicates the x axis of the game board. the 1 indicates the y axis
      myPiece = board[fromValue[0]][fromValue[1]];
      board[toValue[0]][toValue[1]] = myPiece;
      board[fromValue[0]][fromValue[1]] = null;
      currentMove++;                    //this is stepping through each move from
      return this;                      // my moves and applying it
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      if (currentMove===0) {
        return this;
      }
      console.log ("prev from main.js");
      currentMove--;
      fromValue = moves[currentMove][0]; //the zero indicates FROM
      toValue = moves[currentMove][1]; // the one indicates TO
      // the zero indicates the x axis of the game board. the 1 indicates the y axis
      myPiece = board[toValue[0]][toValue[1]];
      board[fromValue[0]][fromValue[1]] = myPiece;
      board[toValue[0]][toValue[1]] = null;
      //currentMove--;
      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      // Write some code here...
      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    tracer: function(){
      var bullet = '';

      for ( rank = 0; rank < board.length; rank++ ){
      bullet += '|';
      for ( var file = 0; file < board[rank].length; file++ ){
        bullet += (board[rank][file] || ' ') + '|';
      }
      bullet += '\n';
    }      return bullet;

  },

    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
   applyMove: function(from, to){
      board[4][3] = board[6][3]
    } // END applyMove
  }; // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    currentMove = 0;
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
