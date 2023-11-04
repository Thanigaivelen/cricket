// Replace these URLs with actual cricket API endpoints
const liveScoreAPI = "liveapi.json";

const contentDiv = document.getElementById("content");
const liveScoreLink = document.getElementById("live-score-link");

function loadContent(liveScoreAPI) {
  fetch(liveScoreAPI)
    .then((response) => response.json())
    .then((data) => {
      let api = JSON.stringify(data, null, 2);
      let apiData = JSON.parse(api);

      apiData.data.map((apiResponse) => {
        if (apiResponse.matchType === "odi") {
          const matchCard = document.createElement("div");
          matchCard.classList.add("match-card");

          const matchType = document.createElement('div');
          matchType.classList.add('match-type');
          matchType.textContent = apiResponse.matchType;

          const matchStatus = document.createElement('p');
          matchStatus.classList.add('match-status');
          matchStatus.textContent = apiResponse.status;

          const teamsDiv = document.createElement('div');
          teamsDiv.classList.add('teams');

          const team1Logo = document.createElement('img');
          team1Logo.src = apiResponse.t1img;
          team1Logo.alt = "Team 1";
          team1Logo.classList.add('team-logo');

          const team1Name = document.createElement('p');
          team1Name.classList.add('team-name');
          team1Name.textContent = apiResponse.t1;

          const vsSpan = document.createElement('span');
          vsSpan.textContent = "vs";

          const team2Logo = document.createElement('img');
          team2Logo.src = apiResponse.t2img;
          team2Logo.alt = "Team 2";
          team2Logo.classList.add('team-logo');

          const team2Name = document.createElement('p');
          team2Name.classList.add('team-name');
          team2Name.textContent = apiResponse.t2;

          if (apiResponse.status !== "Match not started") {
            const team1score = document.createElement('p');
            team1score.classList.add('team-score');
            team1score.textContent = apiResponse.t1s;

            const team2score = document.createElement('p');
            team2score.classList.add('team-score');
            team2score.textContent = apiResponse.t2s;

            teamsDiv.appendChild(team1score);
            teamsDiv.appendChild(team2score);
          }

          teamsDiv.appendChild(team1Logo);
          teamsDiv.appendChild(team1Name);
          teamsDiv.appendChild(vsSpan);
          teamsDiv.appendChild(team2Logo);
          teamsDiv.appendChild(team2Name);

          matchCard.appendChild(matchStatus);
          matchCard.appendChild(matchType);
          matchCard.appendChild(teamsDiv);

          const matchContainer = document.getElementById('matchContainer');
          matchContainer.appendChild(matchCard);
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

liveScoreLink.addEventListener("click", () => {
  loadContent(liveScoreAPI);
});
