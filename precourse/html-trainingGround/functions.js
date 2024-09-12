const myFunctions = {
  getCompanyName: function () {
    return 'SALT';
  },
};

const companyName = myFunctions.getCompanyName();

const companyNameElement = document.querySelector('#companyName');
companyNameElement.innerHTML = companyName + ' set using a query selector by id';

const boldNodes = document.querySelectorAll('.bold');
for (let i = 0; i < boldNodes.length; i++) {
  boldNodes[i].innerHTML += ' ... and bold selected with query';
}

document.querySelectorAll('[name="content"]').forEach(node => (node.innerHTML += '.   Lorem content'));
