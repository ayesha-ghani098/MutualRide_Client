export const mockDataRequest = [
  {
    id: 1,
    rideId: "",
    name: "Ayesha Ghani",
    image: "",
    source: "North Karachi",
    destination: "karachi University",
    requiredSeats: 4,
  },
  {
    id: 2,
    rideId: "",
    name: "Saqib",
    source: "New Karachi",
    destination: "Dha",
    requiredSeats: 1,
  },
];

export const mockDataRide = [
  {
    id: 1,
    name: "Ghani",
    image: "",
    source: "North Town",
    destination: "Iqra University",
    time: "12:00pm",
    seatsAvailable: 4,
    costPerKm: 10,
    vehicleType: "Car",
  },
  {
    id: 2,
    name: "Asmara",
    source: "Johar",
    destination: "Malir",
    time: "11:00pm",
    seatsAvailable: 2,
    costPerKm: 5,
    vehicleType: "Auto",
  },
];

export const driverpaths = [
  {
    id:1,
    name: "Home",
    path: "/driver",
  },
  {
    id:2,
    name: "My Rides",
    path: "/driver/my-rides",
  },
];

export const passengerpaths = [
  {
    id:1,
    name: "Home",
    path: "/passenger",
  },
  {
    id:2,
    name: "My Rides",
    path: "/passenger/my-rides",
  },
];
