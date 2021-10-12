import React,{Component} from "react";
// 插件引入
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./index.scss"

export default class CarouselComp extends Component{
    
  render(){
      return(
        <Carousel showArrows={true} >
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
         </Carousel>
         
        // <div className="">
        //   <div className="munchild_carousel">轮播</div>
        // </div>
      );
  }
}
