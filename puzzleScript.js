// Here I made a count variable for the number of moves and a timer.
let NumMoves = 0;
let TimeSet;



function swapTiles(cell1, cell2) {
	var temp = document.getElementById(cell1).className;
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = temp;
}

function shuffle() {
	//Use nested loops to access each cell of the 4x4 grid
	for(var row=1; row <=4; row++) //foreach row of the 4x4 grid
	{
		//foreach column in this row
		for (var column=1; column <=4; column++) {
			//pick a random row from 1 to 4
			var row2=Math.floor(Math.random()*4+1);
			
			//pick a random column from 1 to 4
			var column2=Math.floor(Math.random()*4+1);
			
			swapTiles("cell"+row+column, "cell"+row2+column2); //swap the look & feel of both cells
		}
	}
    NumMoves = 0;
    document.getElementById("countMoves").innerText = NumMoves;
    TimeSet = new Date();
    document.getElementById("time").innerText = 0;
    setInterval(TimeCounter, 1000);
}

function TimeCounter() {
    let timeNow = new Date();
    let time = Math.floor((timeNow - TimeSet) / 1000);
    document.getElementById("time").innerText = time;
}

function simpleGame() {
    for(var row=1; row <=4; row++) {
        for (var column=1; column <=4; column++) {
            var rightTile = "tile" + ((row - 1) * 4 + column);
            document.getElementById("cell" + row + column).className = rightTile;
        }

    }
    swapTiles("cell44", "cell43");
    NumMoves = 0;
    document.getElementById("countMoves").innerText = NumMoves;
    TimeSet = new Date();
    document.getElementById("time").innerText = 0;
    setInterval(TimeCounter, 1000);

    document.getElementById("cell44").onclick = function() {
        swapTiles("cell44", "cell43");
        NumMoves++;
        document.getElementById("countMoves").innerText = NumMoves;
        setTimeout(() => {
            window.alert("Congratulations!!\nAmount spent on current game in seconds: " + Math.floor((new Date() - TimeSet) / 1000) +"\nNumber of moves so far: " + NumMoves+"\nWould you like to play again?")
            window.location.reload(); 
        }, 1000);
        
    };


}

function clickTile(row, column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;

    if(tile!="tile16") {
        //check if the white tile is on the right
        if(column<4) {
            if(document.getElementById("cell"+row+(column+1)).className=="tile16") {
                swapTiles("cell"+row+column, "cell"+row+(column+1));
                NumMoves++;
                document.getElementById("countMoves").innerText = NumMoves;
                setTimeout(() => {Win()}, 1000); //async global function to delay alert window execution for 1 second
                return;
            }
        }
        //check if the white tile is on the left
        if(column>1) {
            if(document.getElementById("cell"+row+(column-1)).className=="tile16") {
                swapTiles("cell"+row+column,"cell"+row+(column-1));
                NumMoves++;
                document.getElementById("countMoves").innerText = NumMoves;
                setTimeout(() => {Win()}, 1000);
                return;
            }
        }

        //check if the white tile is above
        if(row > 1) {
            if(document.getElementById("cell"+(row-1)+column).className=="tile16") {
                swapTiles("cell"+row+column, "cell"+(row-1)+column);
                NumMoves++;
                document.getElementById("countMoves").innerText = NumMoves;
                setTimeout(() => {Win()}, 1000);
                return;
            }
        }

        //check if the white tile is below
        if(row < 4) {
            if(document.getElementById("cell"+(row+1)+column).className=="tile16") {
                swapTiles("cell"+row+column, "cell"+(row+1)+column);
                NumMoves++;
                document.getElementById("countMoves").innerText = NumMoves;
                setTimeout(() => {Win()}, 1000);
                return;
            }
        }


    }
}



function Win() {
    
    //Write some code logic here that determines if the tiles are all in order, hence the puzzle is won. If so, alert to the user that they won.
    if(document.getElementById("cell11").className=="tile1" 
    &&
    document.getElementById("cell12").className=="tile2"
    &&
    document.getElementById("cell13").className=="tile3"
    &&
    document.getElementById("cell14").className=="tile4"
    &&
    document.getElementById("cell21").className=="tile5"
    &&
    document.getElementById("cell22").className=="tile6"
    &&
    document.getElementById("cell23").className=="tile7"
    &&
    document.getElementById("cell24").className=="tile8"
    &&
    document.getElementById("cell31").className=="tile9"
    &&
    document.getElementById("cell32").className=="tile10"
    &&
    document.getElementById("cell33").className=="tile11"
    &&
    document.getElementById("cell34").className=="tile12"
    &&
    document.getElementById("cell41").className=="tile13"
    &&
    document.getElementById("cell42").className=="tile14"
    &&
    document.getElementById("cell43").className=="tile15"
    &&
    document.getElementById("cell44").className=="tile16") {
        window.alert("Congratulations!!\nAmount spent on current game in seconds: " + Math.floor((new Date() - TimeSet) / 1000) +"\nNumber of moves so far: " + NumMoves+"\nWould you like to play again?")
        window.location.reload(); //Reload page upon confirmation
       
    }

}

shuffle();
