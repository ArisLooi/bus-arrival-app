const busStopIdInput = document.getElementById("busStopId");
const arrivalInfo = document.getElementById("arrivalInfo");

async function fetchBusArrival(busStopId) {
    const response = await fetch(`https://sg-bus-arrivals.vercel.app/?id=${busStopId}`);
    if (response.ok) {
    const data = await response.json();
    return data;
    } else {
        throw new Error('Error fetching bus arrival data.');
    }
}