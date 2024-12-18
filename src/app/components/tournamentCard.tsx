import Link from "next/link";
import React from "react";

export interface Tournament {
  id: number;
  name: string;
  description: string;
  image: string;
}

const tournamentCard = (tournament: Tournament) => {
  return (
    <Link key={tournament.id} href={`/tournament/${tournament.id}`}>
      <div
        className="min-h-[200px] max-w-[350px] rounded-lg shadow bg-cover bg-center"
        style={{
          backgroundImage: `url(${tournament.image})`,
          backgroundSize: "cover",
          width: "100%",
        }}
      ></div>
      <h3 className="ml-[35%] mt-4 font-bold text-slate-500">{tournament.name}</h3>
    </Link>
  );
};

export default tournamentCard;
