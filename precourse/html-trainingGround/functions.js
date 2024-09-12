const addStyle = selector => {
  document.querySelectorAll(selector).forEach(e => {
    const possibleNumber = Number(e.innerHTML);

    if (Number.isNaN(possibleNumber)) return;

    e.classList.add(possibleNumber < 0 ? 'negativeResult' : 'positiveResult');
  });
};

addStyle('[class]');
