class UndergroundSystem {
  constructor() {
    this.traveling = {};
    this.travelTime = {};
  }
  
  checkIn(id, stationName, t) {
    this.traveling[id] = {
      startStation: stationName, 
      startTime: t
    };
  }
  
  checkOut(id, stationName, t) {
    let startStation = this.traveling[id]['startStation'];
    let startTime = this.traveling[id]['startTime'];
    
    if (!this.travelTime[`${startStation}-${stationName}`]) {
      this.travelTime[`${startStation}-${stationName}`] = [];
    }
    
    this.travelTime[`${startStation}-${stationName}`].push(t - startTime);
  }
  
  getAverageTime(startStation, endStation) {
    let sum = 0;
    this.travelTime[`${startStation}-${endStation}`].forEach(t => sum += t);
    return sum / this.travelTime[`${startStation}-${endStation}`].length;
  }
};