import React,{Component} from 'react';
import "./footer.css";

import {NavLink,Route,Switch,Redirect   } from 'react-router-dom';
export default class Footer extends Component{
  render(){
    return (
      <div className="foot-btn">
            <div className="footer">
                <NavLink activeClassName='default__nav--active' to={'/home'}><span className="iconfont icon-sp"></span>首页</NavLink>
                <NavLink activeClassName='default__nav--active' to={'/goods'}><span className="iconfont icon-fdj"></span>发现</NavLink>
                <NavLink activeClassName='default__nav--active' to={'/strategy'}><span className="iconfont icon-caidan"></span>攻略</NavLink>
                <NavLink activeClassName='default__nav--active' to={'/trip'}><span className="iconfont icon-fx"></span>行程</NavLink>
                <NavLink activeClassName='default__nav--active' to={'/user'}><span className="iconfont icon-wd"></span>我的</NavLink>
            </div>

      </div>
    )
  }
}