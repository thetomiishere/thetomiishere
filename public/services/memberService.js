const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbzi-kN9I1y3GQsC3nZv6AyGHRDa_q-U89pWqKWiTniavWra_uh1Jayrzf6Z3-VstcCiQw/exec"; 
const DEPLOYMENT_ID = "AKfycbzi-kN9I1y3GQsC3nZv6AyGHRDa_q-U89pWqKWiTniavWra_uh1Jayrzf6Z3-VstcCiQw"

async function loadEJData() {
    try {
        const response = await fetch(SHEET_API_URL);
        const allSheetsData = await response.json();
        
        // Access the specific table named "EJ"
        const ejTable = allSheetsData["EJ"]; 
        
        if (ejTable) {
            renderCards(ejTable);
        } else {
            console.error("Table 'EJ' not found. Check your sheet name!");
        }
    } catch (error) {
        console.error("Error loading data:", error);
    }
}