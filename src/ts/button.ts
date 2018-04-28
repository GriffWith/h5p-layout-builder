
export class Button {

    elRef: HTMLElement;

    constructor(parent: HTMLElement, label: string, onClick: Function) {
        this.elRef = document.createElement('button');
        let textNode = document.createTextNode(label);
        this.elRef.appendChild(textNode);
        this.elRef.addEventListener('click', onClick());
        parent.appendChild(this.elRef);
    }
}
