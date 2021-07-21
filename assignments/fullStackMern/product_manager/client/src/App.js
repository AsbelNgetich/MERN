
import './App.css';
//import AllProduct from './components/AllProducts';
import {Link, Router} from "@reach/router"
import CreateProduct from './components/CreateProduct';
//import ProductDetal from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <h1>All Products</h1>
      <Link to="/quotes/new">Add a new Product </Link>
      <Router>
       
        <CreateProduct path="/quotes/new"/>
       {/* <ProductDetail path="/quotes/info/:id"/> */}
      </Router>
    </div>
  );
}

export default App;
