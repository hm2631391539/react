import React,{Component} from 'react';

import UcSwiper from "../components/uc-swiper";


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
import '../assets/css/home.css'

import {NavLink,Route,Switch,Redirect,BrowserRouter, withRouter   } from 'react-router-dom';

import BareScreen from "../components/BareScreen";
import UcList from "../components/uc-list";

import BaoJi from "./BaoJi";
import Two from "./two";
import XiAn from "./xian";


class Home extends Component{
	state={
		banner:[],
		home:null,
		// str :["儿童劫皮肤", "小学生诺手", "无敌托儿索"],
		i:0
	}
    componentDidMount(){

        //读取数据
		React.axios.all([
			React.axios({url:'/api/goods/banner',params:{_page:1,_limit:3}}),
			React.axios({url:'/api/goods/home',params:{_page:1,_limit:12}})
		]).then(React.axios.spread((banner,home)=>{
			// console.log(home)
			banner.data.data.map(item=>item.banner=this.baseUrl+'/'+item.banner)
			console.log(banner)

			this.setState({
			banner:banner.data.data,
			home:home.data.data
			})
		}))
		this.axios({url:'/api/goods/home',params:{_page:1,_limit:10}}).then(res=>console.log(res));

        // let res = await this.axios({url:'/api/goods/home',params:{_page:1,_limit:10}});

        // this.setState({banner:res.data.data})

        // axios({url:'/mock/home',params:{_page:1,_limit:5}}).then(res=>console.log('mock',res))

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

	}
	dd=()=>{
		setInterval(()=>{
			this.setState({
				i:this.state.i++
			})
			this.chang.setAttribute('placeholder',this.state.str[this.state.i])
		},1000)
	}

	// 输入框的内容定时切换
    // let ;
    // let i = -1;
    // setInterval(function () {
    //     i++;
    //     if (i == str1.length) {
    //         i = 0;
    //     };
    //     $(".qiehuan").attr("placeholder", str1[i])
    // }, 1000)


	renderPage=()=>{
		// console.log(this.chang)
		// console.log('renderPage',this.state.home);
		let {match}=this.props;
		let {banner,home}=this.state;
		// console.log(match.url,match.patch)
		return	(
			<div className="Home">
				<div className="header">
				<span className="iconfont icon-fdj"></span>
				<input type="text" ref={el=>this.chang=el}  onClick={()=>this.props.history.push('/soso')} placeholder="西安泡馍"/>
				<span className="iconfont icon-ht"></span>
				<span className="iconfont icon-gwc"></span>
			</div>
				<UcSwiper
					data={banner}
					to={{pathname:'/detail',apiname:'banner'}}
					 style={{height:'3.5rem',paddingTop:'1rem'}}
				/>
				<div className={'Section'}>
					{/*src={require('../assets/img/say.png')}*/}
					<a><img src={require('../assets/img/x1.png')} alt=""/>机票</a>
					<a><img src={require('../assets/img/x2.png')} alt=""/>酒店</a>
					<a><img src={require('../assets/img/x3.png')} alt=""/>火车票</a>
					<a><img src={require('../assets/img/x4.png')} alt=""/>汽车票</a>
					<a><img src={require('../assets/img/x5.png')} alt=""/>门票</a>

				</div>
				<div className={'tuijian'}>
					<div className={'tjlist'}>
						<p>出境游</p>
						<span>走遍全球</span>
					</div>
					<div className={'tjlist'}>
						<p>出境游</p>
						<span>走遍全球</span>
					</div>
					<div className={'tjlist'}>
						<p>出境游</p>
						<span>走遍全球</span>
					</div>
					<div className={'tjlist'}>
						<p>出境游</p>
						<span>走遍全球</span>
					</div>
					<div className={'tjlist'}>
						<p>出境游</p>
						<span>走遍全球</span>
					</div>
					<div className={'tjlist'}>
						<p>出境游</p>
						<span>走遍全球</span>
					</div>
					<div className={'tjlist'}>
						<p>出境游</p>
						<span>走遍全球</span>
					</div>
					<div className={'tjlist'}>
						<p>出境游</p>
						<span>走遍全球</span>
					</div>

				</div>
				<div className={'vip'}>
					<div className={'vipleft'}>
						<strong>&nbsp;&nbsp;我的会员&nbsp;&nbsp;</strong>
						<span>抢限量福利&nbsp;&nbsp;</span>
					</div>
					<div className={'vipright'}>
						<strong>&nbsp;&nbsp;签到&nbsp;&nbsp;</strong>
						<span>领里程&nbsp;&nbsp;</span>
					</div>

				</div>

				<div className={'nav'}>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/index`}>西安</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/baoji`}>宝鸡</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/beijing`}>北京</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/shanghai`}>上海</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/sanya`}>三亚</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/zhengzhou`}>郑州</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/shenzheng`}>深圳</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/guangzhou`}>广州</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/aaa`}>三亚</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/cs`}>郑州</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/shescasnzheng`}>深圳</NavLink>
					<NavLink activeClassName='home__nav--active' to={`${match.url}/guangzhxsou`}>广州</NavLink>
				</div>


				<Redirect path={'/home'} to={'/home/index'} />
				<Route  path={`${match.path}`} component={XiAn}></Route>







			</div>
	)}
	// renderBareScreen=()=>(<BareScreen/>)
	render(){
		// console.log('home',this.state.home)
		  let el=null;
		  if (this.state.home) {
		    el = this.renderPage()
		  }else{
		    // el = this.renderBareScreen()
			  el = null
		  }
		  return el;
	}

}

export default withRouter(Home);