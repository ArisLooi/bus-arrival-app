const fetchingContainer= document.getElementById("fetching-container");
const fetchedContainer = document.getElementById("fetched-container");

function getBusTiming() {
    const busStopId = document.getElementById('bus-stop-id').value;
    displayBusArrival(busStopId);
}

function displayBusArrival (busStopId) {
    // show the fetching container so the user know the app is loading the data
    fetchingContainer.style.display = 'flex';

    // hide the fetched container (in case user have sent request to get data before and the container is still visible)
    fetchedContainer.style.display = 'none';

    fetchBusArrival(busStopId).then(arrivalData => {formatArrivalData(arrivalData);
        // hide the fetching container because the fetching process is done
        fetchingContainer.style.display = 'none';

        // show the fetched container
        fetchedContainer.style.display = 'block';

        // update the bus stop title with the actual bus stop ID
        const busStopTitle = document.getElementById('bus-stop-title'); 
        busStopTitle.textContent = `Bus Stop: ${busStopId}`;

        // merge the fetched data to the list
        const formattedArrivalData = formatArrivalData(arrivalData);
        const busStopList = document.getElementById('bus-stop-list');
        busStopList.innerHTML = formattedArrivalData.join('');

        // display the total number of buses 
        const totalBuses = arrivalData.services.length; 
        const totalBusesElement = document.getElementById('total-buses'); 
        totalBusesElement.textContent = `Total number of buses: ${totalBuses}`;
    })
    .catch(error => {
        console.error('Error: ', error);
        alert('Failed to fetch bus arrival data. Please try again later.');
   
        // hide the fetching container because the fetching process is done
        fetchingContainer.style.display = 'none';
    })
}

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
        let arrivalTimeString = '';
        if (bus.next_bus_mins < 0) { 
            arrivalTimeString = `<span><strong>Arriving</strong></span>`; 
        } else {
        arrivalTimeString = `<span><strong>${bus.next_bus_mins}</strong> min(s) </span>`;
        formattedData.push(`
        <li>
            <span><strong>Bus ${bus.bus_no}</strong></span>
            ${arrivalTimeString}
        </li>
        `)
        }
    }

    return formattedData;
}

// Update bus arrival data every 5 seconds 
setInterval(() => { 
    const busStopId = document.getElementById('bus-stop-id').value; 
    if (busStopId) { displayBusArrival(busStopId); } }, 5000);

