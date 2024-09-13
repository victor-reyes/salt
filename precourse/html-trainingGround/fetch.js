let allUsers;
let users;

const getUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?gender=female&results=30');
  const json = await response.json();
  console.log(json);
  allUsers = users = json.results;
};

const filterData = async name => {
  console.log(name);
  name = name.toLowerCase();
  users = allUsers.filter(
    user => user.name.first.toLowerCase().includes(name) || user.name.last.toLowerCase().includes(name)
  );
};

const showUsers = async () => {
  const main = document.querySelector('main');
  main.childNodes.forEach(node => node.remove());

  main.textContent = `We have fetched ${users.length} users`;

  const userList = document.createElement('div');
  userList.classList = 'column';

  users.forEach(user => {
    const userHeading = document.createElement('h2');
    userHeading.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

    const userImage = document.createElement('img');
    userImage.src = `${user.picture.thumbnail}`;
    userImage.style.height = '48px';
    userImage.style.width = 'auto';

    const userDiv = document.createElement('div');
    userDiv.classList = 'row';
    userDiv.appendChild(userImage);
    userDiv.appendChild(userHeading);

    userList.appendChild(userDiv);
  });

  main.appendChild(userList);
};

getUsers().then(() => showUsers());

const filterForm = document.getElementById('filterForm');
filterForm.addEventListener('submit', async event => {
  event.preventDefault(); // Prevent page refresh on form submit

  const filterValue = document.getElementById('filter').value;
  await filterData(filterValue);
  await showUsers();
});
