import { loadHomeData } from '../services/homepageService.js';
import { setPageDisabled } from './logistics.js';

let homepageCache = null;

export async function homepage() {
    try {
        setPageDisabled(true); 
        if (!homepageCache) {
            homepageCache = await loadHomeData();
        }
        const data = homepageCache;
        data.forEach(item => {
            const imgElement = document.querySelector(`.member-card img[alt="${item.ID}"]`);
            
            if (imgElement && item.img) {
                imgElement.src = item.img;
            }
        });

    } catch (err) {
        console.error("Failed to render homepage images:", err);
    } finally {
        setPageDisabled(false);
    }
}