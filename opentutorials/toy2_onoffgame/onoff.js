class Onoff_Cell {

    //객체의 variable은 this로서 선언
    constructor(on_off) {
        this.on_off = new Array(5).fill(null).map(() => Array(5).fill(false));
        this.cell_arr = new Array(5).fill(null).map(() => Array(5))

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                var id = 'col' + i + j;
                var tmp = document.getElementById(id);
                this.cell_arr[i][j] = tmp;
            }
        }

    }

    //display all cell    
    display() {
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                if (this.on_off[i][j] === true) {
                    this.cell_arr[i][j].style.background = "#55efc4";
                } else this.cell_arr[i][j].style.background = "#ffffff";
            }
        }

    }

    //reset for reset button
    reset() {
        for (var row of this.on_off) {
            for (var i = 0; i < 5; i++) {
                row[i] = false;
            }
        }

        this.display();
    }

    //change for the span click
    change(event) {

        var target = event.srcElement;
        var targetId = target.id;
        var rowVal = parseInt(targetId[3]);
        var colVal = parseInt(targetId[4]);
        //set possible cell change
        var meAndUpDownSide = [
            [rowVal, colVal],
            [rowVal - 1, colVal],
            [rowVal + 1, colVal],
            [rowVal, colVal - 1],
            [rowVal, colVal + 1]
        ];

        //remove cell that its index is out of index area
        for (var cell of meAndUpDownSide) {
            if (cell[0] > 4 || cell[0] < 0 || cell[1] > 4 || cell[1] < 0) {
                meAndUpDownSide.splice(meAndUpDownSide.indexOf(cell), 1);
            }
        }
        
        //change state of rest of the cell
        for (var cell of meAndUpDownSide) {
            if (this.on_off[cell[0]][cell[1]] === false)
                this.on_off[cell[0]][cell[1]] = true;
            else this.on_off[cell[0]][cell[1]] = false;

        }

        this.display();
    }
}

function init() {

    var onoff_cell = new Onoff_Cell();
    var reset_btn = document.getElementById("reset");

    onoff_cell.display();

    for (var row of onoff_cell.cell_arr) {
        for (var cell of row) {
            cell.addEventListener('click', onoff_cell.change.bind(onoff_cell));
        }
    }

    reset_btn.addEventListener('click', onoff_cell.reset.bind(onoff_cell));
}

init();