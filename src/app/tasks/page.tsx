import { NextPage } from "next";

interface PageProps {
  params: { id: string };
}

const TeamMemberPage: NextPage<PageProps> = async ({ params }) => {
  const { id } = params;

  // Dummy data for demonstration
  const teamMember = {
    id: id,
    name: "John Doe",
    role: "Developer",
    bio: "Experienced in React and Node.js",
  };

  if (!teamMember) {
    return <div className="p-6">Team member not found.</div>;
  }

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
