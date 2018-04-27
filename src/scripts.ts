document.addEventListener("DOMContentLoaded", function(event) { 
    var myRoot = document.getElementById('here-i-am');
    var ce = new ColumnEditor(myRoot);
});

var ColumnEditor = function(root) {
    var myRoot = root;
    myRoot.innerHTML = 'This is where it all will happen';
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