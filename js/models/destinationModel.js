/**
 * CLASSE MODELO DE DESTINOS
 */

class destination{

      /**
   * 
   * ADICIONAR NA CLASSE INFO SOBRE OS VOOS (DATA-CLASSE- PESSOAS) TEXTO SOBRE O DESTINO
   */

  idDestination = "";
  destinationInfo = "";
  name = "";
  flights = [
    flight = {
      airCompany: "",
      price: "",
      date: "",
      remainingEconomySeats: "",
      remainingBusinessSeats: "",
      remainingFirstSeats: "",
      departureAirport: "",
      arrivalAirport: "",
      flightTime: ""
    }
  ]



  constructor(idDestination, destinationInfo, name, airCompany, price, date, departureAirport,remainingEconomySeats, remainingBusinessSeats, remainingFirstSeats, arrivalAirport, flightTime){
    this.idDestination = idDestination;
    this.destinationInfo = destinationInfo
    this.name = name;
    this.airCompany = airCompany;
    this.price = price;
    this.date = date;
    this.remainingEconomySeats = remainingEconomySeats;
    this.remainingBusinessSeats = remainingBusinessSeats;
    this.remainingFirstSeats = remainingFirstSeats;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.flightTime = flightTime;
  }
}