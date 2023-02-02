import { useState, useEffect } from 'react';
import Pocketbase , { Record } from 'pocketbase';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Koti from './components/Koti';
import Menu from './components/Menu';

const App = () => {
  const [food, setFood] = useState<Record[]>([]);
  const pb = new Pocketbase('https://yusushi.fly.dev');

  const categories = ['alkuruokia', 'kanaruokia', 'sianliharuokia', 'naudanliharuokia', 'kevytruokia', 'meren_antimia', 'jalkiruokia'];
  
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

  return (
    <>
      <NavBar categories={categories} />
      <Container className='main'>
        {/*<h1 className='mt-4 mb-4'>Tervetuloa!</h1>
          {food?.sort((a: Record, b: Record) => {
            return a.numero - b.numero;
          }).map((foodItem: Record) => {
            return (
              <p key={foodItem.id}>{foodItem.numero}. {foodItem.nimi} {foodItem.hinta}</p>
            )
          })}*/}
          <Routes>
            <Route path='/' element = {<Koti />} />
            <Route path='/ruokalista' element={<Menu data={pb} categories={categories} />} />
            <Route path='/ruokalista/:kategoria' element={<Menu data={pb} categories={categories} />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Container>
        <Footer />
    </>
  )
}

export default App
