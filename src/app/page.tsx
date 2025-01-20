'use client';

import { useState, useEffect } from 'react';

export default function TaskManagement() {
  const [team, setTeam] = useState([]);
  const [newMember, setNewMember] = useState({ name: '', role: '', bio: '' });
  const [loading, setLoading] = useState(false);

  // Fetch team data from the backend
  useEffect(() => {
    fetch('/api/team')
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error(err));
  }, []);

  // Add a new member
  const addMember = async () => {
    if (!newMember.name || !newMember.role || !newMember.bio) {
      alert('Please fill in all fields.');
      return;
    }
    setLoading(true);
    await fetch('/api/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMember),
    });
    setTeam((prev) => [...prev, { id: Date.now(), ...newMember }]);
    setNewMember({ name: '', role: '', bio: '' });
    setLoading(false);
  };

  // Delete a member
  const deleteMember = async (id: number) => {
    setLoading(true);
    await fetch('/api/team', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setTeam((prev) => prev.filter((member) => member.id !== id));
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center"></h1>

      {/* Add Member Form */}
      <div className="form-container">
        <h2 className="text-xl font-bold mb-4">Add New Team Member</h2>
        <input
          type="text"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newMember.role}
          onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
        />
        <textarea
          placeholder="Bio"
          value={newMember.bio}
          onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
        />
        <button className="submit-btn" onClick={addMember} disabled={loading}>
          {loading ? 'Adding...' : 'Submit'}
        </button>
      </div>

      {/* Team Members List */}
      <div className="mt-6">
        {team.map((member) => (
          <div key={member.id} className="card">
            <h2>{member.name}</h2>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>Bio:</strong> {member.bio}</p>
            <button
              className="delete-btn mt-2"
              onClick={() => deleteMember(member.id)}
              disabled={loading}
            >
              {loading ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
