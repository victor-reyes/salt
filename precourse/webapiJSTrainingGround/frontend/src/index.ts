import { api } from './api.js';

const devHolder = document.getElementById('dev-holder')!;

const addDevBtn = document.getElementById('add-dev-button')!;
const addDevForm = document.getElementById('add-dev-form')!;
const addNameInput = document.getElementById('dev-name-input')! as HTMLInputElement;
const addEmailInput = document.getElementById('dev-email-input')! as HTMLInputElement;
const saveDevBtn = document.getElementById('save-dev-button')!;

addDevBtn.addEventListener('click', () => {
  addDevForm.style.display = 'block';
});

saveDevBtn.addEventListener('click', async () => {
  const [name, email] = [addNameInput.value, addEmailInput.value];

  const newDev = await api.addDev(name, email);
  renderDeveloper(newDev);

  addNameInput.value = '';
  addEmailInput.value = '';
  addDevForm.style.display = 'none';
});

function renderDeveloper(dev) {
  const devContainer = document.createElement('div');
  devContainer.classList.add('row');

  const infoDiv = document.createElement('div');
  infoDiv.style.padding = '4px';

  const nameField = document.createElement('span');
  nameField.textContent = dev.name;

  const emailField = document.createElement('span');
  emailField.textContent = dev.email;

  infoDiv.append(nameField, ' - [', emailField, ']');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.style.display = 'none';

  editButton.addEventListener('click', async () => {
    nameField.contentEditable = 'true';
    emailField.contentEditable = 'true';

    nameField.classList.add('border');
    emailField.classList.add('border');

    nameField.focus();

    saveButton.style.display = 'inline';
    editButton.style.display = 'none';
  });

  saveButton.addEventListener('click', async () => {
    const updatedDev = {
      ...dev,
      name: nameField.textContent,
      email: emailField.textContent,
    };

    await api.updateDev(updatedDev);

    nameField.contentEditable = 'false';
    emailField.contentEditable = 'false';

    nameField.classList.remove('border');
    emailField.classList.remove('border');

    editButton.style.display = 'inline';
    saveButton.style.display = 'none';
  });

  deleteButton.addEventListener('click', async () => {
    await api.deleteDev(dev.id);

    devContainer.remove();
  });

  //   devContainer.appendChild(nameField);
  //   devContainer.appendChild(emailField);
  devContainer.appendChild(infoDiv);
  devContainer.appendChild(editButton);
  devContainer.appendChild(saveButton);
  devContainer.appendChild(deleteButton);

  devHolder.appendChild(devContainer);
}

// Fetch and display all developers
api.getAllDevs().then(devs => {
  devs.forEach(renderDeveloper);
});
