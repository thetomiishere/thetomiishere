import { loadHomeData } from '../services/homepageService.js';
// import { setPageDisabled } from './logistics.js';

const memberImages = {
    "EJ":       "https://officialsite.cds-jp.online/prod/profile_member/106/150/e55e3a765be64e90927ba01757327289.webp",
    "FUMA":     "https://officialsite.cds-jp.online/prod/profile_member/106/151/cfb3f3637cf74d998800880a80d7b14d.webp",
    "K":        "https://officialsite.cds-jp.online/prod/profile_member/106/152/3b0ac49a2141456cb034445048669d02.webp",
    "NICO":     "https://officialsite.cds-jp.online/prod/profile_member/106/153/99c14925144a4537a0125b955d0c477c.webp",
    "YUMA":     "https://officialsite.cds-jp.online/prod/profile_member/106/154/4ff9913e087246baa83e0a2f7a0f86dc.webp",
    "JO":       "https://officialsite.cds-jp.online/prod/profile_member/106/155/e25f9f6985e246fa9a612044ea692170.webp",
    "HARUA":    "https://officialsite.cds-jp.online/prod/profile_member/106/156/7cde09694be04e588dcd080910a8a62d.webp",
    "TAKI":     "https://officialsite.cds-jp.online/prod/profile_member/106/157/13383d53a2444dbc82a3ea9f24f214e7.webp",
    "MAKI":     "https://officialsite.cds-jp.online/prod/profile_member/106/162/491d07d4059d42909828f22569acf5d9.webp",
    "andTEAM":  "https://officialsite.cds-jp.online/prod/profile_main/106/58/1a0108aadfc34a5ca64b6fced521b96c.webp"
};

export async function homepage() {
    const missingKeys = [];

    Object.keys(memberImages).forEach(memberID => {
        const imgElement = document.querySelector(`.member-card img[alt="${memberID}"]`);
        if (!imgElement) return;

        const url = memberImages[memberID];
        if (url && url !== "") {
            imgElement.src = url;
        } else {
            missingKeys.push(memberID);
            imgElement.src = "";
        }
    });

    if (missingKeys.length === 0) return;

    try {
        console.log(`Fetching missing images for: ${missingKeys.join(', ')}`);
        const homepageCache = await loadHomeData();

        homepageCache.forEach(item => {
            if (missingKeys.includes(item.ID)) {
                const imgElement = document.querySelector(`.member-card img[alt="${item.ID}"]`);
                if (imgElement && item.img) {
                    imgElement.src = item.img;
                }
            }
        });
    } catch (err) {
        console.error("Failed to load missing home data:", err);
    }
}
