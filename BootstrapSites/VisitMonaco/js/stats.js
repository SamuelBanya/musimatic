var monaco3StarHotels = {
  hotels: 5,
  rooms: 473,
  beds: 946,
  rentedRooms: 173118,
  hotelCapacity: 126547,
  occupationRate: 73.1,
  displayHotels: function(){
    return this.hotels;
  },
  displayRooms: function(){
    return this.rooms;
  },
  displayBeds: function(){
    return this.beds;
  },
  displayRentedRooms: function(){
    return this.rentedRooms;
  },
  displayHotelCapacity: function(){
    return this.hotelCapacity;
  },
  displayOccupationRate: function(){
    return this.occupationRate;
  },
};

var monaco4StarHotels = {
  hotels: 4,
  rooms: 1383,
  beds: 3049,
  rentedRooms: 506178,
  hotelCapacity: 331343,
  occupationRate: 65.5,
  displayHotels: function(){
    return this.hotels;
  },
  displayRooms: function(){
    return this.rooms;
  },
  displayBeds: function(){
    return this.beds;
  },
  displayRentedRooms: function(){
    return this.rentedRooms;
  },
  displayHotelCapacity: function(){
    return this.hotelCapacity;
  },
  displayOccupationRate: function(){
    return this.occupationRate;
  },
};

var monaco5StarHotels = {
  hotels: 3,
  rooms: 2300,
  beds: 906,
  rentedRooms: 157304,
  hotelCapacity: 95907,
  occupationRate: 61.0,
  displayHotels: function(){
    return this.hotels;
  },
  displayRooms: function(){
    return this.rooms;
  },
  displayBeds: function(){
    return this.beds;
  },
  displayRentedRooms: function(){
    return this.rentedRooms;
  },
  displayHotelCapacity: function(){
    return this.hotelCapacity;
  },
  displayOccupationRate: function(){
    return this.occupationRate;
  }
};

// Display 3 Star Hotel Info:

var monaco3StarHotelsAmtNode = document.createTextNode("Number of 3 star hotels in Monaco = " + monaco3StarHotels.displayHotels() + " hotels.");

var monaco3StarRoomAmtNode = document.createTextNode("Number of 3 star hotel rooms in Monaco = " + monaco3StarHotels.displayRooms() + " rooms.");

var monaco3StarBedAmtNode = document.createTextNode("Number of 3 star hotel beds in Monaco = " + monaco3StarHotels.displayBeds() + " beds.");

var monaco3StarRentedRoomAmtNode = document.createTextNode("Number of 3 star hotel beds in Monaco = " + monaco3StarHotels.displayRentedRooms() + " rented rooms.");

var monaco3StarHotelCapacityNode = document.createTextNode("Hotel Capacity for 3 star hotels in in Monaco = " + monaco3StarHotels.displayHotelCapacity() + " rented rooms.");

var monaco3StarRentedRoomAmtNode = document.createTextNode("Occupation Rate for 3 star hotels in in Monaco = " + monaco3StarHotels.displayOccupationRate() + "%.");

var monaco3StarDataList = [];

monaco3StarDataList.push(monaco3StarHotelsAmtNode, monaco3StarRoomAmtNode, monaco3StarBedAmtNode, monaco3StarRentedRoomAmtNode, monaco3StarHotelCapacityNode, monaco3StarRentedRoomAmtNode);

var elMonaco3StarHotelsStatsList = document.getElementById("SsMonaco3StarHotelsStatsList");

for (var x = 0; x < monaco3StarDataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(monaco3StarDataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elMonaco3StarHotelsStatsList.appendChild(listItem);
}

// Display 4 Star Hotel Info:

var monaco4StarHotelsAmtNode = document.createTextNode("Number of 4 star hotels in Monaco = " + monaco4StarHotels.displayHotels() + " hotels.");

var monaco4StarRoomAmtNode = document.createTextNode("Number of 4 star hotel rooms in Monaco = " + monaco4StarHotels.displayRooms() + " rooms.");

var monaco4StarBedAmtNode = document.createTextNode("Number of 4 star hotel beds in Monaco = " + monaco4StarHotels.displayBeds() + " beds.");

var monaco4StarRentedRoomAmtNode = document.createTextNode("Number of 4 star hotel beds in Monaco = " + monaco4StarHotels.displayRentedRooms() + " rented rooms.");

var monaco4StarHotelCapacityNode = document.createTextNode("Hotel Capacity for 4 star hotels in in Monaco = " + monaco4StarHotels.displayHotelCapacity() + " rented rooms.");

var monaco4StarRentedRoomAmtNode = document.createTextNode("Occupation Rate for 4 star hotels in in Monaco = " + monaco4StarHotels.displayOccupationRate() + "%.");

var monaco4StarDataList = [];

monaco4StarDataList.push(monaco4StarHotelsAmtNode, monaco4StarRoomAmtNode, monaco4StarBedAmtNode, monaco4StarRentedRoomAmtNode, monaco4StarHotelCapacityNode, monaco4StarRentedRoomAmtNode);

var elMonaco4StarHotelsStatsList = document.getElementById("SsMonaco4StarHotelsStatsList");

for (var x = 0; x < monaco4StarDataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(monaco4StarDataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elMonaco4StarHotelsStatsList.appendChild(listItem);
}

// Display 5 Star Hotel Info:

var monaco5StarHotelsAmtNode = document.createTextNode("Number of 5 star hotels in Monaco = " + monaco5StarHotels.displayHotels() + " hotels.");

var monaco5StarRoomAmtNode = document.createTextNode("Number of 5 star hotel rooms in Monaco = " + monaco5StarHotels.displayRooms() + " rooms.");

var monaco5StarBedAmtNode = document.createTextNode("Number of 5 star hotel beds in Monaco = " + monaco5StarHotels.displayBeds() + " beds.");

var monaco5StarRentedRoomAmtNode = document.createTextNode("Number of 5 star hotel beds in Monaco = " + monaco5StarHotels.displayRentedRooms() + " rented rooms.");

var monaco5StarHotelCapacityNode = document.createTextNode("Hotel Capacity for 5 star hotels in in Monaco = " + monaco5StarHotels.displayHotelCapacity() + " rented rooms.");

var monaco5StarRentedRoomAmtNode = document.createTextNode("Occupation Rate for 5 star hotels in in Monaco = " + monaco5StarHotels.displayOccupationRate() + "%.");

var monaco5StarDataList = [];

monaco5StarDataList.push(monaco5StarHotelsAmtNode, monaco5StarRoomAmtNode, monaco5StarBedAmtNode, monaco5StarRentedRoomAmtNode, monaco5StarHotelCapacityNode, monaco5StarRentedRoomAmtNode);

var elMonaco5StarHotelsStatsList = document.getElementById("SsMonaco5StarHotelsStatsList");

for (var x = 0; x < monaco5StarDataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(monaco5StarDataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elMonaco5StarHotelsStatsList.appendChild(listItem);
}

// Constructor Syntax

var stadium = new Object();

stadium.name = "Stade Louis II";
stadium.capacity = 18500;
stadium.yearFirstOpened = 1939;

stadium.returnName = function(){
  return this.name;
};

stadium.returnCapacity = function(){
  return this.capacity;
};

stadium.returnYearFirstOpened = function(){
  return this.yearFirstOpened;
};

var monacoStadiumNameNode = document.createTextNode("Stadium's name = " + stadium.returnName());

var monacoStadiumCapacityNode = document.createTextNode("Stadium's capacity = " + stadium.returnCapacity());

var monacoStadiumYearFirstOpenedNode = document.createTextNode("Year that stadium first opened = " + stadium.returnYearFirstOpened());

var monacoStadiumDataList = [];

monacoStadiumDataList.push(monacoStadiumNameNode, monacoStadiumCapacityNode, monacoStadiumYearFirstOpenedNode);

var elMonacoStadiumStatsList = document.getElementById("SsMonacoStadiumStatsList");

for (var x = 0; x < monacoStadiumDataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(monacoStadiumDataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elMonacoStadiumStatsList.appendChild(listItem);
}

// Creating An Object Using Constructor Notation

function Hospital(name, yearFirstOpened, hospitalType){
  this.name = name;
  this.yearFirstOpened = yearFirstOpened;
  this.hospitalType = hospitalType;
}

// Accessing An Object Using Constructor Notation

var cardiothoracicCenterOfMonaco = new Hospital("Cardiothoracic Center of Monaco", 1987, "Cardiovascular/Thoracic");

var cardiothoracicCenterOfMonacoNameNode = document.createTextNode("Name of hospital = " + cardiothoracicCenterOfMonaco.name);

var cardiothoracicCenterOfMonacoTypeNode = document.createTextNode("Type of hospital = " + cardiothoracicCenterOfMonaco.yearFirstOpened);

var cardiothoracicCenterOfMonacoYearFirstOpenedNode = document.createTextNode("Type of hospital = " + cardiothoracicCenterOfMonaco.hospitalType);

var monacoHospital1DataList = [];

monacoHospital1DataList.push(cardiothoracicCenterOfMonacoNameNode, cardiothoracicCenterOfMonacoTypeNode, cardiothoracicCenterOfMonacoYearFirstOpenedNode);

var elMonacoHospital1StatsList = document.getElementById("SsMonacoHospital1StatsList");

for (var x = 0; x < monacoHospital1DataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(monacoHospital1DataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elMonacoHospital1StatsList.appendChild(listItem);
}

var princessGraceHospitalCentre = new Hospital("Princess Grace Hospital Centre", "1902", "Teaching");

var princessGraceHospitalCentreNameNode = document.createTextNode("Name of hospital = " + princessGraceHospitalCentre.name);

var princessGraceHospitalCentreTypeNode = document.createTextNode("Type of hospital = " + princessGraceHospitalCentre.yearFirstOpened);

var princessGraceHospitalCentreYearFirstOpenedNode = document.createTextNode("Type of hospital = " + princessGraceHospitalCentre.hospitalType);

var monacoHospital2DataList = [];

monacoHospital2DataList.push(princessGraceHospitalCentreNameNode, princessGraceHospitalCentreTypeNode, princessGraceHospitalCentreYearFirstOpenedNode);

var elMonacoHospital2StatsList = document.getElementById("SsMonacoHospital2StatsList");

for (var x = 0; x < monacoHospital2DataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(monacoHospital2DataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elMonacoHospital2StatsList.appendChild(listItem);
}

// Constructor Syntax

var prehistoricAnthropologyMuseum = new Object();

prehistoricAnthropologyMuseum.name = "Museum of Prehistoric Anthropology";

prehistoricAnthropologyMuseum.type = "Archeological";

prehistoricAnthropologyMuseum.yearFounded = 1902;

prehistoricAnthropologyMuseumNameNode = document.createTextNode("Name of Museum = " + prehistoricAnthropologyMuseum.name);

prehistoricAnthropologyMuseumTypeNode = document.createTextNode("Type of Museum = " + prehistoricAnthropologyMuseum.type);

prehistoricAnthropologyMuseumYearFoundedNode = document.createTextNode("Year Founded = " + prehistoricAnthropologyMuseum.yearFounded);

var prehistoricAnthropologyMuseumDataList = [];

prehistoricAnthropologyMuseumDataList.push(prehistoricAnthropologyMuseumNameNode, prehistoricAnthropologyMuseumTypeNode, prehistoricAnthropologyMuseumYearFoundedNode);

var elPrehistoricAnthropologyMuseumStatsList = document.getElementById("SsMonacoMuseum1StatsList");

for (var x = 0; x < prehistoricAnthropologyMuseumDataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(prehistoricAnthropologyMuseumDataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elPrehistoricAnthropologyMuseumStatsList.appendChild(listItem);
}

// Arrays

// Object Version:

monacoRevenueObject = {
  commercialTransactionsVAT: 579.8,
  legalTransactions: 195.9,
  realEstateSector: 139.7,
  commercialRevenue: 124.9,
  stateGrantedMonopolies: 60.0,
  stateOperatedMonopolies: 39.5,
  financialSector: 34.0,
  customsDuties: 33.8,
  otherRevenue: 43.7
};

monacoRevenueObjectDataList = []

monacoRevenueObjectDataList.push(document.createTextNode("Monaco's Commercial Transactions VAT (2016) (monacoRevenueObject.commercialTransactionsVAT) = " + monacoRevenueObject.commercialTransactionsVAT + " mil. €"));

monacoRevenueObjectDataList.push(document.createTextNode("Monaco's Legal Transactions (2016) (monacoRevenueObject.legalTransactions) = " + monacoRevenueObject.legalTransactions + " mil. €"));

monacoRevenueObjectDataList.push(document.createTextNode("Monaco's Real Estate Sector (2016) (monacoRevenueObject.realEstateSector) = " + monacoRevenueObject.realEstateSector + " mil. €"));

monacoRevenueObjectDataList.push(document.createTextNode("Monaco's Commercial Revenue (2016) (monacoRevenueObject.commercialRevenue) = " + monacoRevenueObject.commercialRevenue + " mil. €"));

monacoRevenueObjectDataList.push(document.createTextNode("Monaco's State Granted Monopolies (2016) (monacoRevenueObject.stateGrantedMonopolies) = " + monacoRevenueObject.stateGrantedMonopolies + " mil. €"));

monacoRevenueObjectDataList.push(document.createTextNode("Monaco's State Operated Monopolies (2016) (monacoRevenueObject.stateOperatedMonopolies)= " + monacoRevenueObject.stateOperatedMonopolies + " mil. €"));

monacoRevenueObjectDataList.push(document.createTextNode("Monaco's Financial Sector (2016) (monacoRevenueObject.financialSector) = " + monacoRevenueObject.financialSector + " mil. €"));

monacoRevenueObjectDataList.push(document.createTextNode("Monaco's Customs Duties (2016) (monacoRevenueObject.customsDuties) = " + monacoRevenueObject.customsDuties + " mil. €"));

monacoRevenueObjectDataList.push(document.createTextNode("Monaco's Other Revenue (2016) (monacoRevenueObject.otherRevenue) = " + monacoRevenueObject.otherRevenue + " mil. €"));

var elMonacoRevenueObjectStatsList = document.getElementById("SsMonacoRevenueObjectStatsList");

for (var x = 0; x < monacoRevenueObjectDataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(monacoRevenueObjectDataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elMonacoRevenueObjectStatsList.appendChild(listItem);
}

// Array Version:

monacoRevenueArray = [579.8, 195.9, 139.7, 124.9, 60.0, 39.5, 34.0, 33.8, 43.7];

monacoRevenueArrayDataList = [];

monacoRevenueArrayDataList.push(document.createTextNode("Monaco's Commercial Transactions VAT (2016) (monacoRevenueArray[0]) = " + monacoRevenueArray[0] + " mil. €"));

monacoRevenueArrayDataList.push(document.createTextNode("Monaco's Legal Transactions (2016) (monacoRevenueArray[1]) = " + monacoRevenueArray[1] + " mil. €"));

monacoRevenueArrayDataList.push(document.createTextNode("Monaco's Real Estate Sector (2016) (monacoRevenueArray[2]) = " + monacoRevenueArray[2] + " mil. €"));

monacoRevenueArrayDataList.push(document.createTextNode("Monaco's Commercial Revenue (2016) (monacoRevenueArray[3]) = " + monacoRevenueArray[3] + " mil. €"));

monacoRevenueArrayDataList.push(document.createTextNode("Monaco's State Granted Monopolies (2016) (monacoRevenueArray[4]) = " + monacoRevenueArray[4] + " mil. €"));

monacoRevenueArrayDataList.push(document.createTextNode("Monaco's State Operated Monopolies (2016) (monacoRevenueArray[5]) = " + monacoRevenueArray[5] + " mil. €"));

monacoRevenueArrayDataList.push(document.createTextNode("Monaco's Financial Sector (2016) (monacoRevenueArray[6]) = " + monacoRevenueArray[6] + " mil. €"));

monacoRevenueArrayDataList.push(document.createTextNode("Monaco's Customs Duties (2016) (monacoRevenueArray[7]) = " + monacoRevenueArray[7] + " mil. €"));

monacoRevenueArrayDataList.push(document.createTextNode("Monaco's Other Revenue (2016) (monacoRevenueArray[8]) = " + monacoRevenueArray[8] + " mil. €"));

var elMonacoRevenueArrayStatsList = document.getElementById("SsMonacoRevenueArrayStatsList");

for (var x = 0; x < monacoRevenueArrayDataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(monacoRevenueArrayDataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elMonacoRevenueArrayStatsList.appendChild(listItem);
}

// Arrays In An Object Using Monaco Financial Data From 2012 to 2016:

monacoRevenueArraysObject = {
  commercialTransactionsVAT: [424.6, 461.0, 521.9, 575.7, 579.8],
  legalTransactions: [108.1, 122.1, 171.1, 172.1, 195.9],
  realEstateSector: [91.0, 87.7, 97.1, 107.9, 139.7],
  commercialRevenue: [120.0, 84.7, 126.3, 124.3, 124.9],
  stateGrantedMonopolies: [42.6, 62.9, 68.6, 65.3, 60.0],
  stateOperatedMonopolies: [39.0, 38.0, 39.4, 37.5, 39.5],
  financialSector: [17.1, 26.6, 27.4, 27.8, 34.0],
  customsDuties: [29.4, 27.4, 28.9, 29.6, 33.8],
  otherRevenue: [28.3, 34.8, 30.7, 33.0, 43.7]
};

monacoRevenueArraysObjectDataList = [];

monacoRevenueArraysObjectDataList.push(document.createTextNode("Monaco's Commercial Transactions VAT (2016) (monacoRevenueArraysObject.commercialTransactionsVAT[4]) = " + monacoRevenueArraysObject.commercialTransactionsVAT[4] + " mil. €"));

monacoRevenueArraysObjectDataList.push(document.createTextNode("Monaco's Legal Transactions (2016) (monacoRevenueArraysObject.legalTransactions[4]) = " + monacoRevenueArraysObject.legalTransactions[4] + " mil. €"));

monacoRevenueArraysObjectDataList.push(document.createTextNode("Monaco's Real Estate Sector (2016) (monacoRevenueArraysObject.realEstateSector[4]) = " + monacoRevenueArraysObject.realEstateSector[4] + " mil. €"));

monacoRevenueArraysObjectDataList.push(document.createTextNode("Monaco's Commercial Revenue (2016) (monacoRevenueArraysObject.commercialRevenue[4]) = " + monacoRevenueArraysObject.commercialRevenue[4] + " mil. €"));

monacoRevenueArraysObjectDataList.push(document.createTextNode("Monaco's State Granted Monopolies (2016) (monacoRevenueArraysObject.stateGrantedMonopolies[4]) = " + monacoRevenueArraysObject.stateGrantedMonopolies[4] + " mil. €"));

monacoRevenueArraysObjectDataList.push(document.createTextNode("Monaco's State Operated Monopolies (2016) (monacoRevenueArraysObject.stateOperatedMonopolies[4]) = " + monacoRevenueArraysObject.stateOperatedMonopolies[4] + " mil. €"));

monacoRevenueArraysObjectDataList.push(document.createTextNode("Monaco's Financial Sector (2016) (monacoRevenueArraysObject.financialSector[4]) = " + monacoRevenueArraysObject.financialSector[4] + " mil. €"));

monacoRevenueArraysObjectDataList.push(document.createTextNode("Monaco's Customs Duties (2016) (monacoRevenueArraysObject.customsDuties[4]) = " + monacoRevenueArraysObject.customsDuties[4] + " mil. €"));

monacoRevenueArraysObjectDataList.push(document.createTextNode("Monaco's Other Revenue (2016) (monacoRevenueArraysObject.otherRevenue[4]) = " + monacoRevenueArraysObject.otherRevenue[4] + " mil. €"));

var elMonacoRevenueArraysObjectStatsList = document.getElementById("SsMonacoRevenueArraysObjectStatsList");

for (var x = 0; x < monacoRevenueArraysObjectDataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(monacoRevenueArraysObjectDataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elMonacoRevenueArraysObjectStatsList.appendChild(listItem);
}

// Objects In An Array Using 2016 Monaco Financial Data:
monacoRevenueObjectsArray2016 = [{commercialTransactionsVAT: 579.8, legalTransactions: 195.9, realEstateSector: 139.7, commercialRevenue: 124.9, stateGrantedMonopolies: 60.0, stateOperatedMonopolies: 39.5, financialSector: 34.0, customsDuties: 33.8, otherRevenue: 43.7}];

monacoRevenueObjectsArray2016DataList = [];

monacoRevenueObjectsArray2016DataList.push(document.createTextNode("Monaco's Commercial Transactions VAT (2016) (monacoRevenueArraysObject[0].commercialTransactionsVAT) = " + monacoRevenueObjectsArray2016[0].commercialTransactionsVAT + " mil. €"));

monacoRevenueObjectsArray2016DataList.push(document.createTextNode("Monaco's Legal Transactions (2016) (monacoRevenueObjectsArray2016[0].legalTransactions) = " + monacoRevenueObjectsArray2016[0].legalTransactions + " mil. €"));

monacoRevenueObjectsArray2016DataList.push(document.createTextNode("Monaco's Real Estate Sector (2016) (monacoRevenueObjectsArray2016[0].realEstateSector) = " + monacoRevenueObjectsArray2016[0].realEstateSector + " mil. €"));

monacoRevenueObjectsArray2016DataList.push(document.createTextNode("Monaco's Commercial Revenue (2016) (monacoRevenueObjectsArray2016[0].commercialRevenue) = " + monacoRevenueObjectsArray2016[0].commercialRevenue + " mil. €"));

monacoRevenueObjectsArray2016DataList.push(document.createTextNode("Monaco's State Granted Monopolies (2016) (monacoRevenueObjectsArray2016[0].stateGrantedMonopolies) = " + monacoRevenueObjectsArray2016[0].stateGrantedMonopolies + " mil. €"));

monacoRevenueObjectsArray2016DataList.push(document.createTextNode("Monaco's State Operated Monopolies (2016) (monacoRevenueObjectsArray2016[0].stateOperatedMonopolies) = " + monacoRevenueObjectsArray2016[0].stateOperatedMonopolies + " mil. €"));

monacoRevenueObjectsArray2016DataList.push(document.createTextNode("Monaco's Financial Sector (2016) (monacoRevenueObjectsArray2016[0].financialSector) = " + monacoRevenueObjectsArray2016[0].financialSector + " mil. €"));

monacoRevenueObjectsArray2016DataList.push(document.createTextNode("Monaco's Customs Duties (2016) (monacoRevenueObjectsArray2016[0].customsDuties) = " + monacoRevenueObjectsArray2016[0].customsDuties + " mil. €"));

monacoRevenueObjectsArray2016DataList.push(document.createTextNode("Monaco's Other Revenue (2016) (monacoRevenueObjectsArray2016[0].otherRevenue) = " + monacoRevenueObjectsArray2016[0].otherRevenue + " mil. €"));

var elMonacoRevenueObjectsArray2016StatsList = document.getElementById("SsMonacoRevenueObjectsArray2016StatsList");

for (var x = 0; x < monacoRevenueObjectsArray2016DataList.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(monacoRevenueObjectsArray2016DataList[x].textContent);
  listItem.textContent = textNode.textContent;
  elMonacoRevenueObjectsArray2016StatsList.appendChild(listItem);
}

var x = 1;

function changeStats(){
  var stat1List = ["Latitude: 43' 43' 49'", "Population (2016): 37,308 citizens", "Monaco's GDP (2015): 5,643.0 GDP in value in million euros"];
  var stat2List = ["Longitude: 7' 25' 36'", "Evolution (Change From Previous Year): 0.6%", "Price Index (2015): 104.1"];
  var stat3List = ["Highest point at ground level (Access to Patio Palace): 164.4 meters", "% Male (2016): 48.9%", "GDP in volume in million euros (2015): 5,420.3"];
  var stat4List = ["Length of land border: 5,469 meters", "% Female (2016): 51.1%", "Growth rate in volume (2015): 5.4%"];

  var stat1 = document.getElementById("SsStat1");
  var stat2 = document.getElementById("SsStat2");
  var stat3 = document.getElementById("SsStat3");
  var stat4 = document.getElementById("SsStat4");
  
  stat1.textContent = stat1List[x];
  stat2.textContent = stat2List[x];
  stat3.textContent = stat3List[x];
  stat4.textContent = stat4List[x];

  x += 1;

  if (x > stat1List.length - 1){
    x = 0;
  }
}

var changeStatsHandler = setInterval(changeStats, 4500)

// Using Global JavaScript Objects:
elPiValue = document.getElementById("SsPiValue");
elPiValue.textContent = "Value of Pi based on the Global JavaScript Object (Math.PI) = " + Math.PI;

// Creating Objects Using Literal Notation

var fakePlatinumHotel = {
  hotels: 200,
  rooms: 5000,
  beds: 10000,
  rentedRooms: 15000,
  hotelCapacity: 20000,
  occupationRate: 85.0,
  displayHotels: function(){
    return this.hotels;
  },
  displayRooms: function(){
    return this.rooms;
  },
  displayBeds: function(){
    return this.beds;
  },
  displayRentedRooms: function(){
    return this.rentedRooms;
  },
  displayHotelCapacity: function(){
    return this.hotelCapacity;
  },
  displayOccupationRate: function(){
    return this.occupationRate;
  },
}

var auditedHotel = fakePlatinumHotel;                                                                    ;

var platinumHotelCount = document.getElementById("SsPlatinumHotelCount");

platinumHotelCount.textContent = "auditedHotel.displayHotels (BEFORE AUDIT) = " + auditedHotel.displayHotels();

auditedHotel.hotels = 100;

var auditedPlatinumHotelCount = document.getElementById("SsAuditedPlatinumHotelCount");

auditedPlatinumHotelCount.textContent = "auditedHotel.displayHotels (AFTER AUDIT) = " + auditedHotel.displayHotels();

var platinumHotelBedCount = document.getElementById("SsPlatinumHotelBedCount");

platinumHotelBedCount.textContent = "auditedHotel['beds'] (BEFORE AUDIT) = " + auditedHotel['beds'];

auditedHotel['beds'] = 5000;

var auditedPlatinumHotelBedCount = document.getElementById("SsAuditedPlatinumHotelBedCount")

auditedPlatinumHotelBedCount.textContent = "auditedHotel['beds'] (AFTER AUDIT) = " + auditedHotel['beds'];

// Adding And Removing Properties

fakePlatinumHotel.gym = true;
fakePlatinumHotel.pool = false;
delete fakePlatinumHotel.rentedRooms;

var elGym = document.getElementById("SsPlatinumHotelGym");
elGym.textContent = "Gym present at the platinum hotel = " + fakePlatinumHotel.gym;

var elPool = document.getElementById("SsPlatinumHotelPool");
elPool.textContent = "Pool present at the platinum hotel = " + fakePlatinumHotel.pool;

var elAuditedRentedRoomCount = document.getElementById("SsAuditedPlatinumHotelRentedRoomCount");
elAuditedRentedRoomCount.textContent = "Number of rented rooms after audit for platinum hotel = " + fakePlatinumHotel.rentedRooms;

function fakeMonacoVenue(name, ticketsAmt, ticketsSold){
  this.name = name;
  this.ticketsAmt = ticketsAmt;
  this.ticketsSold = ticketsSold;

  this.returnName = function(){
    return this.name;
  };

  this.returnTicketsAmt = function(){
    return this.ticketsAmt;
  };

  this.returnTicketsSold = function(){
    return this.ticketsSold;
  }

  this.checkAvailableTickets = function(){
    return this.ticketsAmt - this.ticketsSold;
  };
}

maxwellsSilverHammer = new fakeMonacoVenue("Maxwell's Silver Hammer", 50, 0);

var elNewVenue = document.getElementById("SsNewVenue");

elNewVenue.textContent = "Name of new venue = " + maxwellsSilverHammer.returnName();

var elBeforeSoldOutVenue = document.getElementById("SsBeforeSoldOutVenue");

elBeforeSoldOutVenue.textContent = "Number of tickets before general sale = " + maxwellsSilverHammer.checkAvailableTickets();

maxwellsSilverHammer.ticketsSold = 45;

elSoldOutVenue = document.getElementById("SsSoldOutVenue");

elSoldOutVenue.textContent = "Number of tickets after general sale = " + maxwellsSilverHammer.checkAvailableTickets();

h1Tags = document.getElementsByTagName("h1");
h2Tags = document.getElementsByTagName("h2");
h3Tags = document.getElementsByTagName("h3");
pTags = document.getElementsByTagName("p");

function displayWebpageStats(h1Tags, h2Tags, h3Tags, pTags){
  webpageFact1 = document.getElementById("SsFact1");
  webpageFact2 = document.getElementById("SsFact2");
  webpageFact3 = document.getElementById("SsFact3");
  webpageFact4 = document.getElementById("SsFact4");

  webpageFact1.textContent = "Amount of h1 tags present on this page = " + h1Tags.length;
  webpageFact2.textContent = "Amount of h2 tags present on this page = " + h2Tags.length;
  webpageFact3.textContent = "Amount of h3 tags present on this page = " + h3Tags.length;
  webpageFact4.textContent = "Amount of p tags present on this page = " + pTags.length;
}

displayWebpageStats(h1Tags, h2Tags, h3Tags, pTags);

function monacoMentionCount(){
  pTagsOnPage = document.getElementsByTagName("p");

  monacoCount = 0;

  for (var i = 0; i < pTagsOnPage.length; i++){
    if (pTagsOnPage[i].textContent.includes("Monaco")){
      monacoCount += 1;
    }
  }

  console.log("monacoCount = " + monacoCount);

  return monacoCount;
}

monacoCount = monacoMentionCount();

function displayMonacoMentionCount(monacoCount){
  pTag = document.getElementById("SsMonacoMention");

  pTag.textContent = "Monaco mention count on this page = " + monacoCount;
}

displayMonacoMentionCount(monacoCount);

function returnImageAndDivTagAmt(){
  var imageCount = document.getElementsByTagName("img").length;
  var divCount = document.getElementsByTagName("div").length;
  var data = [imageCount, divCount];

  return data;
}

var printImageCount = document.getElementById("SsImageCount");
var printDivCount = document.getElementById("SsDivCount");

printImageCount.textContent = "Amount of images on this page = " + returnImageAndDivTagAmt()[0];
printDivCount.textContent = "Amount of div tags on this page = " + returnImageAndDivTagAmt()[1];

function returnLinkCount(){
  var linkCount = document.getElementsByTagName("a").length;

  return linkCount;
}

var regFunctionLinkCount = returnLinkCount();

var linkCount1 = document.getElementById("SsLinkCount1");

linkCount1.textContent = "Amount of links on this page (through a regular function) = " + regFunctionLinkCount;

var linkCountFunctionExpression = function(tagType){

  var linkCountFunctionExpressionResult = document.getElementsByTagName(tagType).length;

  return linkCountFunctionExpressionResult;
}

var functionExpressionLinkCount = linkCountFunctionExpression("a");

var linkCount2 = document.getElementById("SsLinkCount2");

linkCount2.textContent = "Amount of links on this page (through a function expression) = " + functionExpressionLinkCount;

// Using The Browser Object Model: The Window Object
elWindowInnerHeight = document.getElementById("SsWindowInnerHeight");
elWindowInnerWidth = document.getElementById("SsWindowInnerWidth");
elWindowPageXOffset = document.getElementById("SsWindowPageXOffset");
elWindowPageYOffset = document.getElementById("SsWindowPageYOffset");
elWindowScreenX = document.getElementById("SsWindowScreenX");
elWindowScreenY = document.getElementById("SsWindowScreenY");
elWindowLocation = document.getElementById("SsWindowLocation");
elWindowDocument = document.getElementById("SsWindowDocument");
elWindowHistory = document.getElementById("SsWindowHistory");
elWindowHistoryLength = document.getElementById("SsWindowHistoryLength");
elWindowScreen = document.getElementById("SsWindowScreen");
elWindowScreenWidth = document.getElementById("SsWindowScreenWidth");
elWindowScreenHeight = document.getElementById("SsWindowScreenHeight");

// Properties of The Window Object:
elWindowInnerHeight.textContent = "Inner height of this webpage window (window.innerHeight) = " + window.innerHeight;
elWindowInnerWidth.textContent = "Inner width of this webpage window (window.innerWidth) = " + window.innerWidth;
elWindowPageXOffset.textContent = "Page X Offset of this webpage window (window.pageXOffset) = " + window.pageXOffset;
elWindowPageYOffset.textContent = "Page Y Offset of this webpage window (window.pageYOffset) = " + window.pageYOffset;
elWindowScreenX.textContent = "Screen X of this webpage window (window.screenX) = " + window.screenX;
elWindowScreenY.textContent = "Screen Y of this webpage window (window.screenY) = " + window.screenY;
elWindowLocation.textContent = "Location of this webpage window (window.location) = " + window.location;
elWindowDocument.textContent = "Document for this webpage window (window.document) = " + window.document;
elWindowHistory.textContent = "History of this webpage window (window.history) = " + window.history;
elWindowHistoryLength.textContent = "History length of this webpage window (window.history.length) = " + window.history.length;
elWindowScreen.textContent = "Screen of this webpage window (window.screen) = " + window.screen;
elWindowScreenWidth.textContent = "Screen width of this webpage window (window.screen.width) = " + window.screen.width;
elWindowScreenHeight.textContent = "Screen height of this webpage window (window.screen.height) = " + window.screen.height;

// Methods for The Window Object:
window.alert("Welcome to the Stats page!");

var researchAnswer = prompt("Do you want to do more research on Monaco (via DuckDuckGo.com) or print this webpage? ('y' or 'n')");

if (researchAnswer == 'y'){
  var searchEngineAnswer = prompt("Do you want to visit 'www.duckduckgo.com' to do more research on Monaco? ('y' or 'n')");

  if (searchEngineAnswer == 'y'){
    window.open("https://duckduckgo.com/?q=monaco&t=h_&ia=news");
  }

  var printAnswer = prompt("Do you want to print this webpage? ('y' or 'n')");

  if (printAnswer == 'y'){
    window.print();
  }
}

// Using Document Object Model:

// Properties of Document Object Model:

elLastModified = document.getElementById("SsLastModified");
elLastModified.textContent = "Date when this webpage was last modified = " + document.lastModified;
elURL = document.getElementById("SsURL");
elURL.textContent = "URL for this webpage = " + document.URL;
elDomain = document.getElementById("SsDomain");
elDomain.textContent = "Domain for this webpage = " + document.domain;

// Methods of Document Object Model:

elListItemsCount = document.getElementById("SsListItemsCount");
listItemList = document.querySelectorAll("li");
listItemListLength = listItemList.length;
elListItemsCount.textContent = "Count of list items present on this page (using .querySelectorAll() and .length) = " + listItemListLength;

var msg = "<li>Date the page was modified (using += operator) = " + document.lastModified + "</li>";
var elPlaceHolder = document.getElementById("SsPlaceholder");
elPlaceHolder.innerHTML = msg;

// Global Objects: String Object
var presidentName = "Albert Alexandre Louis Pierre Grimaldi";
var presidentNameLength = presidentName.length;
var elPresidentNameLength = document.getElementById("SsPresidentNameLength");
elPresidentNameLength.textContent = "President of Monaco's name length (Albert Alexandre Louis Pierre Grimaldi) = " + presidentNameLength + " characters";
var presidentNameUpperCase = presidentName.toUpperCase();
var elPresidentNameUpperCase =  document.getElementById("SsPresidentNameUpperCase");
elPresidentNameUpperCase.textContent = "President of Monaco's name in upper case (using .toUpperCase()) = " + presidentNameUpperCase;
var presidentNameLowerCase = presidentName.toLowerCase();
var elPresidentNameLowerCase = document.getElementById("SsPresidentNameLowerCase");
elPresidentNameLowerCase.textContent = "President of Monaco's name in upper case (using .toLowerCase()) = " + presidentNameLowerCase;
var presidentNameFirstChar = presidentName.charAt(0);
var elPresidentNameFirstChar = document.getElementById("SsPresidentNameFirstChar");
elPresidentNameFirstChar.textContent = "The first character in the President of Monaco's name is (using .chartAt()) = " + presidentNameFirstChar;
var presidentNameLastNameIndex = presidentName.indexOf("Grimaldi");
var elPresidentNameLastNameIndex = document.getElementById("SsPresidentNameLastNameIndex");
elPresidentNameLastNameIndex.textContent = "The index position of the President of Monaco's last name is (using.indexOf()) = " + presidentNameLastNameIndex;
var presidentNameLastAIndex = presidentName.lastIndexOf("A");
var elPresidentNameLastAIndex = document.getElementById("SsPresidentNameLastAIndex");
elPresidentNameLastAIndex.textContent = "The last index position of the 'A' character in the President of Monaco's name is (using.lastIndexOf()) = " + presidentNameLastAIndex;
var presidentFirstName = presidentName.substring(0, 6);
var elPresidentFirstName = document.getElementById("SsPresidentFirstName");
elPresidentFirstName.textContent = "The President of Monaco's first name (using .substring()) = " + presidentFirstName;
var presidentNameSplitArray = presidentName.split(" ");
var elPresidentNameSplitArray = document.getElementById("SsPresidentNameSplitArray");

for (var x = 0 ; x < presidentNameSplitArray.length; x++){
  listItem = document.createElement("li");
  textNode = document.createTextNode(presidentNameSplitArray[x]);
  listItem.textContent = textNode.textContent;
  elPresidentNameSplitArray.appendChild(listItem);
}

presidentNameTrimmed = presidentName.trim();
elPresidentNameTrimmed = document.getElementById("SsPresidentNameTrimmed");
elPresidentNameTrimmed.textContent = "Trimmed version of President of Monaco's name (using .trim()) = " + presidentNameTrimmed;
replacedPresidentName = presidentName.replace("Albert Alexandre Louis Pierre", "Samuel Andras");
elReplacedPresidentName = document.getElementById("SsReplacedPresidentName");
elReplacedPresidentName.textContent = "Replaced version of the President of Monaco (aka me using .replace()) = " + replacedPresidentName;

// Global Objects: Number Object
monacoNumPrecipitations2016 = 575.9;
fixedMonacoNumPrecipitations2016 = monacoNumPrecipitations2016.toFixed(0);
elFixedMonacoNumPrecipitations2016 = document.getElementById("SsFixedMonacoNumPrecipitations2016");
elFixedMonacoNumPrecipitations2016.textContent = "Fixed number of Rainfall Precipitations (using .toFixed(0) = " + fixedMonacoNumPrecipitations2016 + " precipitations";
monacoFrenchPopulationPercent2016 = 12.3;
preciseMonacoFrenchPopulationPercent2016 = monacoFrenchPopulationPercent2016.toPrecision(2);
console.log("preciseMonacoFrenchPopulationPercent2016 = " + preciseMonacoFrenchPopulationPercent2016)
elPreciseMonacoFrenchPopulationPercent2016 = document.getElementById("SsPreciseMonacoFrenchPopulationPercent2016");
elPreciseMonacoFrenchPopulationPercent2016.textContent = "Precise French population in Monaco = (using .toPrecision(2)) = " + preciseMonacoFrenchPopulationPercent2016 + "%";
totalMonacoPopulation2016 = 37550;
exponentialMonacoPopulation2016 = totalMonacoPopulation2016.toExponential();
elExponentialMonacoPopulation2016 = document.getElementById("SsExponentialMonacoPopulation2016");
elExponentialMonacoPopulation2016.textContent = "Total population of Monaco in exponential notation (using .toExponential()) = " + exponentialMonacoPopulation2016 + " people";

// Global Objects: Math Object
piValue = Math.PI;
console.log("piValue = " + piValue);
elPIValue = document.getElementById("SsPIValue");
elPIValue.textContent = "Value of PI (using Math.PI) = " + piValue;
monacoImportEUForeignTradeValue2014 = 63.2;
roundedMonacoImportEUForeignTradeValue2014 = Math.round(monacoImportEUForeignTradeValue2014);
elRoundedMonacoImportEUForeignTradeValue2014 = document.getElementById("SsRoundedMonacoImportEUForeignTradeValue2014");
elRoundedMonacoImportEUForeignTradeValue2014.textContent = "Rounded version of Monaco's Import EU Foreign Trade in 2014 (using Math.round()) = " + roundedMonacoImportEUForeignTradeValue2014 + " %";
monacoCruisePassengers2016 = 182549;
squareRootOfMonacoCruisePassengers2016 = Math.sqrt(monacoCruisePassengers2016);
elSquareRootOfMonacoCruisePassengers2016 = document.getElementById("SsSquareRootOfMonacoCruisePassengers2016");
elSquareRootOfMonacoCruisePassengers2016.textContent = "Square root of the amount of cruise passengers departing from Monaco in 2016 (using Math.sqrt()) = " + squareRootOfMonacoCruisePassengers2016 + " people";
monacoRealEstateResales2016 = 2212.7;
ceilingMonacoRealEstateResales2016 = Math.ceil(monacoRealEstateResales2016);
elCeilingMonacoRealEstateResales2016 = document.getElementById("SsCeilingMonacoRealEstateResales2016");
elCeilingMonacoRealEstateResales2016.textContent = "Ceiling value (rounding up to the nearest integer) of the amount of real estate resales in Monaco in 2016 = " + ceilingMonacoRealEstateResales2016 + " million euros";
floorMonacoRealEstateResales2016 = Math.floor(monacoRealEstateResales2016);
elFloorMonacoRealEstateResales2016 = document.getElementById("SsFloorMonacoRealEstateResales2016");
elFloorMonacoRealEstateResales2016.textContent = "Floor value (rounding up to the nearest integer) of the amount of real estate resales in Monaco in 2016 = " + floorMonacoRealEstateResales2016 + " million euros";
randomNumber = Math.floor((Math.random() * 10) + 1);
elRandomNumber = document.getElementById("SsRandomNumber");
elRandomNumber.textContent = "Random number between 1 and 10 generated by Math.floor((Math.random() * 10 ) + 1) = " + randomNumber;

// Creating An Instance Of The Date Object (p. 136)
var monacoPresidentBirthday = new Date(1940, 3, 14, 10, 50, 00);
var elMonacoPresidentBirthday = document.getElementById("SsMonacoPresidentBirthday");
elMonacoPresidentBirthday.textContent = "President of Monaco (Prince Albert II)'s Birthday (Using Date()) = " + monacoPresidentBirthday;

var todayDate = new Date();

var currentDate = todayDate.getDate();
var elCurrentDate = document.getElementById("SsCurrentDate");
elCurrentDate.textContent = "Today's current date (using Date.getDate()) = " + currentDate;
var currentDay = todayDate.getDay();
var elCurrentDay = document.getElementById("SsCurrentDay");
elCurrentDay.textContent = "Today's current day (using Date.getDay()) = " + currentDay;
var currentFullYear = todayDate.getFullYear();
var elCurrentFullYear = document.getElementById("SsCurrentFullYear");
elCurrentFullYear.textContent = "Today's current full year (using Date.getFullYear()) = " + currentFullYear;
var currentHours = todayDate.getHours();
var elCurrentHours = document.getElementById("SsCurrentHours");
elCurrentHours.textContent = "Today's current hours (using Date.getHours()) = " + currentHours;
var currentMilliseconds = todayDate.getMilliseconds();
var elCurrentMilliseconds = document.getElementById("SsCurrentMilliseconds");
elCurrentMilliseconds.textContent = "Today's current milliseconds (using Date.getMilliseconds()) = " + currentMilliseconds;
var currentMinutes = todayDate.getMinutes();
var elCurrentMinutes = document.getElementById("SsCurrentMinutes");
elCurrentMinutes.textContent = "Today's current minutes (using Date.getMinutes()) = " + currentMinutes;
var currentMonth = todayDate.getMonth();
var elCurrentMonth = document.getElementById("SsCurrentMonth");
elCurrentMonth.textContent = "Today's current month (using Date.getMonth()) = " + currentMonth;
var currentSeconds = todayDate.getSeconds();
var elCurrentSeconds = document.getElementById("SsCurrentSeconds");
elCurrentSeconds.textContent = "Today's current seconds (using Date.getSeconds()) = " + currentSeconds;
var currentTime = todayDate.getTime();
var elCurrentTime = document.getElementById("SsCurrentTime");
elCurrentTime.textContent = "Today's current time (using Date.getTime()) = " + currentTime;
var currentTimezoneOffset = todayDate.getTimezoneOffset();
var elCurrentTimezoneOffset = document.getElementById("SsCurrentTimezoneOffset");
elCurrentTimezoneOffset.textContent = "Today's current timezone offset (using Date.getTimezoneOffset()) = " + currentTimezoneOffset;
var currentDateString = todayDate.toDateString();
var elCurrentDateString = document.getElementById("SsCurrentDateString");
elCurrentDateString.textContent = "Today's current date string (using Date.toDateString()) = " + currentDateString;
var timeString = todayDate.toTimeString();
var elTimeString = document.getElementById("SsTimeString");
elTimeString.textContent = "Today's current time (using Date.toTimeString()) = " + timeString;
var string = todayDate.toString();
var elString = document.getElementById("SsString");
elString.textContent = "Today's current string (using Date.toString()) = " + string;