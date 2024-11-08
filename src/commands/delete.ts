import { readTasks, writeTasks } from '../utils/file';

export function deleteTask(id: number): void {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) {
    console.log(`Task not found (ID: ${id})`);
    return;
  }
  tasks.splice(index, 1);
  writeTasks(tasks);
  console.log(`Task deleted successfully (ID: ${id})`);
}
