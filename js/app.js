'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlyCookieCount: [],
};

function getHourlyCustomers(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust)) + minCust;
}

pike.getCookieCount = function () {
  for (var i = 0; i < hours.length; i++) {
    pike.hourlyCookieCount.push(Math.ceil(getHourlyCustomers(pike.minCust, pike.maxCust) * pike.avgCookies));
  }
}

pike.render = function () {
  var pikeUl = document.getElementById('pike');
  for (var i = 0; i < this.hourlyCookieCount.length; i++) {
    console.log(this.hourlyCookieCount[i]);
    //1. create an <li> element
    var liEl = document.createElement('li');
    //2. give that <li> element content
    liEl.textContent = `${hours[i]}: ${this.hourlyCookieCount[i]} cookies`;
    //3. appent the <li> to the <ul>
    pikeUl.appendChild(liEl);
  }
}

pike.getCookieCount()
pike.render()
console.log(pike)

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2

};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7

};

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3

};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6

}