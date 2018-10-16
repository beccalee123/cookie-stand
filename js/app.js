'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlyCookieCount: [],
  totalCookies: 0
};

pike.getHourlyCustomers = function () {
  return Math.floor(Math.random() * (pike.maxCust - pike.minCust)) + pike.minCust;
}

pike.getCookieCount = function () {
  for (var i = 0; i < hours.length; i++) {
    pike.hourlyCookieCount.push(Math.ceil(pike.getHourlyCustomers(pike.minCust, pike.maxCust) * pike.avgCookies));

  }
}

pike.getTotalCookies = function () {
  for (var i = 0; i < pike.hourlyCookieCount.length; i++) {
    pike.totalCookies += pike.hourlyCookieCount[i];
    console.log(pike.totalCookies);
  }
  return pike.totalCookies;
}

pike.render = function () {
  var pikeUl = document.getElementById('pike');
  for (var i = 0; i < this.hourlyCookieCount.length; i++) {
    console.log(this.hourlyCookieCount[i]);
    //1. create an <li> element
    var liEl = document.createElement('li');
    //2. give that <li> element content
    liEl.textContent = `${hours[i]}: ${this.hourlyCookieCount[i]} cookies`;
    //3. append the <li> to the <ul>
    pikeUl.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies: ${pike.totalCookies}`;
  pikeUl.appendChild(liEl);
}

pike.getCookieCount();
pike.getTotalCookies();
pike.render();
console.log(pike);

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  hourlyCookieCount: [],
  totalCookies: 0
};

seaTac.getHourlyCustomers = function () {
  return Math.floor(Math.random() * (seaTac.maxCust - seaTac.minCust)) + seaTac.minCust;
 
}

seaTac.getCookieCount = function () {
  for (var i = 0; i < hours.length; i++) {
    seaTac.hourlyCookieCount.push(Math.ceil(seaTac.getHourlyCustomers(seaTac.minCust, seaTac.maxCust) * seaTac.avgCookies));
    
  }
}

seaTac.getTotalCookies = function () {
  for (var i = 0; i < seaTac.hourlyCookieCount.length; i++){
    seaTac.totalCookies += seaTac.hourlyCookieCount[i];
    console.log(seaTac.totalCookies);
  }
  return seaTac.totalCookies;
}

seaTac.render = function () {
  var seaTacUl = document.getElementById('seatac');
  for (var i = 0; i <this.hourlyCookieCount.length; i++) {
    // console.log(this.hourlyCookieCount[i]);
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.hourlyCookieCount[i]} cookies`;
    seaTacUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total Cookies: ${seaTac.totalCookies}`;
  seaTacUl.appendChild(liEl);
}

seaTac.getCookieCount();
seaTac.getTotalCookies();
seaTac.render();
console.log(seaTac);

// var seattleCenter = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7

// };

// var capitolHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3

// };

// var alki = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6

// }