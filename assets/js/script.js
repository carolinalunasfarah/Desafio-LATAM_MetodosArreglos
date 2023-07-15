let tasks = [
    { id: 1, name: "Finish blueprints", completed: false },
    { id: 2, name: "Draw embroidery project", completed: false },
    { id: 3, name: "Find tattoo artist", completed: false },
];

let inputAdd = document.querySelector("#inputAdd");
let btnAdd = document.querySelector("#btnAdd");
let count = document.querySelector("#count");
let done = document.querySelector("#done");
let taskList = document.querySelector(".taskList");

let taskAdd = () => {
    let taskName = inputAdd.value;
    if (!taskName) {
        alert ("Add a task!");
        return false;
    }
    let lastTask = tasks[tasks.length-1];
    let newTask = {
        id: lastTask ? lastTask.id + 1 : 1,
        name: taskName,
        completed: false,
    };
    tasks.push(newTask);
    inputAdd.value = "";
    renderTasks();
};

btnAdd.addEventListener("click", taskAdd);

const changeStatus = (id) => {
    let taskIndex = tasks.findIndex((task) => task.id === id);
    if (tasks[taskIndex].completed == false) {
        let newObject = {
            id: tasks[taskIndex].id,
            name: tasks[taskIndex].name,
            completed:true,
        };
        tasks.splice(taskIndex, 1, newObject);
    }
    else {
        let newObject = {
            id: tasks[taskIndex].id,
            name: tasks[taskIndex].name,
            completed:false,
        };
        tasks.splice(taskIndex, 1, newObject);
    }
    renderTasks();
}

let renderTasksTasks = () => {
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

renderTasks();