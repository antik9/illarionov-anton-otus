window.customElements.define('my-tree', class TreeElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    };

    connectedCallback() {
        const tree = document.createElement('pre');
        const data = JSON.parse(this.getAttribute('data'));
        const depth = data.depth || 0;
        tree.setAttribute('id', data.id);
        tree.innerHTML = `${"  ".repeat(depth)}Tree with id #${data.id}`;

        data.items.forEach(item => {
            item.depth = depth + 1;
            if ( item.items ) {
                const branch = document.createElement('my-tree');
                branch.setAttribute('data', JSON.stringify(item));
                tree.appendChild(branch);
            } else {
                const leaf = document.createElement('my-leaf');
                leaf.setAttribute('data', JSON.stringify(item));
                tree.appendChild(leaf);
            }
        });
        this.shadowRoot.appendChild(tree);
    }
});


window.customElements.define('my-leaf', class LeafElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const leaf = document.createElement('pre');
        const data = JSON.parse(this.getAttribute('data'));
        leaf.setAttribute('id', data.id);
        leaf.innerHTML = `${"  ".repeat(data.depth)}Leaf with id #${data.id}`;
        this.shadowRoot.appendChild(leaf);
    }
});
