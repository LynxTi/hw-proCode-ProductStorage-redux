import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import ProductsPage from '../containers/ProductsPage';
import StoragePage from '../containers/StoragePage';

const products = [{name:'Vafelki', price: 10, id: '1'}, {name:'Bubliki', price: 5, id: '2'},{name:'Pizza', price: 15, id: '3'}]

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='ProductsPage' element={<ProductsPage/>}/>
        <Route exact path='StoragePage' element={<StoragePage products={products}/>}/>
      </Routes>
    </div>
  );
}

export default App;
