import React,{Component} from "react";
import TopList from './topList'
import "./index.scss"

export default class ProductList extends Component{
    
  render(){
      return(
        <div className="">
            <TopList/>
            <div className="munchild_product_list">商品表单</div>
        </div>
      );
  }
}