import React, { Component } from "react";
import './index.css'
// import iconFont from 'react-native-web-iconfont';
import IconFont from '../../iconfont'

export default class Footer extends Component{
    
    render(){
        // const IconFont = iconFont('http://at.alicdn.com/t/font_2841177_2qns8wxk5sa.css');
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
                            <a className="icon"></a>
                            <a className="icon"></a>
                            <a className="icon"></a>
                        </view>
                    </div>
                    <IconFont name="icon-facebook" size={20}>io</IconFont>
                </div>
            </div>
        )
    }
}