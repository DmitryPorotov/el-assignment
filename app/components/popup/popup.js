const template = document.createElement('template');
template.innerHTML =
`<style>
@import "./app/styles/global.css";
@import "./app/components/popup/popup.css";
</style>
<div class="overlay" >
    <div class="content">
        <div class="controls">
            <button id="close-button" class="button">×</button>
        </div>
        <slot name="content-container"></slot>
    </div>
</div>`;

export class Popup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.addTemplate();
        this.subscribeClose();
    }

    addTemplate() {
        const tmp = template.content.cloneNode(true);
        this.shadowRoot.append(tmp);
    }

    subscribeClose() {
        this.shadowRoot.getElementById('close-button').addEventListener('click', () => {
            this.remove();
        })
    }
}
