const getUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?gender=female&results=30');
  const json = await response.json();
  console.log(json);

  return json.results;
};

const showUsers = async () => {
  const users = await usersPromise;

  const main = document.querySelector('main');
  main.textContent = `We have fetched ${users.length} users`;

  const userList = document.createElement('div');

  users.forEach(user => {
    const userHeading = document.createElement('h2');
    userHeading.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

    const userImage = document.createElement('img');
    userImage.src = `${user.picture.thumbnail}`;

    const userDiv = document.createElement('div');
    userDiv.appendChild(userHeading);
    userDiv.appendChild(userImage);

    userList.appendChild(userDiv);
  });

  main.appendChild(userList);
};

const usersPromise = getUsers();

document.addEventListener('DOMContentLoaded', () => {
  showUsers();
});
