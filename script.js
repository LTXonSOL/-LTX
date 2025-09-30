const priceInput = document.getElementById("priceInput");
const changeInput = document.getElementById("changeInput");
const priceDisplay = document.getElementById("priceDisplay");
const changeDisplay = document.getElementById("changeDisplay");
const addPointBtn = document.getElementById("addPoint");
const ctx = document.getElementById("priceChart").getContext("2d");

// Startwerte: gerade Linie
let chartData = {
    labels: ["Now"],
    datasets: [{
        label: 'Price',
        data: [parseFloat(priceInput.value)],
        borderColor: '#facc15',
        backgroundColor: 'rgba(250,204,21,0.2)',
        tension: 0.0,
        pointRadius: 3,
        pointBackgroundColor: '#facc15',
        borderWidth: 2,
        fill: true
    }]
};

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
                }
            },
            y: {
                display: true,
                grid: {
                    color: '#333',
                    borderColor: '#111827'
                }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});

// Initialanzeige
priceDisplay.textContent = `$${parseFloat(priceInput.value).toFixed(8)}`;
changeDisplay.textContent = changeInput.value;
changeDisplay.className = changeInput.value.includes("-") ? "negative" : "positive";

// Funktion für neuen Datenpunkt
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
