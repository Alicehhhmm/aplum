import React,{Component} from "react";
import "./index.scss"

export default class TopList extends Component{
    constructor(props){
        sa
        console.log('z',this.props.item);
    }
    render(){
        return(
            <div className="mod">
                <view className="modft">
                    <span>{this.props.item}</span>
                    <span className="modtext">alcie</span>
                </view>
                <view className="modrt">+ 查更多</view>
            </div>
        );
    }
  }