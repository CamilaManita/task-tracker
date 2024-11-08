import * as fs from 'fs';
import { Task } from '../models/task';

const tasksFilePath = './tasks.json';

export function readTasks(): Task[] {
  if (!fs.existsSync(tasksFilePath)) {
    fs.writeFileSync(tasksFilePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(tasksFilePath, 'utf-8');
  return JSON.parse(data) as Task[];
}

export function writeTasks(tasks: Task[]): void {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}
