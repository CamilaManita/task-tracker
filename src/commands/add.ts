import { readTasks, writeTasks } from '../utils/file';
import { Task } from '../models/task';

export function addTask(description: string): void {
  const tasks = readTasks();
  const newTask: Task = {
    id: tasks.length + 1,
    description,
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`Task added successfully (ID: ${newTask.id})`);
}
