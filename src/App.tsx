import React, { Component } from "react";
import "./App.css";
import { Product } from "./common/business-models/Product";

import { setProducts } from "./Redux/Product/ProductDispatcher";
import rootStore from "./Redux/rootStore";

import PremiumView from "./components/Premium/Premium";
class App extends Component {
  public componentDidMount() {
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

    rootStore.dispatch(setProducts([product]));
  }

  public render() {
    return (
      <div className="App">
        <PremiumView />
      </div>
    );
  }
}

export default App;
