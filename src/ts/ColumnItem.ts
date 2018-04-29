class ColumnItem {
    createDom() {
        var item = document.createElement('div');
        item.classList.add('column-item');
        item.tabIndex = 0;
        item.innerHTML = 'Column item<div class="item-menu">Item-menu</div>';
        return item;
    }
}