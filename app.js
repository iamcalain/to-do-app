const todoList = document.getElementById('todo-list');
const todoText = document.getElementById('todo-text');
const dueDate = document.getElementById('due-date');
const description = document.getElementById('description');
const addButton = document.getElementById('add-button');

function addTodo() {
  const text = todoText.value;
  const due = dueDate.value;
  const desc = description.value;

  if (text) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const todoTextElement = document.createElement('p');
    todoTextElement.innerText = text;

    const dueDateElement = document.createElement('span');
    dueDateElement.innerText = due ? `Due: ${due}` : '';

    const descriptionElement = document.createElement('span');
    descriptionElement.innerText = desc ? `${desc}` : '';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', function() {
      todoList.removeChild(todoItem);
    });

    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(dueDateElement);
    todoItem.appendChild(descriptionElement)
    todoItem.appendChild(deleteButton);
    

    todoList.appendChild(todoItem);

    todoText.value = '';
    dueDate.value = '';
    description.value = '';
  }
}

addButton.addEventListener('click', addTodo);
