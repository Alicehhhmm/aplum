import React,{Component} from "react";
import "./index.scss"

export default class TopList extends Component{
    constructor(prop){
        console.log('z',this.prop);
    }
    render(){
        return(
            <div className="mod">
                <view className="modft">
                    <span>{this.prop.i}</span>
                    <span className="modtext">alcie</span>
                </view>
                <view className="modrt">+ 查更多</view>
            </div>
        );
    }
  }