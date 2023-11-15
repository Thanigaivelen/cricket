const schedulesAPI = "scheduleapi.json";
const schedulesLink = document.getElementById("schedules-link");
const scheduleContainer = document.getElementById('scheduleContainer');

async function loadSchedule(scheduleAPI) {
    try {
        const response = await fetch(scheduleAPI);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const scheduleData = data.data;

        // Clear previous content
        scheduleContainer.innerHTML = '';

        if (scheduleData.length === 0) {
            console.log("No matches found");
            return;
        }

        scheduleData.forEach((match) => {
            if (match.matchType === "odi") {
                const scheduleCard = document.createElement('div');
                scheduleCard.classList.add('schedule-card');

                // Create the match name element
                const matchName = document.createElement('p');
                matchName.classList.add('match-name');
                matchName.textContent = match.name;

                // Create the match type element
                const matchType = document.createElement('p');
                matchType.classList.add('match-type');
                matchType.textContent = match.matchType;

                // Create the match status element
                const matchStatus = document.createElement('p');
                matchStatus.classList.add('match-status');
                matchStatus.textContent = match.status;

                // Create the venue element
                const venue = document.createElement('p');
                venue.classList.add('venue');
                venue.textContent = `Venue: ${match.venue}`;

                // Create the match date element
                const matchDate = document.createElement('p');
                matchDate.classList.add('match-date');
                matchDate.textContent = `Match Date: ${match.date}`;

                // Create the teams element
                const teams = document.createElement('p');
                teams.classList.add('teams');
                teams.textContent = `Teams: ${match.teams.join(' vs ')}`;

                // Create the team info element
                const teamInfo = document.createElement('p');
                teamInfo.classList.add('team-info');
                teamInfo.textContent = `Team Info: `;

                match.teamInfo.forEach((team) => {
                    const teamElement = document.createElement('div');
                    teamElement.classList.add('team-element');

                    const teamLogo = document.createElement('img');
                    teamLogo.src = team.img;
                    teamLogo.alt = team.name;
                    teamLogo.classList.add('team-logo');

                    const teamName = document.createElement('span');
                    teamName.classList.add('team-name');
                    teamName.textContent = team.name;

                    teamElement.appendChild(teamLogo);
                    teamElement.appendChild(teamName);

                    teamInfo.appendChild(teamElement);
                });

                // Create the score element
                const score = document.createElement('p');
                score.classList.add('score');
                score.textContent = `Score: ${match.score.length > 0 ? match.score[0].r : 'Not available'}`;

                scheduleCard.appendChild(matchName);
                scheduleCard.appendChild(matchType);
                scheduleCard.appendChild(matchStatus);
                scheduleCard.appendChild(venue);
                scheduleCard.appendChild(matchDate);
                scheduleCard.appendChild(teams);
                scheduleCard.appendChild(teamInfo);
                scheduleCard.appendChild(score);

                scheduleContainer.appendChild(scheduleCard);
            }
        });
    } catch (error) {
        console.error(error);
        // Handle the error here
    }
}

    loadSchedule(schedulesAPI);
