import React, { useState, useEffect } from 'react';
import customGptProjects from './../data/mocked-data';

export default function Cards() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Simulating fetching data from an external source
      try {
        const data = await import('../data/mocked-data');
        setProjects(data.default);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            We have the best GPTs in the market
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome GPT partners
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img className="object-center object-cover h-auto w-full" src={project.image} alt={project.name} />
              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">{project.name}</p>
                <p className="text-base text-gray-400 font-normal">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
