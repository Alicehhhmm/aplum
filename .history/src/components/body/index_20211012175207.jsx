import React,{Component} from "react";
import CarouselComp from "../carousel";
import ProductList from '../productList'
import "./index.scss"
import 'antd/dist/antd.css';
export default class Body extends Component{
    
  render(){
      return(
        <div className="mun">
          <CarouselComp/>
          <div className="mun_child"></div>
          <ProductList/>
        </div>
      );
  }
}