/**
 * CLASSE MODELO DE DESTINOS
 */

class destination{
  idDestination = "";
  name = "";
  flights = [
    flight = {
      airCompany: "",
      price: "",
      departureAirport: "",
      arrivalAirport: "",
      flightTime: ""
    }
  ]

  constructor(idDestination, name, airCompany, price, departureAirport, arrivalAirport, flightTime){
    this.idDestination = idDestination;
    this.name = name;
    this.airCompany = airCompany;
    this.price = price;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.flightTime = flightTime;
  }
}