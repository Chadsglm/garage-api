// Setup:
// When inside the project folder in your terminal
// - Mac
//   brew install yarn
//   yarn install
// - Ubuntu
//   curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
//   echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
//   sudo apt-get update && sudo apt-get install yarn
//
// run in terminal to start server:
// - webpack-dev-server
// run in terminal to execute linter ( check styles )
// - eslint ./lib

// 1. First focus on implementing the logic.
// 2. Then on displaying the results to the user (in the DOM).
// 3. Finally refactor your code into small functions and different files.
// -> Use webpack import statements to import and export between files.

// The API we will use is the LW garage API.
//  -> https://github.com/lewagon/garage-api
// url = https://wagon-garage-api.herokuapp.com/:garage/cars
// Replace the :garage with your own cool garage name.
// You can use https://wagon-garage-api.herokuapp.com/danman/cars
// to test your get request.
// Have a look at the documentation of fetch.
// OR the slides from JS day 3 to figure out how to make a post request.

// 1. Send an AJAX request to the API to fetch all cars.
// 2. For each car.
// 3. Insert a new row in the cars html table.

// 1. Add an event listener on the form.
// 2. Prevent default behavior when we submit it.
// 3. Recover data entered by the user.
// 4. Send a POST ajax request to the API.
// 5. Refresh cars list.
//
//
// Optional -> destroying a car.