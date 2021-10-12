import React,{Component} from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./index.scss"

export default class Carousel extends Component{
    
  render(){
      return(
        <div className="">
          <div className="munchild_carousel">轮播</div>
        </div>
      );
  }
}