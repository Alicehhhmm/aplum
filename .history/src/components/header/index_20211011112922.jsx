import React, { Component } from "react";
import './index.scss'
export default class Header extends Component{
    render(){
        return(
            <div className="mn" >
                {/* 头部小导航栏 */}
                <View className="minTop">
                    <view></view>
                </View>
                {/* 头部大导航栏 */}
                <view className="maxTop"></view>
            </div>
        )
    }
}