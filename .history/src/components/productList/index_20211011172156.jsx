import React,{Component} from "react";
import TopList from './topList'
import "./index.scss"

export default class ProductList extends Component{
    
  
  render(){
      
      return(
        <div className="">
            {/* 展示 */}
            <div>
                <view></view>
                <view></view>
            </div>
            <TopList item={'装饰样式'}/>
            <div className="munchild_product_list">商品表单</div>
            {/* <TopList item={'活动'}/> */}
        </div>
      );
  }
}