type TeamMember = {
    id: number;
    name: string;
    role: string;
    bio: string;
  };
  
  async function getTeamMember(id: string): Promise<TeamMember> {
    const res = await fetch('http://localhost:3000/api/team');
    const team: TeamMember[] = await res.json();
    return team.find((member) => member.id === parseInt(id))!;
  }
  
  export default async function TeamMemberPage({ params }: { params: { id: string } }) {
    const member = await getTeamMember(params.id);
  
    if (!member) return <div>Member not found</div>;
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">{member.name}</h1>
        <p className="text-lg">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    );
  }
  