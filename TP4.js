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


  const barcaPlayers = players.filter((player)=>player.club === "FC Barcelone");
  console.log(barcaPlayers);

  const realPlayers = players.filter((player)=>player.club === "Real Madrid");
  console.log(realPlayers);

  const allPlayers = [ ...barcaPlayers, ...realPlayers];

  console.log(allPlayers);