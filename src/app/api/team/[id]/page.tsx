// src/app/api/team/[id]/page.tsx
import { NextPage } from 'next';

interface PageProps {
  params: {
    id: string;
  };
}

const TeamMemberPage: NextPage<PageProps> = ({ params }) => {
  const { id } = params;

  // Fetch data or process `id` here (dummy data used as an example)
  const teamMember = {
    id: id,
    name: "John Doe",
    role: "Developer",
    bio: "Experienced in React and Node.js",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Team Member Details</h1>
      <div className="p-4 border rounded shadow hover:bg-gray-100">
        <h2 className="text-lg font-semibold">{teamMember.name}</h2>
        <p>{teamMember.role}</p>
        <p className="text-sm text-gray-600">{teamMember.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberPage;
