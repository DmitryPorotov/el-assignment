export class App {
    start () {
        const button = document.getElementById('popup-button');

        button.addEventListener('click', function () {
            const popup = document.createElement('pop-up');
            popup.innerHTML = `
                <ajax-loader slot="content-container" data-url="/popup"></ajax-loader>
            `;
            this.after(popup);
        });
    }
}

