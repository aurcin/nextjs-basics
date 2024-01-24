export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

export async function fetchDrinks(): Promise<Drink[]> {
  const url = `${baseUrl}/search.php?f=a`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch drinks');
  }

  const data = await response.json();

  return data.drinks;
}

export async function fetchDrinkById(id: string): Promise<Drink | null> {
  const url = `${baseUrl}/lookup.php?i=${id}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch drink');
  }

  const data = await response.json();

  if (!data?.drinks[0]) {
    return null;
  }

  return data.drinks[0];
}
