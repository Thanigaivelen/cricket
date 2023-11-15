const teamsAPI = "teamapi.json"; // Replace with your actual API endpoint
const teamsLink = document.getElementById("teams-link");
const teamsContainer = document.getElementById('teamsContainer');

async function loadNewZealandPlayers(teamsAPI) {
    try {
        const response = await fetch(teamsAPI);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Clear previous content
        teamsContainer.innerHTML = '';

        const newZealandTeam = data.data.find((team) => team.teamName === "New Zealand");

        if (newZealandTeam) {
            newZealandTeam.players.forEach((player) => {
                const playerCard = document.createElement('div');
                playerCard.classList.add('player-card');

                // Create the player image element
                const playerImage = document.createElement('img');
                playerImage.src = player.playerImg;
                playerImage.alt = player.name;
                playerImage.classList.add('player-image');

                // Create the player name element
                const playerName = document.createElement('p');
                playerName.classList.add('player-name');
                playerName.textContent = player.name;

                // Create the player role element
                const playerRole = document.createElement('p');
                playerRole.classList.add('player-role');
                playerRole.textContent = player.role;

                // Create the player country element
                const playerCountry = document.createElement('p');
                playerCountry.classList.add('player-country');
                playerCountry.textContent = player.country;

                // Create the player batting style element
                const playerBattingStyle = document.createElement('p');
                playerBattingStyle.classList.add('player-batting-style');
                playerBattingStyle.textContent = player.battingStyle;

                // Create the player bowling style element
                const playerBowlingStyle = document.createElement('p');
                playerBowlingStyle.classList.add('player-bowling-style');
                playerBowlingStyle.textContent = player.bowlingStyle;

                playerCard.appendChild(playerImage);
                playerCard.appendChild(playerName);
                playerCard.appendChild(playerRole);
                playerCard.appendChild(playerCountry);
                playerCard.appendChild(playerBattingStyle);
                playerCard.appendChild(playerBowlingStyle);
          playerCard.innerHTML += `
    <style>
        .teamsContainer {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            align-items: center;
            margin: 20px;
        }

        .player-card {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            width: 300px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
            /* Add other common styles for player card */
        }

        .player-card:hover {
            transform: scale(1.05);
        }

        /* Add styles for other player details elements */
    </style>
`;


                teamsContainer.appendChild(playerCard);
            });
        } else {
            teamsContainer.innerHTML = "New Zealand team not found in the data.";
        }
    } catch (error) {
        console.error(error);
        // Handle the error here
    }
}

    loadNewZealandPlayers(teamsAPI);
