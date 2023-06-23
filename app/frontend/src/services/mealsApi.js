export const fetchApiMeals = async (endpoint) => {
  const URL = `http://localhost:3001/meals/${endpoint}`;
  console.log('api', URL);
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

// SIMULAÇÃO CHAMADA API

// const mealsApi = async () => {
//   const result = await fetchApiDrinks('search.php?s=Arrabiata');
//   console.log(result);
// };
// useEffect(() => {
//   mealsApi();
// }, []);
