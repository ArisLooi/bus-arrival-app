# Bus Arrival App

Welcome to the Bus Arrival App! This application allows users to check the arrival times of buses at a specific bus stop in Singapore. Simply enter the Bus Stop ID to get real-time information about bus arrivals.

## Features

- **Real-time Bus Arrival Information**: Get the latest arrival times for buses at a specific bus stop.
- **Total Number of Buses**: Displays the total number of buses arriving at the bus stop.
- **Automatic Updates**: The app automatically updates the bus arrival data every 5 seconds.
- **User-friendly Interface**: Easy-to-use interface with clear instructions and loading indicators.

## Getting Started

### Prerequisites

To run this app, you need a modern web browser with JavaScript enabled.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bus-arrival-app.git

2. Navigate to the project directory:
   cd bus-arrival-app

3. Open the index.html file in your web browser.

## Usage
1. Open the app in your web browser.
2. Enter the Bus Stop ID in the input field. For example, you can use 18141.
3. Click the "Submit" button.
4. The app will display the bus arrival times and the total number of buses at the specified bus stop.
5. The data will automatically update every 5 seconds.

## Code Overview
### HTML
The HTML file (index.html) contains the structure of the app, including the input field for the Bus Stop ID, loading indicators, and the container for displaying bus arrival information.

### CSS
The CSS file (style.css) contains the styles for the app, ensuring a user-friendly and responsive design.

### JavaScript
- **The JavaScript file (script.js) contains the logic for fetching and displaying bus arrival data. Key functions include:
- **getBusTiming(): Retrieves the Bus Stop ID and calls displayBusArrival().
- **displayBusArrival(busStopId): Fetches bus arrival data and updates the UI.
- **fetchBusArrival(busStopId): Makes an API call to fetch bus arrival data.
- **formatArrivalData(arrivalData): Formats the bus arrival data for display.

### API
The app uses the SG Bus Arrivals API https://sg-bus-arrivals.vercel.app/ to fetch real-time bus arrival data.

## Contributing
Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- **SG Bus Arrivals API
- **Google Fonts
