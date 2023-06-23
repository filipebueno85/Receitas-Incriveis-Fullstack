export const fetchLogin = async () => {
  const URL = 'http://localhost:3001/login';
  console.log('api', URL);
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
