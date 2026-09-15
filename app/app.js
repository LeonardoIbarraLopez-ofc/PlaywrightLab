const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const error = document.getElementById('error-message');
const total = document.getElementById('total-count');
const completed = document.getElementById('completed-count');
const pending = document.getElementById('pending-count');

function updateSummary() {
  const items = [...list.querySelectorAll('.task')];
  const done = items.filter(item => item.classList.contains('completed')).length;
  total.textContent = items.length;
  completed.textContent = done;
  pending.textContent = items.length - done;
}

function addTask(text) {
  const li = document.createElement('li');
  li.className = 'task';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'complete-task';
  checkbox.setAttribute('aria-label', `Completar ${text}`);

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'delete';
  button.textContent = 'Eliminar';
  button.setAttribute('aria-label', `Eliminar ${text}`);

  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed', checkbox.checked);
    updateSummary();
  });

  button.addEventListener('click', () => {
    li.remove();
    updateSummary();
  });

  li.append(checkbox, span, button);
  list.appendChild(li);
  updateSummary();
}

form.addEventListener('submit', event => {
  event.preventDefault();
  error.textContent = '';
  const text = input.value.trim();

  if (!text) {
    error.textContent = 'La tarea no puede estar vacía.';
    input.focus();
    return;
  }

  addTask(text);
  input.value = '';
  input.focus();
});

updateSummary();