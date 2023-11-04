const teamsAPI = "teamapi.json"; // Replace with your actual API endpoint
const teamsLink = document.getElementById("teams-link");
const teamsContainer = document.getElementById('teamsContainer');

function loadNewZealandPlayers(teamsAPI) {
    fetch(teamsAPI)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
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

                    teamsContainer.appendChild(playerCard);
                });
            } else {
                teamsContainer.innerHTML = "New Zealand team not found in the data.";
            }
        })
        .catch((error) => {
            console.error(error);
            // Handle the error here
        });
}

teamsLink.addEventListener("click", () => {
    loadNewZealandPlayers(teamsAPI);
});
