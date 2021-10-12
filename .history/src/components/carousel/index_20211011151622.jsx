import React,{Component} from "react";
// 插件引入
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./index.scss"

import { Carousel } from 'react-responsive-carousel';
export default class  extends Component{
    
  render(){
      return(
        <Carousel>
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
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));