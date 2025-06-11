import React from 'react';
import AppCard from '../components/AppCard';

const modules = [
  { name: "Church", icon: "📖" },
  { name: "Retail", icon: "🛒" },
  { name: "Health", icon: "🏥" },
  { name: "Education", icon: "📚" },
  { name: "Logistics", icon: "🚛" },
  { name: "Odd Jobs", icon: "💼" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">BizApp Container</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {modules.map((mod) => (
          <AppCard key={mod.name} name={mod.name} icon={mod.icon} />
        ))}
      </div>
    </div>
  );
}
