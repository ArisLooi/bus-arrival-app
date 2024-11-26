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

function formatArrivalData(arrivalData) {
    const buses = arrivalData.services;
    const formattedData = [];
    for (const bus of buses) {
        const arrivalTimerString = `${bus.next_bus_mins} mins(s)`;
        formattedData.push(`
            <div>
                <strong>Bus ${bus.bus_no}</strong>: ${arrivalTimeString}
            </div>
        `)
        }
    return formattedData.join("");
}