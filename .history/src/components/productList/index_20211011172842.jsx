import React,{Component} from "react";
import TopList from './topList'
import "./index.scss"

export default class ProductList extends Component{
    
  
  render(){
      
      return(
        <div className="">
            {/* model_1展示 */}
            <div className="munchild_appreciate">
                <view></view>
                <view></view>
            </div>
            <TopList item={'装饰样式'}/>
            {/* model_2商品表单 */}
            <div className="munchild_product_list">商品表单</div>
            {/* <TopList item={'活动'}/> */}
        </div>
      );
  }
}