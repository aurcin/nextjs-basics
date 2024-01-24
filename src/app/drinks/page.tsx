import { fetchDrinks } from '@/utils/db/drinks';

export default async function DrinksPage() {
  const data = await fetchDrinks();
  console.log(data);

  return (
    <main>
      <h1 className='text-7xl'>Drinks Page</h1>
    </main>
  );
}
