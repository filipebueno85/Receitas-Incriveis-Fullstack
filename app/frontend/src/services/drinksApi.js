export const fetchApiDrinks = async (endpoint) => {
  // const URL = `https://www.thecocktaildb.com/api/json/v1/1/${endpoint}`;
  const URL = `http://localhost:3001/drinks/${endpoint}`;
  console.log('api', URL);
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

// SIMULAÇÃO CHAMADA API

// const drinksApi = async () => {
//   const result = await fetchApiDrinks('search.php?s=margarita');
//   console.log(result);
// };
// useEffect(() => {
//   drinksApi();
// }, []);
