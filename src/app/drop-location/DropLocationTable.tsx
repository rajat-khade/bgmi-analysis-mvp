export default function DropLocationTable() {
    const tableData = [
      {
        team: "Numen Esports",
        players: ["Ash", "Owais", "Mafia36", "Ninjuu", "Omega", "Hector (coach)"],
        dropLocations: [
          "Ferry pier split",
          "El Azhar",
          "Bootcamp",
          "Vihar split",
          "El Azhar split",
          "Ferry pier split",
        ],
      },
      {
        team: "TWOB",
        players: ["Prince", "Sarvit", "Syrax", "Legit"],
        dropLocations: [
          "Farm split",
          "Power grid split",
          "Pai nan",
          "Cosmodrome",
          "Power grid split",
          "Farm split",
        ],
      },
      {
        team: "Phoenix Esports",
        players: ["SnowJOD", "Shayaan", "Honey", "Goku"],
        dropLocations: [
          "Water city + Rozhok",
          "Impala split",
          "Between Pai nan & Quarry",
          "Peshkova",
          "Impala",
          "Water city + Rozhok",
        ],
      },
      {
        team: "Team Versatile",
        players: ["Saumraj", "Aquanox", "Raiden", "Troye", "InfinityOP", "Xypex (coach)"],
        dropLocations: [
          "Pochinki",
          "El pozo",
          "Kampong, Docks & cave wide split",
          "Cantra",
          "El pozo",
          "Pochinki",
        ],
      },
      {
        team: "Medal Esports",
        players: ["Encore", "Paradox", "Topdawg", "SahilOPAF", "Amit (coach)"],
        dropLocations: [
          "Novorepnoye",
          "Monte nuevo",
          "Paradise",
          "Dobro Mesto",
          "Monte nuevo",
          "Novorepnoye",
        ],
      },
      {
        team: "Team Limra",
        players: ["GokulWNL", "PokoWNL", "Hesperos", "DragonOP"],
        dropLocations: [
          "Quarry split",
          "Valle Del Mar",
          "Sahmee & Na kham",
          "Volnova",
          "Valle Del Mar",
          "Stalber",
        ],
      },
      {
        team: "Reckoning Esports",
        players: ["Immortal", "GravityJOD", "Hunterz", "Viper", "Dionysus"],
        dropLocations: [
          "Georgopol main city",
          "Campo militar & Tierra bronca",
          "Paradise",
          "Peshkova",
          "Campo militar & Tierra bronca",
          "Shelter & Prison",
        ],
      },
      {
        team: "TeamXSpark",
        players: ["Shadow7", "Spraygod", "Sarang", "Jokerr", "Osmium (coach)"],
        dropLocations: [
          "Yashnaya polyana",
          "San Martin",
          "Ruins split",
          "Zabava",
          "San Martin",
          "Yashnaya polyana",
        ],
      },
      {
        team: "Inferno Squad",
        players: ["JatinOG", "Zeref", "PmwiIGL", "Goten", "OwenOG"],
        dropLocations: [
          "Georgopol back city",
          "Ruins split",
          "Tat mok split",
          "Porto & Zabava split",
          "Puerto paraíso",
          "Georgopol back city",
        ],
      },
      {
        team: "Ignite gaming",
        players: ["Sarkar26", "Hulk07", "Aizen", "Arora", "VermiTHOR"],
        dropLocations: [
          "Mylta",
          "Water treatment",
          "Camp bravo & mongnai wide split",
          "Trevno",
          "Water treatment",
          "Mylta",
        ],
      },
      {
        team: "GodLike Esports",
        players: ["Jonathan", "Admino", "Simp", "Punkk", "Jelly (sub)", "Zgod (sub)"],
        dropLocations: [
          "School + apartments",
          "Cruz del Valle",
          "Between Pai nan & Quarry",
          "Cement factory wide split",
          "Water treatment",
          "School + apartments",
        ],
      },
      {
        team: "Orangutan",
        players: ["AKop", "WizzGOD", "Attanki", "Aaru", "Veyron"],
        dropLocations: [
          "Mylta power",
          "Chumacera",
          "Lakawi wide split",
          "Goroka",
          "Chumacera",
          "Mylta power",
        ],
      },
      {
        team: "Team Bliss",
        players: ["Eggy", "Sam", "Aj", "Turbo"],
        dropLocations: [
          "Zharki",
          "La cobreria",
          "Khao & mongnai",
          "Movatra",
          "La coberia split",
          "Lipovka",
        ],
      },
      {
        team: "Hyderabad Hydras",
        players: ["Moksh", "Insidious", "Crypto", "Termi"],
        dropLocations: [
          "Gatka split",
          "Pecado",
          "Camp Charlie",
          "Villa",
          "Pecado",
          "Severny",
        ],
      },
      {
        team: "8BIT",
        players: ["Juicy", "Mighty", "Mac", "Aditya"],
        dropLocations: [
          "Military base",
          "Los leones",
          "Ruins",
          "Goroka",
          "Los leones",
          "Military base",
        ],
      },
      {
        team: "Silly Esports",
        players: ["RanveerOG", "Akshu", "Hydrooo", "Inferno"],
        dropLocations: [
          "Primorsk",
          "Minas generales & graveyard",
          "Ruins",
          "Tovar",
          "Minas generales & graveyard",
          "Kameshki & stable",
        ],
      },
    ];
  
    return (
        <div className="pt-4">
          <div className="h-[87vh] overflow-y-auto border border-gray-300 rounded-lg">
            <table className="w-full border-collapse text-sm text-left">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="whitespace-nowrap overflow-hidden text-ellipsis border border-gray-300 px-4 py-2">Team No.</th>
                  <th className="whitespace-nowrap overflow-hidden text-ellipsis border border-gray-300 px-4 py-2">Team Name</th>
                  <th className="whitespace-nowrap overflow-hidden text-ellipsis border border-gray-300 px-4 py-2">Players</th>
                  <th className="whitespace-nowrap overflow-hidden text-ellipsis border border-gray-300 px-4 py-2">Drop M1-Erangle</th>
                  <th className="whitespace-nowrap overflow-hidden text-ellipsis border border-gray-300 px-4 py-2">Drop M2-Miramar</th>
                  <th className="whitespace-nowrap overflow-hidden text-ellipsis border border-gray-300 px-4 py-2">Drop M3-Sanhok</th>
                  <th className="whitespace-nowrap overflow-hidden text-ellipsis border border-gray-300 px-4 py-2">Drop M4-Vikendi</th>
                  <th className="whitespace-nowrap overflow-hidden text-ellipsis border border-gray-300 px-4 py-2">Drop M5-Miramar</th>
                  <th className="whitespace-nowrap overflow-hidden text-ellipsis border border-gray-300 px-4 py-2">Drop M6-Erangle</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((team, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-2">{team.team}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {team.players.map((player, i) => (
                        <div key={i}>{player}</div>
                      ))}
                    </td>
                    {team.dropLocations.map((location, i) => (
                      <td key={i} className="border border-gray-300 px-4 py-2">
                        {location}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  }
  