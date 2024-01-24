// import { fetchDrinks } from '@/utils/db/drinks';

interface DrinkPageProps {
  params: {
    id: string;
  };
}

export default async function DrinkPage(props: DrinkPageProps) {
  const { id } = props.params;
  // const data = await fetchDrinks();
  // console.log(data);

  return (
    <main>
      <h1 className='text-7xl'>Drink {id} Page</h1>
    </main>
  );
}
