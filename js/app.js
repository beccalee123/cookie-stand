'use strict';

//this is an array for my store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

//this is an array for my stores
var allStores = [];

//this is my store constructor
function Store(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerPerson) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerPerson = avgCookiesPerPerson;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  allStores.push(this);
}

//these are my store instances
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

//make a random number generator function
Store.prototype.getHourlyCustomers = function () {
  for (var i = 0; i < hours.length; i++) {
    this.customersPerHour.push(Math.ceil(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers);
  }
}

//make a cookies per hour function
Store.prototype.getHourlyCookies = function () {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerPerson));
  }
}

//make a total cookies function
Store.prototype.getTotalCookies = function () {
  this.totalCookies = 0
  for (var i = 0; i < hours.length; i++) {
    this.totalCookies += this.cookiesPerHour[i];
  }
}

//call functions
function renderAllCookies() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].getHourlyCustomers();
    allStores[i].getHourlyCookies();
    allStores[i].getTotalCookies();
  }
}

renderAllCookies();

//Assign to HTML
var cookieTable = document.getElementById('store-table');

//new element function
function newElement(type, content, parent) {
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

//render store data
Store.prototype.render = function () {

  var trEl = document.createElement('tr');

  newElement('td', this.name, trEl);

  for (var i = 0; i < hours.length; i++) {
    newElement('td', this.cookiesPerHour[i], trEl);
  }

  newElement('td', this.totalCookies, trEl);

  cookieTable.appendChild(trEl);
}

//render header data
function makeHeaderRow() {
  var trEl = document.createElement('tr');

  newElement('th', '', trEl);

  for (var i = 0; i < hours.length; i++) {
    newElement('th', hours[i], trEl);
  }

  newElement('th', 'Total Cookies', trEl);

  cookieTable.appendChild(trEl);
}

//render store
function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

//render footer data

function makeFooterRow() {

  var trEl = document.createElement('tr');

  newElement('td', 'Cookies Per Hour', trEl);

  var allCookies = 0;

  function totalCookiesCalculation() {
    var hourlyCookieTotals = [];
    for (var i = 0; i < hours.length; i++) {
      var totalForCalculationPurposes = 0;
      for (var j = 0; j < allStores.length; j++) {
        totalForCalculationPurposes += allStores[j].cookiesPerHour[i];
      }
      hourlyCookieTotals.push(totalForCalculationPurposes);
      newElement('td', hourlyCookieTotals[i], trEl);
      console.log('calculation: ' + hourlyCookieTotals[i]);
      allCookies += hourlyCookieTotals[i];
    }
  }
  totalCookiesCalculation();

  //make another td that fills in the total of the total???
  newElement('td', allCookies, trEl);


  cookieTable.appendChild(trEl);
}

//call functions
makeHeaderRow();
renderAllStores();
makeFooterRow();

//creates global variable for DOM access
var cookieTableSubmission = document.getElementById('cookie-table-form');

var handleFormSubmission = function (event) {
  //prevents page reload on submission
  event.preventDefault();

  //prevent empty fields
  if (!event.target.name.value || !event.target.minHourlyCustomers.value || !event.target.maxHourlyCustomers.value || !event.target.avgCookiesPerPerson.value) {
    return alert('Fields cannot be empty');
  }

  //populate the new stores with our variables
  var location = event.target.name.value;
  var min = Number(event.target.minHourlyCustomers.value);
  var max = Number(event.target.maxHourlyCustomers.value);
  var avgCookies = Number(event.target.avgCookiesPerPerson.value);

  //prevent strings in number fields
  if (isNaN(avgCookies)){
    return alert ('Please enter a number in the form field');
  }

  //This is creating a new store instance
  var newStoreLocation = new Store(location, min, max, avgCookies);

  // This empties the form fields after the data has been grabbed
  event.target.name.value = null;
  event.target.minHourlyCustomers.value = null;
  event.target.maxHourlyCustomers.value = null;
  event.target.avgCookiesPerPerson.value = null;

  //empties field forms so they aren't still filled when the table is populated
  cookieTable.innerHTML = '';

  //call header function
  makeHeaderRow();

  //call prototype functions and attach to new instance
  newStoreLocation.getHourlyCustomers();

  newStoreLocation.getHourlyCookies();

  newStoreLocation.getTotalCookies();

  //call main render function
  renderAllStores();

  //need to call footer here when I make it
  makeFooterRow();
}

//Event listener for new location. This attaches it to my submission form
cookieTableSubmission.addEventListener('submit', handleFormSubmission);



