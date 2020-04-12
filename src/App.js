import './App.css';
import React from "react";
import Home from "./components/home/home";
import Header from "./components/header/header";
import RawMaterial from "./components/rawMaterialCalculation/rawMaterial";
import RawMaterialType from "./components/rawMaterialType/rawMaterialType"
import BomCalculation from "./components/bomCalulation/bomCalculation"
import { Route, Switch } from "react-router-dom";

function App() {
  return(
    <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/rawMaterial" component={RawMaterial} />
      <Route path="/rawMaterialType" component={RawMaterialType} />
      <Route path="/bomCalculation" component={BomCalculation} />
    </Switch>
</div>)
}

export default App;
