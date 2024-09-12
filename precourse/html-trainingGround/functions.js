const addStyle = selector => {
  document.querySelectorAll(selector).forEach(e => {
    const possibleNumber = Number(e.innerHTML);

    if (Number.isNaN(possibleNumber)) return;

    e.classList.add(possibleNumber < 0 ? 'negativeResult' : 'positiveResult');
  });
};

const invertColorsOfResults = () => {
  document.querySelectorAll('.mainResult').forEach(element => {
    if (element.classList.contains('positiveResult')) {
      element.classList.remove('positiveResult');
      element.classList.add('negativeResult');
      return;
    }

    if (element.classList.contains('negativeResult')) {
      element.classList.remove('negativeResult');
      element.classList.add('positiveResult');
      return;
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  addStyle('[class]');
  const btn = document.getElementById('btnInversion');
  btn.onclick = invertColorsOfResults;
});
