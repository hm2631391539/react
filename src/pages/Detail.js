import React,{Component} from 'react';

import styles from '../assets/css/detail.module.css';

import zan from '../assets/img/zan.png';//图片引入，模块化使用
import xing from '../assets/img/xing.png';//图片引入，模块化使用
import fx from '../assets/img/fx.png';
import UcNav from "../components/uc-nav/UcNav";
//图片引入，模块化使用
import qs from 'query-string'
import BareScreen from "../components/BareScreen";
import {date} from "../utils/filters";


export default class Detail extends Component{
	state={
		data:{}
	}
	constructor(props){
		super(props);
		let apiname=qs.parse(props.location.search).apiname;
		let _id=props.match.params._id;
		axios({url:`/api/goods/${apiname}/${_id}`}).then(
		res=>{
			this.setState({data:res.data.data})
			// console.log(res.data.data)
		})
			// res=>console.log(res.data.data))

	}
	renderPage=({title,sub_title,img,detail:{auth,auth_icon,content,des,time}})=>(
		<div>
		  <UcNav/>
		  <div className={styles.content}>
		    <div className={styles['header']+' ' +styles['clear']}>
				{/*className={styles['login-button'] + ' ' + styles[`login-button--${size}`]}*/}
				<h2>
					{
						img&&<img src={`${img}`} style={{width:'100%'}} alt=""/>
					}
					{
						!img&& <img src={`${this.baseUrl}/${auth_icon}`} alt=""/>
					}

				</h2>

		    </div>
		    <div className={styles.cont}>
				{
					img&&<p style={{color:"red",fontSize:'.4rem'}}>￥9.9-9999</p>

				}

		      <h2>{title}</h2>
		      <div className={styles.time}><p>{date(time)}<span><img src={zan} alt=""/></span></p>
		      </div>
		      <div className={styles['text-box']}>
			  {content}
			  </div>
		    </div>
		  </div>
		  <div className={styles['foot-btn']}>
		    <ul>
		      <li className={styles.say}><a >
		        <i><img src={require('../assets/img/say.png')} style={{width:'100%',height:'100%'}} /></i><span>0</span>
		      </a></li>
		      <li
		        className={styles.zan}
		      ><a >
		        <i style={{background:"url(/images/zan123.png) no-repeat 0 0", "backgroundSize":"100%"}}></i><span>0</span>
		      </a></li>
		      <li className={styles.xing}><a >
		        <i><img src={xing} alt=""/></i>
		      </a></li>
		      <li className={styles.fx}><a>
		        <i><img src={fx} alt=""/></i>
		      </a></li>
		    </ul>
		  </div>
		</div>
	)
	
	renderBareScreen=()=>(<BareScreen/>)
	
	render(){
	  let el=null;
	
	  if (this.state.data.title) {
	    el = this.renderPage(this.state.data)
	  }else{
	    el = null
	  }
	  return el;
  }
}