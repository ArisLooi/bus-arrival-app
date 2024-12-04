# Bus Arrival App

Welcome to the Bus Arrival App! This application allows users to check the arrival times of buses at a specific bus stop in Singapore. Simply enter the Bus Stop ID to get real-time information about bus arrivals.

## Features

- Real-time Bus Arrival Information: Get the latest arrival times for buses at a specific bus stop.
- Total Number of Buses: Displays the total number of buses arriving at the bus stop.
- Automatic Updates: The app automatically updates the bus arrival data every 5 seconds.
- User-friendly Interface: Easy-to-use interface with clear instructions and loading indicators.

## Getting Started

### Prerequisites

To run this app, you need a modern web browser with JavaScript enabled.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArisLooi/bus-arrival-app.git

2. Navigate to the project directory:
   ```bash
   cd bus-arrival-app

4. Open the index.html file in your web browser.

## Usage
1. Open the index.html file in your web browser.
2. Enter a bus stop ID (e.g., 18141) and click "Submit" to get the bus arrival times.
3. View the bus arrival information and the total number of buses arriving at the bus stop.

## Project Structure
bus-arrival-app/
├── index.html
├── script.js
├── style.css
├── bus.png
├── bus.svg
├── README.md
└── LICENSE
- index.html: The main HTML file that contains the structure of the application.
- script.js: The JavaScript file that contains the logic for fetching and displaying bus arrival times.
- style.css: The CSS file that contains the styles for the application.
- bus.png: An image used in the cover section.
- bus.svg: An image used in the fetching container.
- README.md: This file.
- LICENSE: The file that contains the licensing terms for the project.

## Functions
- getBusTiming(): Retrieves the bus stop ID from the input field and calls displayBusArrival().
- displayBusArrival(busStopId): Fetches bus arrival data and updates the UI with the fetched information.
- fetchBusArrival(busStopId): Fetches bus arrival data from the SG Bus Arrivals API.
- formatArrivalData(arrivalData): Formats the fetched bus arrival data for display.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Thanks to all the developers who have contributed to open-source projects and made learning to code accessible to everyone.
- Special thanks to the SG Bus Arrivals API for providing real-time bus arrival data.

Happy coding! 😊
