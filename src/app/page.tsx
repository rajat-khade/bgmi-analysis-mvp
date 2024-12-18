import TournamentCard from './components/tournamentCard'
const tournaments = [
  { id: 1, name: "BMPS 2024", description: "Description for BMPS 2024", image: '/bmps2024/bmps2024.webp' },
  { id: 2, name: "BGIS 2024", description: "Description for BGIS 2024", image: '/bgis2024/bgis2024.jpg' },
  { id: 3, name: "BGMS 2024", description: "Description for BGMS 2024", image: '/bgms2024/bgms2024.webp' },
];

export default function Home() {
  return (
    <div className="justify-center">
      <div className="m-20 px-20 grid sm:grid-cols-3 gap-4 align-items-center">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} {...tournament}/>
        ))}
      </div>
    </div>
  );
}
