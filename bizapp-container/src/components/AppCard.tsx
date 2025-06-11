import React from 'react';

interface AppCardProps {
  name: string;
  icon: string;
}

export default function AppCard({ name, icon }: AppCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="font-medium text-center">{name}</div>
    </div>
  );
}
