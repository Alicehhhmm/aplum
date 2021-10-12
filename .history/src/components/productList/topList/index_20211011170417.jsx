import React,{Component} from "react";
import "./index.scss"

export default class TopList extends Component{
    constructor(props){
        console.log('z',this.props);
    }
    render(){
        return(
            <div className="mod">
                <view className="modft">
                    <span>{this.prop}</span>
                    <span className="modtext">alcie</span>
                </view>
                <view className="modrt">+ 查更多</view>
            </div>
        );
    }
  }