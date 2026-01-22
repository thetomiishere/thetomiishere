const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbzi-kN9I1y3GQsC3nZv6AyGHRDa_q-U89pWqKWiTniavWra_uh1Jayrzf6Z3-VstcCiQw/exec"; 

export async function loadKData() {
    try {
        const response = await fetch(`${SHEET_API_URL}?sheet=K`);
        return await response.json();
    } catch (err) {
        console.error("Error loading data:", err);
        return [];
    }
}