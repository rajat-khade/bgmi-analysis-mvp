'use client';
import React, { useState, useMemo } from 'react';

export type SelectedDayProps = {
  selectedDay: string;
  onMatchSelect: (match: string) => void;
};

const MatchDropdown: React.FC<SelectedDayProps> = ({ onMatchSelect, selectedDay }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define matches for each day
  const matchesListDay1 = ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6'];
  const matchesListDay2 = ['Match 7', 'Match 8', 'Match 9', 'Match 10', 'Match 11', 'Match 12'];
  const matchesListDay3 = ['Match 13', 'Match 14', 'Match 15', 'Match 16', 'Match 17', 'Match 18'];

  // Dynamically compute matches based on selectedDay
  const matchesList = useMemo(() => {
    switch (selectedDay) {
      case 'Day 1':
        return matchesListDay1;
      case 'Day 2':
        return matchesListDay2;
      case 'Day 3':
        return matchesListDay3;
      default:
        return [];
    }
  }, [selectedDay]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMatchSelect = (match: string) => {
    onMatchSelect(match); // Pass the selected match to the parent
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        type="button"
        className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={toggleDropdown}
      >
        Matches ({selectedDay})
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
          <div className="py-1">
            {matchesList.map((match, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleMatchSelect(match)}
              >
                {match}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchDropdown;
