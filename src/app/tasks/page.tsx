'use client';

import { useState } from 'react';

type Task = {
  id: number;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Completed';
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'To Do' });

  const addTask = () => {
    setTasks([
      ...tasks,
      { id: Date.now(), ...newTask, status: newTask.status as Task['status'] },
    ]);
    setNewTask({ title: '', description: '', status: 'To Do' });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <button
          onClick={addTask}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="p-4 border rounded shadow mb-2">
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <p className="text-sm text-gray-600">Status: {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
