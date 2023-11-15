
const pointsAPI = "pointsapi.json";
const pointsLink = document.getElementById("points-link");
const pointsTableContainer = document.getElementById("pointsTableContainer");

async function loadPointsTable(pointsAPI) {
    try {
        const response = await fetch(pointsAPI);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const inningsData = data.data.innings;

        // Clear previous content
        pointsTableContainer.innerHTML = '';

        if (inningsData.length === 0) {
            console.log("No innings data found");
            return;
        }

        // Create the table element
        const pointsTable = document.createElement("table");
        pointsTable.classList.add("points-table");

        // Create table header
        const tableHeader = pointsTable.createTHead();
        const headerRow = tableHeader.insertRow(0);

        const inningHeader = document.createElement("th");
        inningHeader.textContent = "Inning";
        headerRow.appendChild(inningHeader);

        const battingHeader = document.createElement("th");
        battingHeader.textContent = "Batting";
        headerRow.appendChild(battingHeader);

        const bowlingHeader = document.createElement("th");
        bowlingHeader.textContent = "Bowling";
        headerRow.appendChild(bowlingHeader);

        // Create table body
        const tableBody = pointsTable.createTBody();

        inningsData.forEach((inning) => {
            const row = tableBody.insertRow(-1);

            const inningCell = row.insertCell(0);
            inningCell.textContent = inning.inning;

            const battingCell = row.insertCell(1);
            const battingPlayers = inning.batting.map((player) => `<div>${player.name} (${player.points} pts)</div>`);
            battingCell.innerHTML = battingPlayers;

            const bowlingCell = row.insertCell(2);
            const bowlingPlayers = inning.bowling.map((player) => `<div>${player.name} (${player.points} pts)</div>`);
            bowlingCell.innerHTML = bowlingPlayers;
        });

        // Append the table to the container
        pointsTableContainer.appendChild(pointsTable);
    } catch (error) {
        console.error(error);
        // Handle the error here
    }
}


    loadPointsTable(pointsAPI);

































