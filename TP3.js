const players = [
    {
      id: 1,
      name: "Lamine Yamal",
      club: "FC Barcelone",
    },
    {
      id: 2,
      name:"Rodrygo",
      club: "Real Madrid"
    },
    {
      id: 3,
      name:"Mbappon",
      club: "Real Madrid"
    },
    {
      id: 4,
      name:"Raphinha",
      club: "FC Barcelone"
    },
  ];

let newPlayers = players.map((player) => {
    let leaguePhase = "";
    if(player.club == "FC Barcelone"){
        leaguePhase = "8eme de finale";
    } else {
        leaguePhase = "16eme de finale";
    }
    const newPlayer = {...player, ucl: leaguePhase}
    return newPlayer;
});

console.log(newPlayers);


newPlayers = players.map((player) => {
    let leaguePhase = "8eme de finale";

    if(player.club == "Real Madrid")
        leaguePhase = "16eme de finale";

    const newPlayer = {...player, ucl: leaguePhase}
    return newPlayer;
});

console.log(newPlayers);

newPlayers = players.map((player) => {
    return {...player, ucl: player.club == "FC Barcelone" ? "8eme de finale" : "16eme de finale"};
});

console.log(newPlayers);

newPlayers = players.map((player) => ({...player, ucl: player.club == "FC Barcelone" ? "8eme de finale" : "16eme de finale"}));

console.log(newPlayers);


newPlayers = players.map((player, i) => {
    if(i === players.length - 1) console.log("Finish");
    return {...player, ucl: player.club == "FC Barcelone" ? "8eme de finale" : "16eme de finale"};
});

console.log(newPlayers);