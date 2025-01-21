import { NextPage } from 'next';

interface PageProps {
  params: {
    id: string; // Ensure this matches the type expected for the `id`
  };
}

const TeamMemberPage: NextPage<PageProps> = ({ params }) => {
  const { id } = params;

  // Example logic: Fetch team member details based on `id`
  const fetchMemberDetails = async (id: string) => {
    const response = await fetch(`/api/team/${id}`);
    const data = await response.json();
    return data;
  };

  // Example static data for demonstration
  const teamMember = {
    id,
    name: 'John Doe',
    role: 'Developer',
    bio: 'Experienced in building scalable applications.',
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{teamMember.name}</h1>
      <p className="text-lg">{teamMember.role}</p>
      <p>{teamMember.bio}</p>
    </div>
  );
};

export default TeamMemberPage;
