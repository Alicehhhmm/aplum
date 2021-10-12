import React,{Component} from "react";
// import CarouselComp from "../carousel";
import ProductList from '../productList'
import "./index.scss"
import { Carousel } from 'antd';

export default class Body extends Component{
    
  render(){
    const contentStyle = {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };
      return(
        <div className="mun">
          {/* <CarouselComp/> */}
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
          </Carousel>

          <div className="mun_child"></div>
          <ProductList/>
        </div>
      );
  }
}