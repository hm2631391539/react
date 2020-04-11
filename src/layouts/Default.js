import React,{Component} from "react";
// 解构路由组件
//BrowserRouter   约定模式 为 history
//HashRouter     约定模式 为 hash
//Route        匹配、展示
// NavLink    声明式跳转 还可以约定 路由激活状态
//Link        声明式跳转   无激活状态
// ------Redirect   重定向
//from来自
//to 去向
//-----------
//Switch   排他性匹配

//**Route**属性
//path 路径
//component 在地址匹配的时候React的组件才会被渲染


import {NavLink,Route,Switch,Redirect} from 'react-router-dom';
import Footer from "./footer";
import Home from "../pages/Home";
import Goods from "../pages/Goods";
import SoSo from "../pages/SoSo";
import User from "../pages/User";
import NoPage from "../pages/NoPage";
import Trip from "../pages/Trip";
import Follow from "../pages/Follow";
import Detail from "../pages/Detail";
import Loading from "../components/loading";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import XiAn from "../pages/xian";
import Header from "./header";
import pubsub from 'pubsub-js'
import Strategy from "../pages/Strategy";

export default class Default extends Component{
	
	
	state={
	  bNav:false,
	  bFoot:false,
	  bLoading:false
	};
	
	constructor(props){
	  super();
	
	  //订阅
	  pubsub.subscribe('UPDATE_LOADING',(mess,data)=>{
	    this.setState({bLoading:data})
	  })
	
	}
	
	static getDerivedStateFromProps(nextProps,nextState){
	
	  // console.log('getDerivedStateFromProps','路由观测',nextProps);
	
	  let path = nextProps.location.pathname;
	
	  if (/follow|goods/.test(path)){
	    return {
	      bNav:true,
	      bFoot:true
	    }
	  }
	
	  if (/login|reg|detail/.test(path)){
	    return {
	      bNav:false,
	      bFoot:false
	    }
	  }
	
	  if (/user|home|strategy|trip/.test(path)){
	    return {
	      bNav:false,
	      bFoot:true
	    }
	  }
	
	
	}
	
	
    render() {
		 let {bNav,bFoot,bLoading} = this.state;
        return (
            <div className={'Default'}>
                {/*<Loading/>*/}
				{bLoading && <Loading/> }
				{bNav && <Header/>}
                <Switch>
                    <Route  path={'/home'} component={Home}/>


                    <Route exact path={'/goods/index'} component={Goods}/>
					<Redirect exact from={'/goods'} to={'/goods/index'} />
                    <Route exact path={'/goods/follow'} component={Follow}/>

					<Route path={'/trip'} component={Trip}/>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/reg'} component={Reg}/>
                    <Route exact path={`/soso`} component={SoSo}></Route>
                    <Route exact path={'/user'} component={User}/>
                    <Route exact path={'/strategy'} component={Strategy}/>
                    <Route exact path={'/follow'} component={Follow}/>
					<Route path="/detail/:_id" component={Detail}/>
                    <Redirect exact from={'/'} to={'/home'} />
                    <Route component={NoPage}></Route>
                    {/*-----------*/}
                    {/*<Auth path={'/goods'} component={Goods}/>*/}
                    {/*<Auth path={'/user'} component={User}/>*/}
                    {/*/!*render---Function---内联渲染和包装组件*!/*/}
                    {/*<Route path={'/login'} render={(props)=>{*/}
                    {/*    console.log(props)*/}
                    {/*    return <Login {...props} lala={"hahha"}/>*/}
                </Switch>
                {bFoot ? <Footer/> : null}

            </div>
        )
    }
}