import React, { Component } from "react";
import './index.scss'

export default class Footer extends Component{
    
    render(){
        return(
            <div className="mu" >
                <div className="mut">APLUM</div>
                <div className="mub">
                    <div className="mutt">
                        <view className="ttbn" >
                            <ul>
                                <p className="p">Helvetica</p>
                                <li className="li">本店均为健康植被</li>
                            </ul>
                        </view>
                        <view className="ttbn" >
                            <ul>
                                <p className="p">Helvetica</p>
                                <li className="li">本店均为健康植被</li>
                            </ul>
                        </view>
                        <view className="ttbn" >
                            <ul>
                                <p className="p">Helvetica</p>
                                <li className="li">本店均为健康植被</li>
                            </ul>
                        </view>
                        <view className="ttbn" >
                            <ul>
                                <p className="p">Helvetica</p>
                                <li className="li">本店均为健康植被</li>
                            </ul>
                        </view>
                    </div>
                    <div className="mubb" >
                        <view className="bbtn">
                            <p className="copright">Copyright © 2021 Aplum,  All rights reserved</p>
                        </view>
                        <view className="bbtnx">
                            <a className="icon">facebook</a>
                            <a className="icon">
                            <IconFont type = "icon-icon-facebook"/>
                            </a>
                            <a className="icon"></a>
                            <a className="icon"></a>
                        </view>
                    </div>
                 
                </div>
            </div>
        )
    }
}