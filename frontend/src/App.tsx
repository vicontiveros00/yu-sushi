import { useState, useEffect } from 'react';
import Pocketbase , { Record } from 'pocketbase';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

const App = () => {
  const [food, setFood] = useState<Record[]>([]);
  const pb = new Pocketbase('https://yusushi.fly.dev');
  
  useEffect(() => {
    const getSomeFood = async() => {
      const getAllFood = categories.map(async (category) => {
        return await pb.collection(category).getFullList();
      })
      setFood((await Promise.all(getAllFood)).flat());
    }
    getSomeFood();
  }, [])
  //use above function for getting all menu items

  const categories = ['alkuruokia', 'kanaruokia', 'sianliharuokia', 'naudanliharuokia', 'kevytruokia', 'meren_antimia', 'jalkiruokia'];

  return (
    <>
      <NavBar categories={categories} />
      <Container>
        <h1 className='mt-4 mb-4'>Tervetuloa!</h1>
          {food?.sort((a: Record, b: Record) => {
            return a.numero - b.numero;
          }).map((foodItem: Record) => {
            return (
              <p key={foodItem.id}>{foodItem.numero}. {foodItem.nimi} {foodItem.hinta}</p>
            )
          })}
      </Container>
    </>
  )
}

export default App
