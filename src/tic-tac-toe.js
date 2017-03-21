var player;
var i = 0;
var oplayerField = [];
var xplayerField = [];
var restrictedValues = [];
 
class TicTacToe {
    constructor() {
        player = 'x';
        oplayerField.splice(0, oplayerField.length);
        i = 0;
    }

    getCurrentPlayerSymbol() {
        return player;
    }

    nextTurn(rowIndex, columnIndex) {      
        if (oplayerField.length > 0) {
            for (let j = 0; j <= oplayerField.length - 1; j++) {
                var previousPlace = oplayerField[j];
                var prevRowIndex = previousPlace.split('-')[0];
                var prevColumnIndex = previousPlace.split('-')[1];
                var prevSymbol = previousPlace.split('-')[2];
                if ((prevRowIndex + '' + prevColumnIndex) === (rowIndex + '' + columnIndex)) {                    
                    return;
                }
            }
        }
        player = this.getCurrentPlayerSymbol() === 'x' ? 'o' : 'x';
        oplayerField[i]=rowIndex + '-' + columnIndex + '-' + player;
        i++;        
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
