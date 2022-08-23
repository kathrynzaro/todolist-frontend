import { checkUser, logoutUser, addNewTask } from '../fetch-utils.js';

checkUser();

const logout = document.getElementById('logout');
const taskForm = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTask(task) {
    const li = document.createElement('li');
    li.textContent = `${task.description}`;
    return li;
}

function displayTasks() {
    taskList.textContent = '';
    for (let task of tasks) {
        const li = renderTask(task);
        taskList.appendChild(li);
    }
}

logout.addEventListener('click', async () => {
    await logoutUser();
});

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    const newTask = await addNewTask({
        description: formData.get('description'),
    });
    tasks.push(newTask);
    displayTasks();
    taskForm.reset();
});
