const data = [
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "New York City",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "Los Angeles",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  {
    location: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "Rome",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    location: "Moscow",
    latitude: 55.7558,
    longitude: 37.6176,
  },
  {
    location: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    location: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: "Mexico City",
    latitude: 19.4326,
    longitude: -99.1332,
  },
  {
    location: "Toronto",
    latitude: 43.6511,
    longitude: -79.3832,
  },
  {
    location: "United States",
    latitude: 37.0902,
    longitude: -95.7129,
  },
  {
    location: "India",
    latitude: 20.5937,
    longitude: 78.9629,
  },
  {
    location: "China",
    latitude: 35.8617,
    longitude: 104.1954,
  },
  {
    location: "Brazil",
    latitude: -14.235,
    longitude: -51.9253,
  },
  {
    location: "Pakistan",
    latitude: 30.3753,
    longitude: 69.3451,
  },
  {
    location: "Indonesia",
    latitude: -0.7893,
    longitude: 113.9213,
  },
  {
    location: "Bangladesh",
    latitude: 23.685,
    longitude: 90.3563,
  },
  {
    location: "Nigeria",
    latitude: 9.082,
    longitude: 8.6753,
  },
  {
    location: "Russia",
    latitude: 61.524,
    longitude: 105.3188,
  },
  {
    location: "Japan",
    latitude: 36.2048,
    longitude: 138.2529,
  },
  {
    location: "Mexico",
    latitude: 23.6345,
    longitude: -102.5528,
  },
  {
    location: "Philippines",
    latitude: 12.8797,
    longitude: 121.774,
  },
  {
    location: "Vietnam",
    latitude: 14.0583,
    longitude: 108.2772,
  },
  {
    location: "Turkey",
    latitude: 38.9637,
    longitude: 35.2433,
  },
  {
    location: "Iran",
    latitude: 32.4279,
    longitude: 53.688,
  },
];

function getLocatios() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;
  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );
  return found || {};
}

export { getLocationByName, getLocatios };
