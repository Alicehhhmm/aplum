import React,{Component} from "react";
import "./index.scss"

export default class TopList extends Component{
    constructor(prop)
    render(){
        return(
            <div className="mod">
                <view className="modft">
                    <span>装饰</span>
                    <span className="modtext">alcie</span>
                </view>
                <view className="modrt">+ 查更多</view>
            </div>
        );
    }
  }