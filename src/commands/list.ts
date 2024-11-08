import { readTasks } from "../utils/file";

export function listTasks(status?: string): void {
  const tasks = readTasks();
  if (!status) {
    console.log(tasks);
    return;
  }
  const filteredTasks = tasks.filter((t) => t.status === status);
  console.log(filteredTasks);
}
