const taskManager = require("./taskManager.js");
const fileHandler = require("./fileHandler.js");
const path = require("path");

let tasks = [{task: "Clean the kitchen!"}, {task: "Clean the bathroom!"}, {task: "Clean the bedroom!"}];
let taskFile = path.join(__dirname, 'tasks.json');
fileHandler.saveTasks(taskFile, tasks);

tasks = fileHandler.loadTasks(taskFile);
tasks = taskManager.addTask(tasks, {task: "Clean the bathroom again!"});
taskManager.listTasks(tasks);
fileHandler.saveTasks(taskFile, tasks);