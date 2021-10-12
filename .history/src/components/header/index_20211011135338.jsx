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
                        <view className='time'>欢迎访问Aplum在线商城</view>
                    </view>
                    <view className='minToprt'>
                        <view className="icn">1</view>
                        <view className="icn">1</view>
                        <view className="icn">3</view>
                    </view>
                </view>
                {/* 头部大导航栏 */}
                <view className="maxTop">
                    <view className="maxToptp"><span className='logo'>Logo</span></view>
                    <view className="maxTopbt">
                        <view c>商城首页</view>
                        <view>所以商品</view>
                        <view>花语预览</view>
                        <view>关于我们</view>
                    </view>
                </view>
            </div>
        )
    }
}