import Pocketbase from 'pocketbase';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Koti from './components/Koti';
import Menu from './components/Menu';

const App = () => {
  const pb = new Pocketbase('https://yusushi.fly.dev');
  const categories = ['alkuruokia', 'kanaruokia', 'sianliharuokia', 'naudanliharuokia', 'kevytruokia', 'meren_antimia', 'jalkiruokia'];

  return (
    <>
      <NavBar categories={categories} />
      <Container className='main'>
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
