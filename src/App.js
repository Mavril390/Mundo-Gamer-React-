import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Contador from './components/Counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      {/*<NavBar />
      <ItemListContainer />
      <Contador />*/}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/detail/:id' element={<ItemDetailContainer />}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
