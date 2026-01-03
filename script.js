const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value === "") return alert("Enter a task");

  const li = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.innerHTML = `<strong>${taskInput.value}</strong><br><small>${taskDate.value}</small>`;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskInput.value);
    if (newTask) taskText.innerHTML = `<strong>${newTask}</strong><br><small>${taskDate.value}</small>`;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => li.remove();

  actions.append(completeBtn, editBtn, deleteBtn);
  li.append(taskText, actions);
  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";
}
