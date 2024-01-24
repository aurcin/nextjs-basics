import { fetchDrinks } from '@/utils/db/drinks';
import DrinkList from '@/components/DrinkList';

export default async function DrinksPage() {
  const drinks = await fetchDrinks();

  return (
    <div>
      <DrinkList drinks={drinks} />
    </div>
  );
}
