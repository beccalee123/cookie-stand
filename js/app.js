'use strict';

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

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//make a random number generator function
Store.prototype.getHourlyCustomers = function () {
  for (var i = 0; i < hours.length; i++) {
    this.customersPerHour.push(Math.ceil(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers);
  }
}

Store.prototype.getHourlyCookies = function () {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerPerson));
  }
}

Store.prototype.getTotalCookies = function () {
  for (var i = 0; i < hours.length; i++) {
    this.totalCookies += this.cookiesPerHour[i];
  }
}

var cookieTable = document.getElementById('store-table');

Store.prototype.render = function () {
  //call functions
  this.getHourlyCustomers();
  this.getHourlyCookies();
  this.getTotalCookies();


  //make a tr
  var trEl = document.createElement('tr');

  //make a td
  var tdEl = document.createElement('td');
  //give it name content
  tdEl.textContent = this.name;
  //append it to the tr
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);

  cookieTable.appendChild(trEl);
}

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  cookieTable.appendChild(trEl);
}

function renderAllStores() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

makeHeaderRow();
renderAllStores();

// seaTac.getHourlyCustomers = function () {
//   return Math.floor(Math.random() * (seaTac.maxCust - seaTac.minCust)) + seaTac.minCust;

// }

// seaTac.getCookieCount = function () {
//   for (var i = 0; i < hours.length; i++) {
//     seaTac.hourlyCookieCount.push(Math.ceil(seaTac.getHourlyCustomers(seaTac.minCust, seaTac.maxCust) * seaTac.avgCookies));
//   }
// }

// seaTac.getTotalCookies = function () {
//   for (var i = 0; i < seaTac.hourlyCookieCount.length; i++){
//     seaTac.totalCookies += seaTac.hourlyCookieCount[i];
//     console.log(seaTac.totalCookies);
//   }
//   return seaTac.totalCookies;
// }

// seaTac.render = function () {
//   var seaTacUl = document.getElementById('seatac');
//   for (var i = 0; i <this.hourlyCookieCount.length; i++) {
//     // console.log(this.hourlyCookieCount[i]);
//     var liEl = document.createElement('li');
//     liEl.textContent = `${hours[i]}: ${this.hourlyCookieCount[i]} cookies`;
//     seaTacUl.appendChild(liEl);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = `Total Cookies: ${seaTac.totalCookies}`;
//   seaTacUl.appendChild(liEl);
// }

// seaTac.getCookieCount();
// seaTac.getTotalCookies();
// seaTac.render();
// console.log(seaTac);
