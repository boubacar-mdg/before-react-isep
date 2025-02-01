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


const findMbappe = players.find((player) => player.name === "Mbappon");
console.log(findMbappe);