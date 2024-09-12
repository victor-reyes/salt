const myFunctions = {
  getCompanyName: function () {
    return 'SALT';
  },
};

const companyName = myFunctions.getCompanyName();
document.getElementsByTagName('div')[1].innerHTML = companyName;

document.getElementById('companyName').innerHTML = companyName;

const boldNodes = document.getElementsByClassName('bold');

for (let i = 0; i < boldNodes.length; i++) {
  boldNodes[i].innerHTML += ' ... and bold';
}

const contentNodes = document.getElementsByName('content').forEach(node => (node.innerHTML += '.   Lorem content'));
