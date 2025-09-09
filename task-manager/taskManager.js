function addTask (tasks , task) {
    tasks.push(task);
    return tasks;
}

function listTasks(tasks) {
    for (let arrayElement of tasks) {
        console.log(arrayElement.task)
    }
}

module.exports = {addTask : addTask , listTasks : listTasks };