
/**
 * PLAYGROUND
 */

// Button row
let buttonRow = document.createElement("div");
document.body.appendChild(buttonRow);

let line = document.createElement("hr");
line.style.width = "100%";
document.body.appendChild(line);

// Page container
let pageContainer = document.createElement("div");
pageContainer.style.display = "grid";
pageContainer.style.boxSizing = "border-box";
pageContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(120px, auto))";
pageContainer.style.gridTemplateRows = "auto";
pageContainer.style.gridColumnGap = "4px";
pageContainer.style.gridRowGap = "4px";
document.body.appendChild(pageContainer);

// Add column button
let addColBtn = document.createElement("button");
let addColBtnText = document.createTextNode("Add column");
addColBtn.addEventListener("click", () => AddColumn(pageContainer));
addColBtn.appendChild(addColBtnText);
buttonRow.appendChild(addColBtn);



function AddColumn(appendTo: HTMLElement) {
    let colNumber = appendTo.children.length;
    console.log(colNumber);
    const newCol = document.createElement('div');
    let newColHelperText = document.createTextNode(colNumber.toString());
    newCol.appendChild(newColHelperText);
    newCol.style.backgroundColor = getRandomColor();
    if (colNumber === 4) {
        newCol.style.minWidth = "300px";
    }
    newCol.style.gridColumn = "auto";
    newCol.style.gridRow =  "auto";
    appendTo.appendChild(newCol);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
