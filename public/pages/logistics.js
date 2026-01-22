

export function setPageDisabled(disabled = true) {
    let overlay = document.getElementById('pageOverlay');
    if (disabled) {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'pageOverlay';
            overlay.classList.add('page-disabled-overlay');

            const spinner = document.createElement('div');
            spinner.classList.add('spinner');
            overlay.appendChild(spinner);

            document.body.appendChild(overlay);
        }
    } else {
        if (overlay) overlay.remove();
    }
}