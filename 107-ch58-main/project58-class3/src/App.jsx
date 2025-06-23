import './App.css';
import Footer from './components/footer';
import Navbar from './components/navBar';
import Product from './components/product';
import QtyPicker from './components/qtyPicker';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {  
  return (
     
      <div className="App">
        <Navbar></Navbar>
        <h1>Hello from REACT</h1>
       {/* <QtyPicker></QtyPicker>*/}
        <Catalog></Catalog>
        <Footer></Footer>
      </div>    
  );
}

export default App
