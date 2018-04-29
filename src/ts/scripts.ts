document.addEventListener("DOMContentLoaded", function(event) { 
    var myRoot = document.getElementById('here-i-am');
    let ti = new TextItem();
    myRoot.appendChild(ti.createDom());
    let br = new ButtonRow();
    myRoot.appendChild(br.createDom());
});

/**var ce = new ColumnEditor(myRoot);
});

var ColumnEditor = function(root) {
    var myRoot = root;
    
} */


/**
 * TODO:
 *  - Add elements
 *  -- Buttons at the bottom of the column, last used first?
 *  -- + button between every item in the column that reveals the button row?
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