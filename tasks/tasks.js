import {
    getUser,
    checkUser,
    logoutUser,
    addNewTask,
    getTasks,
    completeTasks,
    deleteTasks,
} from '../fetch-utils.js';

checkUser();

const logout = document.getElementById('logout');
const taskForm = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let tasks = [];

async function onLoad() {
    const user = await getUser();
    if (!user) location.replace('../');
    tasks = await getTasks();
    displayTasks();
}

function renderTask(task) {
    const li = document.createElement('li');
    li.textContent = `${task.description}`;

    const button = document.createElement('button');
    button.textContent = '';
    if (task.complete) {
        button.classList.add('complete');
        li.classList.add('completed-text');
    }
    button.addEventListener('click', () => {
        handleComplete(task.id, { complete: true });
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
        handleDelete(task.id);
    });

    li.append(button, deleteBtn);
    return li;
}

async function handleComplete(id, completed) {
    await completeTasks(id, completed);
    onLoad();
}

async function handleDelete(id) {
    await deleteTasks(id);
    onLoad();
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

onLoad();
