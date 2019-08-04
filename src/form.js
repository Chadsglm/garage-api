import { display } from './car';

const url = "https://wagon-garage-api.herokuapp.com/danmans/cars";
const carForm = document.getElementById('new-car');

const createCar = () => {
  const car = {
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    plate: document.getElementById("plate").value,
    owner: document.getElementById("owner").value
  };
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car)
  });
};

const focusOnFirstInput = () => {
  document.getElementById("brand").focus();
};

const prepareNewCarForm = () => {
  focusOnFirstInput();

  carForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createCar(event);
  }).then(response => response.json())
    .then((data) => {
      display(data);
      carForm.reset();
      focusOnFirstInput();
    });
};

export { prepareNewCarForm };
