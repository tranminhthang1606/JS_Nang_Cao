let game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// c.1
let [players1, players2] = game.players;
console.log(players1, players2);
// c.2
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1);

// c.3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// c.4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// c.5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// c.6

const printGoals = (...scored) => {
  console.log(
    "Các cầu thủ ghi bàn:",
    ...scored,
    ".Số lượng cầu thủ ghi bàn : ",
    scored.length
  );
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

//c.7
team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");

// LAB1.2: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS	AND	STRINGS	> CODING
// CHANLLENGE	#2)

//c.1
for (const [i, player] of game.scored.entries()) {
  console.log("Goal", i + 1, ":", player);
}

// c.2
let average = 0;

for (const odd of Object.values(game.odds)) {
  average += odd / Object.values(game.odds).length;
}
console.log(average);

// c.3

for (const odd of Object.entries(game.odds)) {
  let [team, count] = odd;
  let teamStr = team === "x" ? "draw" : game[team];
  console.log(`Tỷ lệ thắng của ${teamStr} là : ${count}`);
}
//c.4
let { scored } = game;

let scores = new Map();
for (const player of scored) {
  scores.has(player)
    ? scores.set(player, scores.get(player) + 1)
    : scores.set(player, 1);
  
}
scores = Object.fromEntries(scores);
console.log(scores);
