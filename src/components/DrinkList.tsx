import Link from 'next/link';
import Image from 'next/image';

import { Drink } from '@/utils/db/drinks';

interface DrinkListProps {
  drinks: Drink[];
}

export default function DrinkList(props: DrinkListProps) {
  const { drinks } = props;

  const renderDrinks = drinks.map(item => {
    const { idDrink, strDrink, strDrinkThumb } = item;

    return (
      <li key={idDrink}>
        <Link href={`/drinks/${idDrink}`} className='text-xl font-medium'>
          <div className='relative h-48 mb-4'>
            <Image
              className='rounded-md object-cover'
              src={strDrinkThumb}
              fill
              sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw'
              alt='Drink'
            />
          </div>
          {strDrink}
        </Link>
      </li>
    );
  });

  return (
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
      {renderDrinks}
    </ul>
  );
}
