let tasks = [
    { id: 1, name: "Finish blueprints", completed: false },
    { id: 2, name: "Draw embroidery project", completed: false },
    { id: 3, name: "Find tattoo artist", completed: false },
];

let addNewTask = document.getElementById("addTask");
let taskAdd = document.getElementById("addTask");
let count = document.getElementById("count");
let done = document.getElementById("done");
let taskList = document.getElementsByClassName("taskList");

let addTask = () => {
    let taskName = addNewTask.value;
    if (!taskName) {
        alert("Add a task!");
        return;
    }
    let lastTask = tasks[tasks.lenght - 1];
    let newTask = {
        id: lastTask ? lastTask.id + 1 : 1,
        name: taskName,
        completed: false,
    };
    tasks.push(newTask);
    // renderTasks();
};

taskAdd.addEventListener("click", addTask);

let changeStatus = (id) => {
    let taskIndex = tasks.findIndex((task) => task.id === id);
    if (tasks[taskIndex].completed == false) {
        let newItem = {
            id: tasks[taskIndex].id,
            name: tasks[taskIndex].name,
            completed: true
        };
        tasks.splice(taskIndex, 1, newItem);
    }
    else {
        let newItem = {
            id: tasks[taskIndex].id,
            name: tasks[taskIndex].name,
            completed: false
        };
        tasks.splice(taskIndex, 1, newItem);
    }
    renderTask();
};

let renderTask = () => {
    let html = "";
    let inputCheck = "";
    let doneCount = [];
    tasks.forEach((task) => {
        inputCheck = completed
            ? `<span class="completed" onclick="changeStatus(${task.id})">${task.name}</span>`
            : `<span onclick= "changeStatus(${task.id})">${task.name}</span`;
        html += `
        <article class= "check">
            <p>${task.id}</p>
            <p>${inputCheck} <i class= fa-solid fa-circle-minus" onclick= "deleteTask(${task.id}"></i></p>
        </article>
        `;
        if (task.completed === true) {
            doneCount.push(task);
        }
    });
    taskList.innerHTML = html;
    count.innerHTML = tasks.length;
    done.innerHTML = doneCount.length;
};

renderTask();