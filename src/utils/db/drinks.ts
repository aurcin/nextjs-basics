export interface Drink {
  idDrink: string;
  strDrink: string;
}

export async function fetchDrinks(): Promise<Drink[]> {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch drinks');
  }

  const data = await response.json();

  return data.drinks;
}
