import { readTasks, writeTasks } from '../utils/file';
import { Task } from '../models/task';

export function markTaskInProgress(id: number): void {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) {
    console.log(`Task not found (ID: ${id})`);
    return;
  } 
  task.status = 'in-progress';
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log(`Task marked as in progress (ID: ${id})`);
}

export function markTaskDone(id: number): void {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) {
    console.log(`Task not found (ID: ${id})`);
    return;
  }
  task.status = 'done';
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log(`Task marked as done (ID: ${id})`);
}
