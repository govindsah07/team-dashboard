"use client";
import { useEffect, useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export default function Home() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Dummy data for demonstration
    const dummyData = [
      { id: "1", name: "Alice", role: "Developer", bio: "React & Node.js" },
      { id: "2", name: "Bob", role: "Designer", bio: "UI/UX Design" },
      { id: "3", name: "Charlie", role: "Manager", bio: "Project Management" },
    ];
    setTeam(dummyData);
  }, []);

  const filteredTeam = team.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Team Dashboard</h1>
      <input
        type="text"
        placeholder="Search by name or role"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded mb-4 w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredTeam.map((member) => (
          <a
            key={member.id}
            href={`/team/${member.id}`}
            className="p-4 border rounded shadow hover:bg-gray-100"
          >
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p>{member.role}</p>
            <p className="text-sm text-gray-600">{member.bio}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
