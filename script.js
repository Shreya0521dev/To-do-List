

function addTask() {
  const newTask = document.createElement('li');
  const taskList = document.getElementById('taskList');
  const taskInput = document.getElementById('inputtask');

  const taskText = document.createElement('span');
  taskText.textContent = taskInput.value;

  newTask.appendChild(taskText);
  taskList.appendChild(newTask);
  taskInput.value = "";

  
  editTask(newTask, taskText);
  deleteTask(newTask);
}

function deleteTask(newTask) {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";

  deleteBtn.classList.add('deleteBtn')

  deleteBtn.onclick = function () {
    newTask.remove();
  };
  newTask.appendChild(deleteBtn);
}



function editTask(newTask, taskTextSpan) {
  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";

  editBtn.classList.add('editBtn');

  editBtn.onclick = function () {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = taskTextSpan.textContent;

    newTask.insertBefore(input, taskTextSpan);
    newTask.removeChild(taskTextSpan);

    editBtn.textContent = "Save";

    // 👇 yahan dobara onclick assign kar rahe hain — overwrite karna
    editBtn.onclick = function () {
      taskTextSpan.textContent = input.value;
      newTask.insertBefore(taskTextSpan, input);
      newTask.removeChild(input);

      editBtn.textContent = "Edit";

      // 👇 yeh line hata di — yeh hi galat kar rahi thi
      // editTask(newTask, taskTextSpan);
    };
  };

  newTask.appendChild(editBtn);
}


