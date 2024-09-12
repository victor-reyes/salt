const myFunctions = {
  getCompanyName: function () {
    return 'SALT';
  },
};

const companyName = myFunctions.getCompanyName();
document.getElementsByTagName('div')[1].innerHTML = companyName;

document.getElementById('companyName').innerHTML = companyName;
