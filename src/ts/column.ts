
export class Column {

    parent: HTMLElement;
    elRef: HTMLElement;

    constructor() {
        this.elRef = document.createElement('div');
    }

    setParent(parent: HTMLElement) {
        parent.appendChild(this.elRef);
    }

    addCssClass(asClass: string) {
        this.elRef.classList.add(asClass);
    }
}

export interface IColumn {
    width: string;
    parent: IColumn;
}
