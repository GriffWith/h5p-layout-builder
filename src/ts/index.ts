import _ from 'lodash';

import './../scss/styles.scss';

import { getRandomColor } from './utils';

import { Button } from './button';
import { Column } from './column';

document.addEventListener("DOMContentLoaded", function(event) { 
    var myRoot = document.getElementById('here-i-am');
    var ce = new ColumnEditor(myRoot);
});

class ColumnEditor {
    constructor(root: HTMLElement) {
        var myRoot = root;
        myRoot.innerHTML = 'This is where it all will happen';
    }
}

/**
 * TODO:
 *  - Add item menu
 *  -- Visible when item is active
 *  - Add elements
 *  -- Buttons at the bottom of the column, last used first?
 *  -- OR + button everywhere content may be added?
 *  - Sort elements
 *  -- By clicking - up down arrows on every element
 *  - Delete elements
 *  -- Button in item menu
 *  -- Confirm delete
 *  - Delete column
 *  -- Button in column menu
 *  -- Confirm delete
 *  - Add column menu
 *  -- Visible when column or column item is active
 * 
 * LATER:
 *  - Sort by dragging
 *  - Drag between columns supported
 */


/**
 * PLAYGROUND
 */

var activeContainer: Column;

var site = document.createElement("div");
document.body.appendChild(site);

// Button row
let buttonRow = document.createElement("div");
site.appendChild(buttonRow);

let line = document.createElement("hr");
line.style.width = "100%";
site.appendChild(line);

// Add container button
let containerButton = new Button(buttonRow, 'Add row', () => createContainer);

function createContainer() {
    let container = new Column();
    container.addCssClass('container');
    activeContainer = container;
    container.setParent(site);
}

// Add column button
let colButton = new Button(buttonRow, 'Add column', () => createColumn);

function createColumn() {
    let col = new Column();
    col.addCssClass('column-g');
    col.elRef.innerHTML += '&nbsp;';
    col.elRef.style.backgroundColor = getRandomColor();
    if (activeContainer !== undefined) {
        col.setParent(activeContainer.elRef);
    } else {
        col.setParent(site);
    }
}
