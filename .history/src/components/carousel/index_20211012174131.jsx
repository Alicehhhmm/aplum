import React,{Component} from "react";
// 插件引入
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./index.scss"

export default class CarouselComp extends Component{
    
  render(){
      return(
        <div className="">
          <div className="munchild_carousel">轮播图</div>
        </div>
      );
  }
}
