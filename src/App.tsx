import React, { Component } from "react";
import "./App.css";
import { CartProduct } from "./common/business-models/CartProduct";
import {Product} from "./common/business-models/Product";
import CartContainer from "./components/Cart/CartContainer";
import ShelfContainer from "./components/Shelf/ShelfContainer";
import { AddCartProductAction } from "./Redux/CartProduct/CartProductActions";
import { setProducts } from "./Redux/Product/ProductDispatcher";
import rootStore from "./Redux/rootStore";
import logo from "./logo.svg";
import PremiumView from "./components/TAL/Premium";
class App extends Component {
  public componentDidMount() {
    const cartProduct: CartProduct = {
      availableSizes: ["S", "XS"],
      currencyFormat: "$",
      currencyId: "USD",
      description: "4 MSL",
      id: 12,
      installments: 9,
      isFreeShipping: true,
      itemQuantity: 1,
      price: 10.9,
      sku: 12064273040195392,
      style: "Black with custom print",
      title: "Cat Tee Black T-Shirt",
    };

    const product: Product = {
      availableSizes: ["S", "XS"],
      currencyFormat: "$",
      currencyId: "USD",
      description: "4 MSL",
      id: 12,
      installments: 9,
      isFreeShipping: true,
      price: 12.9,
      sku: 12064273040195392,
      style: "Black with custom print",
      title: "Cat Tee Black T-Shirt",
    };

    const product2: Product = {
      availableSizes: ["S", "XS"],
      currencyFormat: "$",
      currencyId: "USD",
      description: "4 MSL",
      id: 12,
      installments: 9,
      isFreeShipping: true,
      price: 10.9,
      sku: 51498472915966366,
      style: "Black with custom print",
      title: "Cat Tee Black T-Shirt",
    };

    rootStore.dispatch(new AddCartProductAction(cartProduct));
    rootStore.dispatch(setProducts([product, product2]));
  }

  public render() {
    return (
      <div className="App">       
       <PremiumView/>  
        {/* <CartContainer/>
        <ShelfContainer/>      */}
      </div>
    );
  }
}

export default App;
