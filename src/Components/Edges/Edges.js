import React from 'react';
import AchieversEdge from './AchieversITEdge';

const Edges = () => {
  const edgesData = [
    {
      id: 1,
      name: "circle",
      title: 'Real Time Doubt Resolution',
      description: 'With Live Instructors',
      icon: '/SVG/circle-check-solid.svg',
    },
    {
      id: 2,
      name: "infinity",
      title: 'Real Time Doubt Resolution',
      description: 'With Live Instructors',
      icon: '/SVG/infinity-solid.svg',
    },
    {
      id: 3,
      name: "fulltime",
      title: 'Real Time Doubt Resolution',
      description: 'With Live Instructors',
      icon: '/SVG/24_By_7.png',
    },
    {
      id: 4,
      name: "chart-line",
      title: 'Real Time Doubt Resolution',
      description: 'With Live Instructors',
      icon: '/SVG/chart-line-solid.svg',
    },
  ]
  return (
    <div>
      <AchieversEdge edges={edgesData}/>
    </div>
  );
};

export default Edges;
