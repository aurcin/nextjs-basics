import { notFound } from 'next/navigation';
import Image from 'next/image';

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
      <Image
        src={strDrinkThumb}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        width={300}
        height={300}
        alt='drink'
        priority
      />
      <h1 className='text-4xl mb-8'>{strDrink}</h1>
    </div>
  );
}
