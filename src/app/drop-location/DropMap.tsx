import React, { useEffect, useState } from "react";
import MatchDropdown from "../components/MatchDropdown";
import ClickableDropLocationComponent from "../components/ClickableDropLocationComponent";

const matchesDropLocations: Record<string, string> = {
  "Match 1": "/bmps2024/d1-m1-erangle.png",
  "Match 2": "/bmps2024/d1-m2-miramar.png",
  "Match 3": "/bmps2024/d1-m3-sanhok.png",
  "Match 4": "/bmps2024/d1-m4-vikendi.png",
  "Match 5": "/bmps2024/d1-m5-miramar.png",
  "Match 6": "/bmps2024/d1-m6-erangle.png",
};

const matchDropFightLocations = {
  "Day 1": {
    "Match 1": {
      match: "Match 1",
      dropMapImage: "/bmps2024/d1-m1-erangle.png",
      dropFightLocations: [
        {
          fight1: {
            top: "55%",
            left: "30%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=1h35m6s",
          },
        },
      ],
    },
    "Match 2": {
      match: "Match 2",
      dropMapImage: "/bmps2024/d1-m2-miramar.png",
      dropFightLocations: [],
    },
    "Match 3": {
      match: "Match 3",
      dropMapImage: "/bmps2024/d1-m3-sanhok.png",
      dropFightLocations: [
        {
          fight1: {
            top: "62%",
            left: "27%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h30m3s",
          },
        },
        {
          fight1: {
            top: "58%",
            left: "50%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h33m28s",
          },
        },
      ],
    },
    "Match 4": {
      match: "Match 4",
      dropMapImage: "/bmps2024/d1-m4-vikendi.png",
      dropFightLocations: [
        {
          fight1: {
            top: "39%",
            left: "38%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=4h11m50s",
          },
        },
      ],
    },
    "Match 5": {
      match: "Match 5",
      dropMapImage: "/bmps2024/d1-m5-miramar.png",
      dropFightLocations: [
        {
          fight1: {
            top: "25%",
            left: "57%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=5h1m37s",
          },
        },
      ],
    },
    "Match 6": {
      match: "Match 6",
      dropMapImage: "/bmps2024/d1-m6-erangle.png",
      dropFightLocations: [],
    },
  },
  "Day 2": {
    "Match 7": {
      match: "Match 7",
      dropMapImage: "/bmps2024/d1-m1-erangle.png",
      dropFightLocations: [
        {
          fight1: {
            top: "55%",
            left: "30%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=1h35m6s",
          },
        },
      ],
    },
    "Match 8": {
      match: "Match 8",
      dropMapImage: "/bmps2024/d1-m2-miramar.png",
      dropFightLocations: [],
    },
    "Match 9": {
      match: "Match 9",
      dropMapImage: "/bmps2024/d1-m3-sanhok.png",
      dropFightLocations: [
        {
          fight1: {
            top: "62%",
            left: "27%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h30m3s",
          },
        },
        {
          fight1: {
            top: "58%",
            left: "50%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h33m28s",
          },
        },
      ],
    },
    "Match 10": {
      match: "Match 10",
      dropMapImage: "/bmps2024/d1-m4-vikendi.png",
      dropFightLocations: [
        {
          fight1: {
            top: "39%",
            left: "38%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=4h11m50s",
          },
        },
      ],
    },
    "Match 11": {
      match: "Match 11",
      dropMapImage: "/bmps2024/d1-m5-miramar.png",
      dropFightLocations: [
        {
          fight1: {
            top: "25%",
            left: "57%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=5h1m37s",
          },
        },
      ],
    },
    "Match 12": {
      match: "Match 12",
      dropMapImage: "/bmps2024/d1-m6-erangle.png",
      dropFightLocations: [],
    },
  },
  "Day 3": {
    "Match 13": {
      match: "Match 13",
      dropMapImage: "/bmps2024/d1-m1-erangle.png",
      dropFightLocations: [
        {
          fight1: {
            top: "55%",
            left: "30%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=1h35m6s",
          },
        },
      ],
    },
    "Match 14": {
      match: "Match 14",
      dropMapImage: "/bmps2024/d1-m2-miramar.png",
      dropFightLocations: [],
    },
    "Match 15": {
      match: "Match 15",
      dropMapImage: "/bmps2024/d1-m3-sanhok.png",
      dropFightLocations: [
        {
          fight1: {
            top: "62%",
            left: "27%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h30m3s",
          },
        },
        {
          fight1: {
            top: "58%",
            left: "50%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=3h33m28s",
          },
        },
      ],
    },
    "Match 16": {
      match: "Match 16",
      dropMapImage: "/bmps2024/d1-m4-vikendi.png",
      dropFightLocations: [
        {
          fight1: {
            top: "39%",
            left: "38%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=4h11m50s",
          },
        },
      ],
    },
    "Match 17": {
      match: "Match 17",
      dropMapImage: "/bmps2024/d1-m5-miramar.png",
      dropFightLocations: [
        {
          fight1: {
            top: "25%",
            left: "57%",
            videoLink: "https://www.youtube.com/watch?v=te6IB2qJkbc&t=5h1m37s",
          },
        },
      ],
    },
    "Match 18": {
      match: "Match 18",
      dropMapImage: "/bmps2024/d1-m6-erangle.png",
      dropFightLocations: [],
    },
  },
};

type DayKey = keyof typeof matchDropFightLocations;
type MatchKey = keyof (typeof matchDropFightLocations)[DayKey];

type SelectedDayProps = {
  selectedDay: DayKey;
};

const DropMap = ({ selectedDay }: SelectedDayProps) => {
  const [selectedMatch, setSelectedMatch] = useState<MatchKey>("Match 1" as MatchKey);
  const [selectedMatchDropMap, setSelectedMatchDropMap] = useState<string>("Match 1");

  // Update selectedMatchDropMap when selectedDay or selectedMatch changes
  useEffect(() => {
    // Update selectedMatch based on selectedDay and selectedMatchDropMap
    setSelectedMatch("Match 1" as MatchKey); // Reset selected match to "Match 1" for each new day
    setSelectedMatchDropMap(matchesDropLocations["Match 1"]);
  }, [selectedDay]); // Effect runs when selectedDay changes

  // Consolidated handler for match selection
  const handleMatchSelect = (match: string) => {
    if (match in matchDropFightLocations[selectedDay]) {
      setSelectedMatch(match as MatchKey);
      setSelectedMatchDropMap(matchesDropLocations[match] || "Match 1");
    }
  };

  return (
    <div className="w-[100%]">
      <div className="flex justify-start mr-12 mt-6 mb-4">
        <MatchDropdown onMatchSelect={handleMatchSelect} selectedDay={selectedDay} />
      </div>
      {selectedMatchDropMap && (
        <ClickableDropLocationComponent
          matchData={matchDropFightLocations[selectedDay][selectedMatch]}
          selectedDay={selectedDay}
        />
      )}
    </div>
  );
};

export default DropMap;