import React,{Component} from "react";
import TopList from './topList'
import "./index.scss"

export default class ProductList extends Component{
    
    item = (date)=> {
        
    }
  render(){
      
      return(
        <div className="">
            <TopList item={'123'}/>
            <div className="munchild_product_list">商品表单</div>
        </div>
      );
  }
}