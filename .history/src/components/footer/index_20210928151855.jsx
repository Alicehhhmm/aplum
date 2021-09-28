import React, { Component } from "react";
import './index.css'

export default class Footer extends Component{
    render(){
        return(
            <div className="mu" >
                <div className="mut">APLUM</div>
                <div className="mub">
                    <div className="mutt">
                        <view className="ttbn" >
                            <p></p>
                            <ul>
                                <li>本店均为健康植被</li>
                            </ul>
                        </view>
                        <view className="ttbn" >2</view>
                        <view className="ttbn" >3</view>
                        <view className="ttbn" >4</view>
                    </div>
                    <div className="mubb" >
                        <view className="bbtn"></view>
                        <view className="bbtn"></view>
                    </div>
                </div>
            </div>
        )
    }
}