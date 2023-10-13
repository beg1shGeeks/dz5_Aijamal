import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Porducts from './assets/Pages/porducts/Products';
import Basket from './assets/Pages/basket/Basket';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Porducts />} />
        <Route path="/Basket" element={<Basket />} />
      </Route>
    </Routes>
  );
};

export default App;
