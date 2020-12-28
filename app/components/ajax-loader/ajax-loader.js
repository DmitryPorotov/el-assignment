export class AjaxLoader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.getContent().then();
    }
    async getContent() {
        try {
            const resp = await fetch(this.dataset.url, {method: 'GET'});
            if (resp.ok) {
                this.shadowRoot.innerHTML = await resp.text();
            }
        } catch (e) {
            console.error(e);
        }
    }
}
