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
            <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  mountNode,
          <div className="munchild_carousel">轮播图</div>
        </div>
      );
  }
}
