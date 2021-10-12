import React,{Component} from "react";
import TopList from './topList'
import Imgs from '../../assets/img'
import "./index.scss"

export default class ProductList extends Component{
    
  
  render(){
      
      return(
        <div className="">
            {/* model_1展示 */}
            <div className="munchild_appreciate">
                <view className="imgft"><img src={Imgs.fl} /> </view>
                <view className="imgrt">2</view>
            </div>
            <TopList item={'装饰样式'}/>
            {/* model_2商品表单 */}
            <div className="munchild_product_list">商品表单</div>
            <TopList item={'活动'}/>
            {/* model_3 */}
            <div className="munchild_flashSale">限时抢购</div>
            {/* model_4展示 */}
            <div className="munchild_appreciate2">
                <view></view>
                <view></view>
            </div>
            {/* model_5装饰家园 */}
            <TopList item={'装饰家园'}/>
            <div className="munchild_decorate_list">商品表单</div>
            {/* model_6展示 */}
            <div className="munchild_appreciate3"></div>
        </div>
      );
  }
}