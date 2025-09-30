const priceDisplay = document.getElementById("priceDisplay");
const changeDisplay = document.getElementById("changeDisplay");
const marketCapDisplay = document.getElementById("marketCap");
const ctx = document.getElementById("priceChart").getContext("2d");

// =====================
// Hier änderst du die Werte direkt im Code
// =====================
const marketCap = "$5.8K";
const price = 0.00000584;
const change = "+$0 (+0.00%)"; // z.B. "-$0 (-0.00%)"

// =====================
// Setze die Werte auf der Seite
// =====================
marketCapDisplay.textContent = marketCap;
priceDisplay.textContent = `$${price.toFixed(8)}`;
changeDisplay.textContent = change;
changeDisplay.className = change.includes("-") ? "negative" : "positive";

// =====================
// Chart-Daten: gerade Linie
// =====================
let chartData = {
    labels: ["Now"], // Anfangslabel
    datasets: [{
        label: 'Price',
        data: [price], // Startpreis
        borderColor: '#facc15',
        backgroundColor: 'rgba(250,204,21,0.2)',
        tension: 0.0,
        pointRadius: 3,
        pointBackgroundColor: '#facc15',
        borderWidth: 2,
        fill: true
    }]
};

// =====================
// Chart initialisieren
// =====================
const priceChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                grid: {
                    color: '#333',
                    borderColor: '#111827'
                },
                ticks: { color: '#ccc' }
            },
            y: {
                display: true,
                grid: {
                    color: '#333',
                    borderColor: '#111827'
                },
                ticks: { color: '#ccc' }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});
