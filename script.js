const priceInput = document.getElementById("priceInput");
const changeInput = document.getElementById("changeInput");
const priceDisplay = document.getElementById("priceDisplay");
const changeDisplay = document.getElementById("changeDisplay");
const addPointBtn = document.getElementById("addPoint");
const ctx = document.getElementById("priceChart").getContext("2d");

let chartData = {
    labels: ["Now"],
    datasets: [{
        label: 'Price',
        data: [parseFloat(priceInput.value)],
        borderColor: '#facc15',
        backgroundColor: 'rgba(250,204,21,0.2)',
        tension: 0.0,
    }]
};

const priceChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            x: { display: true },
            y: { display: true }
        },
        plugins: {
            legend: { display: false }
        }
    }
});

// Anzeige initial aktualisieren
priceDisplay.textContent = `$${priceInput.value}`;
changeDisplay.textContent = changeInput.value;
changeDisplay.className = changeInput.value.includes("-") ? "negative" : "positive";

// Funktion zum Hinzufügen eines neuen Datenpunkts
function addDataPoint() {
    const time = new Date().toLocaleTimeString();
    chartData.labels.push(time);
    chartData.datasets[0].data.push(parseFloat(priceInput.value));
    priceChart.update();

    priceDisplay.textContent = `$${parseFloat(priceInput.value).toFixed(8)}`;
    changeDisplay.textContent = changeInput.value;

    changeDisplay.className = changeInput.value.includes("-") ? "negative" : "positive";
}

addPointBtn.addEventListener("click", addDataPoint);
