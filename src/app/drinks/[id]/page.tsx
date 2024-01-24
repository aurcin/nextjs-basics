import { notFound } from 'next/navigation';

import { fetchDrinkById } from '@/utils/db/drinks';

interface DrinkPageProps {
  params: {
    id: string;
  };
}

export default async function DrinkPage(props: DrinkPageProps) {
  const { id } = props.params;
  const drink = await fetchDrinkById(id);

  if (!drink) {
    return notFound();
  }

  const { strDrink, strDrinkThumb } = drink;

  return (
    <div>
      <h1 className='text-4xl mb-8'>{strDrink}</h1>
    </div>
  );
}
