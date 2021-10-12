import React,{Component} from "react";
// 插件引入
import { Carousel } from 'antd';

import "./index.scss"

export default class CarouselComp extends Component{
  
  render(){
    const contentStyle = {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };
      return(
        <div className="">
          <div className="munchild_carousel">轮播图</div>
        </div>
      );
  }
}
