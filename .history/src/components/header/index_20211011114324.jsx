import React, { Component } from "react";
import './index.scss'
export default class Header extends Component{
    render(){
        return(
            <div className="mn" >
                {/* 头部小导航栏 */}
                <view className="minTop">
                    <view className='minTopft'>
                        <view className='time'>在线时间 08:30 ~ 21:30</view>
                        <view className='time'>欢迎访问A</view>
                    </view>
                    <view className='minToprt'></view>
                </view>
                {/* 头部大导航栏 */}
                <view className="maxTop"></view>
            </div>
        )
    }
}