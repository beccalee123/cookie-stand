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
  for (var i = 0; i < hours.length; i++) {
    this.totalCookies += this.cookiesPerHour[i];
  }
}

//Assign to HTML
var cookieTable = document.getElementById('store-table');

//new element function
function newElement(type, content, parent){
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

//render store data
Store.prototype.render = function () {
  //call functions
  this.getHourlyCustomers();
  this.getHourlyCookies();
  this.getTotalCookies();

  var trEl = document.createElement('tr');

  newElement('td', this.name, trEl);

  for (var i = 0; i < hours.length; i++) {
    newElement('td', this.cookiesPerHour[i], trEl);
  }

  newElement('td', this.totalCookies, trEl);

  cookieTable.appendChild(trEl);
}

//render header data
function makeHeaderRow(){
  var trEl = document.createElement('tr');

  newElement('th', '', trEl);

  for (var i = 0; i < hours.length; i++){
    newElement('th', hours[i], trEl);
  }

  newElement('th', 'Total Cookies', trEl);

  cookieTable.appendChild(trEl);
}

//render store
function renderAllStores() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

//call functions
makeHeaderRow();
renderAllStores();

