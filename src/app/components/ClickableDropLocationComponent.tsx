'use client'
import React from "react";

// const matchDropFightLocations = {
//   "Day 1": {
//     "Match 1": {
//       match: "Match 1",
//       dropMapImage: "/bmps2024/d1-m1-erangle.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "55%",
//             left: "30%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=1h35m6s",
//           },
//         },
//       ],
//     },
//     "Match 2": {
//       match: "Match 2",
//       dropMapImage: "/bmps2024/d1-m2-miramar.png",
//       dropFightLocations: [],
//     },
//     "Match 3": {
//       match: "Match 3",
//       dropMapImage: "/bmps2024/d1-m3-sanhok.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "62%",
//             left: "27%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h30m3s",
//           },
//         },
//         {
//           fight1: {
//             top: "58%",
//             left: "50%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h33m28s",
//           },
//         },
//       ],
//     },
//     "Match 4": {
//       match: "Match 4",
//       dropMapImage: "/bmps2024/d1-m4-vikendi.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "39%",
//             left: "38%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=4h11m50s",
//           },
//         },
//       ],
//     },
//     "Match 5": {
//       match: "Match 5",
//       dropMapImage: "/bmps2024/d1-m5-miramar.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "25%",
//             left: "57%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=5h1m37s",
//           },
//         },
//       ],
//     },
//     "Match 6": {
//       match: "Match 6",
//       dropMapImage: "/bmps2024/d1-m6-erangle.png",
//       dropFightLocations: [],
//     },
//   },
//   "Day 2": {
//     "Match 7": {
//       match: "Match 7",
//       dropMapImage: "/bmps2024/d1-m1-erangle.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "55%",
//             left: "30%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=1h35m6s",
//           },
//         },
//       ],
//     },
//     "Match 8": {
//       match: "Match 8",
//       dropMapImage: "/bmps2024/d1-m2-miramar.png",
//       dropFightLocations: [],
//     },
//     "Match 9": {
//       match: "Match 9",
//       dropMapImage: "/bmps2024/d1-m3-sanhok.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "62%",
//             left: "27%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h30m3s",
//           },
//         },
//         {
//           fight1: {
//             top: "58%",
//             left: "50%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h33m28s",
//           },
//         },
//       ],
//     },
//     "Match 10": {
//       match: "Match 10",
//       dropMapImage: "/bmps2024/d1-m4-vikendi.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "39%",
//             left: "38%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=4h11m50s",
//           },
//         },
//       ],
//     },
//     "Match 11": {
//       match: "Match 11",
//       dropMapImage: "/bmps2024/d1-m5-miramar.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "25%",
//             left: "57%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=5h1m37s",
//           },
//         },
//       ],
//     },
//     "Match 12": {
//       match: "Match 12",
//       dropMapImage: "/bmps2024/d1-m6-erangle.png",
//       dropFightLocations: [],
//     },
//   },
//   "Day 3": {
//     "Match 13": {
//       match: "Match 13",
//       dropMapImage: "/bmps2024/d1-m1-erangle.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "55%",
//             left: "30%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=1h35m6s",
//           },
//         },
//       ],
//     },
//     "Match 14": {
//       match: "Match 14",
//       dropMapImage: "/bmps2024/d1-m2-miramar.png",
//       dropFightLocations: [],
//     },
//     "Match 15": {
//       match: "Match 15",
//       dropMapImage: "/bmps2024/d1-m3-sanhok.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "62%",
//             left: "27%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h30m3s",
//           },
//         },
//         {
//           fight1: {
//             top: "58%",
//             left: "50%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h33m28s",
//           },
//         },
//       ],
//     },
//     "Match 16": {
//       match: "Match 16",
//       dropMapImage: "/bmps2024/d1-m4-vikendi.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "39%",
//             left: "38%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=4h11m50s",
//           },
//         },
//       ],
//     },
//     "Match 17": {
//       match: "Match 17",
//       dropMapImage: "/bmps2024/d1-m5-miramar.png",
//       dropFightLocations: [
//         {
//           fight1: {
//             top: "25%",
//             left: "57%",
//             videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=5h1m37s",
//           },
//         },
//       ],
//     },
//     "Match 18": {
//       match: "Match 18",
//       dropMapImage: "/bmps2024/d1-m6-erangle.png",
//       dropFightLocations: [],
//     },
//   },
// };

// Define types for fight location and match data
interface FightLocation {
  top: string;
  left: string;
  videoLink: string;
}

interface MatchData {
  match: string;
  dropMapImage: string;
  dropFightLocations: {
    fight1: FightLocation;
  }[];
}

// Props interface for the component
interface ClickableDropLocationComponentProps {
  matchData: MatchData | undefined; // Handle undefined safely
  selectedDay: string
}

const ClickableDropLocationComponent: React.FC<
  ClickableDropLocationComponentProps
> = ({ matchData, selectedDay }) => {
  // Safely handle if no data is passed
  if (!matchData) {
    return (
      <div className="text-center text-gray-500">No match data available {selectedDay}</div>
    );
  }

  return (
    <div className="relative mx-auto w-[800px] h-auto border border-gray-300 rounded-lg overflow-hidden shadow-md">
      {/* Match Header */}
      <h2 className="text-center text-lg font-semibold">
        {selectedDay} {matchData.match}
      </h2>

      {/* Background Image */}
      <img
        src={matchData.dropMapImage}
        alt={`Map for ${matchData.match}`}
        className="w-full h-full object-cover"
      />

      {/* Clickable Fight Locations */}
      {matchData.dropFightLocations.map((fight, index) => {
        const { top, left, videoLink } = fight.fight1;

        return (
          <div
            key={index}
            className="absolute w-16 h-16 bg-red-500 rounded-full opacity-80 cursor-pointer
                 shadow-[0_0_10px_5px_rgba(255,0,0,0.7)] animate-pulse hover:scale-110 transition-transform"
            style={{ top, left }}
            onClick={() => window.open(videoLink, "_blank")}
          />
        );
      })}
    </div>
  );
};

export default ClickableDropLocationComponent;
