import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/AddProduct/AddProduct";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/details/:id">
            <ProductDetails />
          </Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
