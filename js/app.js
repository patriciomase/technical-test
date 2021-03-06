
function loadTasks(taskList){
    let container = document.getElementById('container');
    container.innerHTML='';

    taskList.forEach(function(task, i) {
        let divTask = document.createElement('div');
        divTask.className = "task";
        divTask.innerHTML = `
            ${task.img ? "<img src='" + task.img + "' />":""}
            <h4> <input type="checkbox" ${task.completed ? "checked" : ""} title="check completed">  ${task.title + ' ' + i}</h4>
            <span>created on ${task.createdOn} by ${task.createdBy}</span>
            <p>${task.description}</p>
            <span>Due on ${task.dueDate}</span>
        `;

        if(task.completed)
            divTask.classList.add("completed");
        else if(new Date(task.dueDate) < Date.now() )
            divTask.classList.add("late");


        container.appendChild(divTask);
    });
}

loadTasks(taskList);

function addTask(task){
    taskList.unshift(task);
    loadTasks(taskList);
}
