# Task CLI
https://roadmap.sh/projects/task-tracker

`task-cli` is a command line application for managing tasks. It allows users to add, update, delete, and list tasks. In addition, users can mark tasks as in progress or done, and view tasks by their status.

## Requirements

- Node.js installed on the system.
- The application is run from the command line.
- No external libraries are used, only Node.js native APIs.
- Stores tasks in a JSON file (this behavior can be extended).
- Handles errors and edge cases gracefully.

## Functionalities

1. **Add Tasks**: Users can add new tasks.
2. **Update Tasks**: Possibility to update the description of a task.
3. 3. **Delete Tasks**: Users can delete tasks by their ID.
4. **List All Tasks**: List all stored tasks.
5. **Mark a Task as in Progress or Completed**: Change the status of a specific task.
6. **List Tasks by Status**: Pending Tasks, Tasks in Progress, Tasks Completed.

## Installation

1. Clone this repository on your local machine. `git clone https://github.com/CamilaManita/task-tracker`.
2. Navigate to the project directory. `cd TaskTrackerCLI`.
3. Make sure you have Node.js installed on your system. You can verify this with `node -v`.
4. Install the project dependencies. Make sure TypeScript and the necessary type definitions are also installed.
`npm install`
5. Compile the TypeScript code to JavaScript.
`tsc index.ts`

## Usage

- Add a task**: Adds a new task with a description. `task-cli add “Buy milk”`. This will add a new task with the specified description and mark it as pending.

- List all tasks**: Displays all tasks. `task-cli list`. This command displays all tasks, regardless of their status.

- List tasks by status**:
  - Pending: `task-cli list all`. Displays all tasks that have not yet been completed.
  - In progress: `task-cli list in-progress`. Displays all tasks that are currently in progress.
  - Done: `task-cli list done`. Displays all tasks that have been completed.

- Update the status of a task**:
  - Mark a task as in progress: `task-cli mark-in-progress 1`. Changes the status of the task with ID 1 to “In progress”.
  - Mark a task as done: `task-cli mark-done 1`. Changes the status of the task with ID 1 to “Done”.
  - Mark a task as pending: `task-cli mark-pending 1`. Changes the status of the task with ID 1 to “Pending”.

- Delete a task**: Deletes a task by specifying its ID. `task-cli delete 1`. Deletes the task with the specified ID.

- Update the description of a task**: Updates the description of a specific task. `task-cli update 1 “Go to the supermarket”`. Updates the task with ID 1 with the new description provided.

### Examples

1. **Add a task**: `task-cli add “Read a book”`. Expected output: `Task added: Read a book`.

2. **List to-do tasks**: `task-cli list all`. Expected output: `=== Tasks with status: PENDING === ID: 1 Task: Read a book Status: PENDING`.

3. **Mark a task as done**: `task-cli mark-done 1`. Expected output: `Task updated successfully`.

4. **Delete a task**: `task-cli delete 1`. Expected output: `Task deleted successfully`.

## Contributions

Contributions are welcome. You can fork the repository and send a pull request with your improvements.

## License

This project is licensed under the MIT license.