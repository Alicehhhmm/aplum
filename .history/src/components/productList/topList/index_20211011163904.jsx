import React,{Component} from "react";
import "./index.scss"

export default class TopList extends Component{
    
    render(){
        return(
            <div className="mod">
                <view className="modft">
                    <span className=>装饰</span>
                    <span>alcie</span>
                </view>
                <view className="modrt">查更多</view>
            </div>
        );
    }
  }