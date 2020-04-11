import React from 'react';
import ReactDOM from 'react-dom';

// 解构路由组件
//BrowserRouter   约定模式 为 history
//HashRouter     约定模式 为 hash
//Route        匹配、展示
// NavLink    声明式跳转 还可以约定 路由激活状态
//Link        声明式跳转   无激活状态
// Redirect   重定向

//**Route**属性
//path 路径
//component 在地址匹配的时候React的组件才会被渲染

import './utils/font'
import  './assets/css/index.css'
import {BrowserRouter,Route} from 'react-router-dom';
import Default from "./layouts/Default";


//在react应用内部创建全局属性
import {baseUrl} from './server';
React.baseUrl = baseUrl;
React.Component.prototype.baseUrl=baseUrl;


import './plugins/axios'
ReactDOM.render(
    <BrowserRouter>
         <Route component={Default}/>
    </BrowserRouter>,
  document.getElementById('root')
);
