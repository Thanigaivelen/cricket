
const pointsAPI = "pointsapi.json";
const pointsLink = document.getElementById("points-link");
const pointsTableContainer = document.getElementById("pointsTableContainer");

function loadPointsTable(pointsAPI) {
    fetch(pointsAPI)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
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
                const battingPlayers = inning.batting.map((player) => `${player.name} (${player.points} pts)`).join(", ");
                battingCell.textContent = battingPlayers;

                const bowlingCell = row.insertCell(2);
                const bowlingPlayers = inning.bowling.map((player) => `${player.name} (${player.points} pts)`).join(", ");
                bowlingCell.textContent = bowlingPlayers;
            });

            // Append the table to the container
            pointsTableContainer.appendChild(pointsTable);
        })
        .catch((error) => {
            console.error(error);
            // Handle the error here
        });
}


pointsLink.addEventListener("click", () => {
    loadPointsTable(pointsAPI);
});

































