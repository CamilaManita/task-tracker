import { addTask } from './commands/add';
import { updateTask } from './commands/update';
import { deleteTask } from './commands/delete';
import { markTaskInProgress, markTaskDone } from './commands/mark';
import { listTasks } from './commands/list';

const [command, ...args] = process.argv.slice(2);

switch (command) {
  case 'add':
    addTask(args.join(' '));
    break;
  case 'update':
    updateTask(parseInt(args[0]), args.slice(1).join(' '));
    break;
  case 'delete':
    deleteTask(parseInt(args[0]));
    break;
  case 'mark-in-progress':
    markTaskInProgress(parseInt(args[0]));
    break;
  case 'mark-done':
    markTaskDone(parseInt(args[0]));
    break;
  case 'list':
    listTasks(args[0]);
    break;
  default:
    console.log('Unknown command');
}
