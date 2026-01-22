const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbzi-kN9I1y3GQsC3nZv6AyGHRDa_q-U89pWqKWiTniavWra_uh1Jayrzf6Z3-VstcCiQw/exec"; 
//const DEPLOYMENT_ID = "AKfycbzi-kN9I1y3GQsC3nZv6AyGHRDa_q-U89pWqKWiTniavWra_uh1Jayrzf6Z3-VstcCiQw"

export async function loadHARUAData() {
    try {
        const response = await fetch(`${SHEET_API_URL}?sheet=HARUA`);
        return await response.json();
    } catch (err) {
        console.error("Error loading data:", err);
        return [];
    }
}