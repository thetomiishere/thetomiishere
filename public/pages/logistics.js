

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

export function formatDate(date){
    if(date) {
        const formatted = date.split('T')[0];
        return formatted.replace(/-/g, '/')
    }
    return "No Date";
}

export function renderCardSkeleton(container, count) {
    const skeletonHTML = Array(count).fill(`
        <div class="card skeleton-card">
            <div class="image-container skeleton-img"></div>
            <div class="card-content">
                <div class="skeleton-text title-skeleton"></div>
                <div class="skeleton-text info-skeleton"></div>
                <div class="skeleton-text info-skeleton" style="width: 40%"></div>
                <div class="skeleton-btn"></div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = skeletonHTML;
}