import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/Body/Product/Product';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Product></Product>}></Route>
        <Route path='/' element={<Order></Order>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/' element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
