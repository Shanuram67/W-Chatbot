import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import crimeData from './crimeData.js';
import Navbar from './NavBar';

const SafeAreaAnalysis = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [year, setYear] = useState('2001');
  const [selectedData, setSelectedData] = useState(null);
  const [error, setError] = useState(null);
  const [safetyScore, setSafetyScore] = useState(null);
  const [safetyStatus, setSafetyStatus] = useState(null);

  const analyzeSafety = () => {
    setError(null);
    setSafetyScore(null);
    setSafetyStatus(null);
    console.log("Analyzing safety...");
  console.log("State:", state);
  console.log("District:", district);
  console.log("Year:", year);

    if (!state || !district || !year) {
      setError('Please fill in all fields.');
      return;
    }

    // Ensure crimeData is an array before using find
    const filteredData = Array.isArray(crimeData) 
    ? crimeData.find(
        (entry) => {
          console.log("Checking entry:", entry);
          return entry['STATE/UT'].toUpperCase() === state.toUpperCase() &&
                 entry.DISTRICT.toUpperCase() === district.toUpperCase() &&
                 entry.YEAR === year;
        }
      )
    : null;

  console.log("Filtered data:", filteredData);

    const crimeTypes = ['MURDER', 'RAPE', 'ROBBERY', 'THEFT'];
    const crimeStats = {};
    let totalCrimes = 0;

    crimeTypes.forEach((type) => {
      crimeStats[type] = parseInt(filteredData[type]) || 0;
      totalCrimes += crimeStats[type];
    });

    setSelectedData(crimeStats);

    const maxPossibleCrimes = 1000;
    const calculatedSafetyScore = 100 - (totalCrimes / maxPossibleCrimes) * 100;
    setSafetyScore(calculatedSafetyScore);

    if (calculatedSafetyScore >= 80) setSafetyStatus('Very Safe');
    else if (calculatedSafetyScore >= 60) setSafetyStatus('Safe');
    else if (calculatedSafetyScore >= 40) setSafetyStatus('Moderate');
    else if (calculatedSafetyScore >= 20) setSafetyStatus('Unsafe');
    else setSafetyStatus('Very Unsafe');
  };

  const chartData = selectedData
    ? Object.entries(selectedData).map(([name, value]) => ({ name, value: Number(value) }))
    : [];

  const getProgressBarColor = (score) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-blue-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Safe Area Analysis</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  id="state"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={state}
                  onChange={(e) => setState(e.target.value.toUpperCase())}
                  placeholder="Enter state"
                />
              </div>
              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
                <input
                  type="text"
                  id="district"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value.toUpperCase())}
                  placeholder="Enter district"
                />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                <select
                  id="year"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  {Array.from({ length: 12 }, (_, i) => 2001 + i).map((year) => (
                    <option key={year} value={year.toString()}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="button"
              onClick={analyzeSafety}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Analyze Safety
            </button>
          </form>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8" role="alert">
            <p>{error}</p>
          </div>
        )}

        {selectedData && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Crime Statistics ({year})</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {safetyScore !== null && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Safety Analysis</h2>
            <div className="mb-4">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${safetyScore}%` }}
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getProgressBarColor(safetyScore)}`}
                ></div>
              </div>
            </div>
            <p className="text-lg font-medium">
              Safety Score: <span className="text-blue-600">{safetyScore.toFixed(2)}%</span>
            </p>
            <p className="text-lg font-medium">
              Safety Status: <span className={`font-bold ${getProgressBarColor(safetyScore).replace('bg-', 'text-')}`}>{safetyStatus}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafeAreaAnalysis;