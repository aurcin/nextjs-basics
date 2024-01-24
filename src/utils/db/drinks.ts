export async function fetchDrinks() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch drinks');
  }

  return await response.json();
}
