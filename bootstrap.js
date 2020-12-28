import { Popup } from './app/components/popup/popup.js';
import { AjaxLoader } from "./app/components/ajax-loader/ajax-loader.js";
import { App } from "./app/app.js";

customElements.define('pop-up', Popup);
customElements.define('ajax-loader', AjaxLoader);

const app = new App();
app.start();
