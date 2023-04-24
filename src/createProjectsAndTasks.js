function eventCall(e) {
  console.log(e);
}

function domStuff() {
  document
    .querySelector('div.sidebar > button')
    .addEventListener('click', eventCall);
}

export default function loadEventListeners() {
  domStuff();
}
