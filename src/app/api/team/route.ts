import { NextResponse } from 'next/server';

let team = [
  { id: 1, name: 'Govind', role: 'Developer', bio: 'Expert in Node.js.' },
  { id: 2, name: 'Prince', role: 'Designer', bio: 'Creative UI/UX designs.' },
];

export async function GET() {
  return NextResponse.json(team);
}

export async function POST(req: Request) {
  const newMember = await req.json();
  team.push({ id: team.length + 1, ...newMember });
  return NextResponse.json({ message: 'Member added successfully', team });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  team = team.filter((member) => member.id !== id);
  return NextResponse.json({ message: 'Member deleted successfully', team });
}
