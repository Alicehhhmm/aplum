import React,{Component} from "react";
import CarouselComp from "../carousel";
import ProductList from '../productList'
import "./index.scss"

export default class Body extends Component{
    
  render(){
      return(
        <div className="mun">
          <CarouselComp/>
          <div className="mun"></div>
          <ProductList/>
        </div>
      );
  }
}