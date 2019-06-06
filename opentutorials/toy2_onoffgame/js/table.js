// html 내의 table 요소 가져와서 데이터 초기화하기

const tableElements = document.getElementsByClassName("table")[0]

// coordinate data initialization

let rowLength = tableElements.children.length
let colLength = tableElements.children[0].children.length

for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
        const cellElement = tableElements.children[i].children[j]

        cellElement.innerHTML = `(${i}, ${j})`
        cellElement.setAttribute('data-row', i)
        cellElement.setAttribute('data-col', j)

        cellElement.addEventListener('click', function () {
            var row = parseInt(cellElement.dataset.row)
            var col = parseInt(cellElement.dataset.col)

            bg_change(row, col)
            console.dir(cellElement)
        })

    }
}
/*
function bg_change(row, col) => {
   style.backgroundColor = blue;
}
*/

function bg_change(Row, Col) {
    alert(Row + "" + Col);
}

const case1 = (e) => {
    // (0.0)의 경우 
    if (Row + Col === 0) {
        bg_change(Row, Col)
        bg_change(Row + 1, Col)
        bg_change(Row, Col + 1)
    }

    // (4.0)의 경우 
    else if (Row + Col === Row) {
        bg_change(Row, Col)
        bg_change(Row - 1, Col)
        bg_change(Row, Col + 1)
    }

    // (0.4)의 경우 
    else if (Row + Col === Col) {
        bg_change(Row, Col)
        bg_change(Row + 1, Col)
        bg_change(Row, Col - 1)
    }

    // (4,4)의 경우
    else {
        bg_change(Row, Col)
        bg_change(Row - 1, Col)
        bg_change(Row, Col - 1)
    }
}

const case2 = (Row, Col) => {
    // (0,1) ~ (0.3)의 경우
    if (Row === 0) {
        bg_Color(Row, Col)
        bg_Color(Row, Col - 1)
        bg_Color(Row + 1, Col)
        bg_Color(Row, Col + 1)
    }
    // (4,1) ~ (4,3)의 경우
    else if (Row === 4) {
        bg_Color(Row, Col)
        bg_Color(Row, Col - 1)
        bg_Color(Row, Col + 1)
        bg_Color(Row - 1, Col)
    }
    // (1,0) ~ (3,0)의 경우
    else if (Col === 0) {
        bg_Color(Row, Col)
        bg_Color(Row + 1, Col)
        bg_Color(Row - 1, Col)
        bg_Color(Row, Col + 1)
    }
    // (1,4) ~ (3,4)의 경우
    else {
        bg_Color(Row, Col)
        bg_Color(Row, Col - 1)
        bg_Color(Row - 1, Col)
        bg_Color(Row + 1, Col)
    }
}

// (1,1) ~ (3,3) 의 경우 
const case3 = (Row, Col) => {
    bg_Color(Row, Col)
    bg_Color(Row, Col - 1)
    bg_Color(Row, Col + 1)
    bg_Color(Row - 1, Col)
    bg_Color(Row + 1, Col)
}