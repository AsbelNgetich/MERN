
import './App.css';
import AllProducts from './components/AllProducts';
import {Link, Router} from "@reach/router"
import CreateProduct from './components/CreateProduct';
import ViewProduct from './components/ViewProduct';
//import ProductDetal from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <Link to="/quotes/new">Add a new Product </Link>
      <Router>
        <CreateProduct path="/quotes/new"/>
        <AllProducts path="/"/>
        <ViewProduct path="/:id"/>
        
       {/* <ProductDetail path="/quotes/info/:id"/> */}
      </Router>
    </div>
  );
}

export default App;
