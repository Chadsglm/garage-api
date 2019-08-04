const url = "https://wagon-garage-api.herokuapp.com/danmans/cars";
const carList = document.querySelector('.cars-list');


const display = (car) => {
  const html = `
  <div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/300/300/${car.brand}%20${car.model}" />
    </div>
    <div class="car-info">
      <h4>${car.brand} ${car.model}</h4>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
  </div>`;
  carList.insertAdjacentHTML("beforeend", html);
};

const displayCars = () => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.forEach(display);
    });
};


export { display, displayCars };
