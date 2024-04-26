export const getLocationData = async (lat, lon) => {
  try {
    console.log({lat, lon});
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode-with-timezone?latitude=${lat}&longitude=${lon}`
    );
    const data = response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

export const getLocationLatLong = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

export const getLocationLatLongList = async (locationName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    const data = response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};
