import { readTasks, writeTasks } from '../utils/file';

export function updateTask(id: number, description: string): void {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) {
    console.log(`Task not found (ID: ${id})`);
    return;
  }
  task.description = description;
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log(`Task updated successfully (ID: ${id})`);
}
