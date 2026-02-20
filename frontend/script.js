const api = "http://localhost:3000/tasks";

async function loadTasks() {
    const response = await fetch(api);
    const tasks = await response.json();

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        const title = document.createElement("span");
        title.classList.add("task-title");

        if (task.status === "completed") {
            title.classList.add("completed");
        }

        title.innerText = task.title;

        const actions = document.createElement("div");
        actions.classList.add("actions");

        // Botão concluir
        const completeBtn = document.createElement("button");
        completeBtn.innerText = "Concluir";
        completeBtn.classList.add("complete");
        completeBtn.onclick = () => toggleTask(task);

        // Botão deletar
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Deletar";
        deleteBtn.classList.add("delete");
        deleteBtn.onclick = () => deleteTask(task.id);

        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(title);
        li.appendChild(actions);

        list.appendChild(li);
    });
}

async function addTask() {
    const titleInput = document.getElementById("title");
    const title = titleInput.value;

    if (!title) return;

    await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
    });

    titleInput.value = "";
    loadTasks();
}

async function deleteTask(id) {
    await fetch(`${api}/${id}`, {
        method: "DELETE"
    });

    loadTasks();
}

async function toggleTask(task) {
    const newStatus = task.status === "pending" ? "completed" : "pending";

    await fetch(`${api}/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: task.title,
            description: task.description,
            status: newStatus
        })
    });

    loadTasks();
}

loadTasks();