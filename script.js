const busStopIdInput = document.getElementById("busStopId");
const arrivalInfo = document.getElementById("arrivalInfo");
let intervalId;

async function fetchBusArrival(busStopId) {
    const response = await fetch(`https://sg-bus-arrivals.vercel.app/?id=${busStopId}`);
    if (response.ok) {
    const data = await response.json();
    return data;
    } else {
        throw new Error('Error fetching bus arrival data.');
    }
}

function formatArrivalData(arrivalData) {
    const buses = arrivalData.services;
    const totalBuses = buses.length;
    const formattedData = [`<div>Total Buses: ${totalBuses}</div>`];
    for (const bus of buses) {
        const arrivalTimeString = bus.next_bus_mins <= 0 ? "Arriving" : `${bus.next_bus_mins} min(s)`; formattedData.push(`
            <div>
                <strong>Bus ${bus.bus_no}</strong>: ${arrivalTimeString}
            </div>
        `)
        };
    return formattedData.join("");
}

function displayBusArrival(busStopId) {
    arrivalInfo.innerHTML = "Loading...";
    fetchBusArrival(busStopId)
    .then((arrivalData) => {
        const formattedArrivalData = formatArrivalData(arrivalData);
        arrivalInfo.innerHTML = formattedArrivalData;
    })
    .catch((error) => {
        console.error("Error:",error);
    });
}

function getBusTiming() {
    const busStopId = busStopIdInput.value;
    displayBusArrival(busStopId);
    if (intervalId) { 
        clearInterval(intervalId); 
    } 
    intervalId = setInterval(() => displayBusArrival(busStopId), 5000);
}