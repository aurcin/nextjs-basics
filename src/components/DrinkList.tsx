import Link from 'next/link';

import { Drink } from '@/utils/db/drinks';

interface DrinkListProps {
  drinks: Drink[];
}

export default function DrinkList(props: DrinkListProps) {
  const { drinks } = props;

  console.log(drinks);

  const renderDrinks = drinks.map(item => {
    const { idDrink, strDrink } = item;

    return (
      <li key={idDrink}>
        <Link href={`/drinks/${idDrink}`} className='text-xl font-medium'>
          {strDrink}
        </Link>
      </li>
    );
  });

  return <ul className='manu menu-vertical pl-0'>{renderDrinks}</ul>;
}
