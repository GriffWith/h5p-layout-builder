class ButtonRow {
    createDom() {
        var item = document.createElement('div');
        item.classList.add('button-row');
        item.tabIndex = 0;
        item.innerHTML = '<div class="text">Text</div><div class="image">Image</div>';
        return item;
    }
}