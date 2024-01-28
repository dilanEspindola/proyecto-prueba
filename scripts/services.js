export const getData = async () => {
  try {
    const API_URL = "https://rickandmortyapi.com/api/character";
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
