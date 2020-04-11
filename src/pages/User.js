import React,{Component} from 'react';
import styles from '../assets/css/user.module.css'
import {baseUrl} from "../server";
import enotion from '../assets/img/emotion.png'
import alert from '../assets/img/alert.png'
import qq from '../assets/img/feedback.png'
export default class User extends Component{
  state={
    user : []
  };

  async componentDidMount(){
    let res =  await React.axios({url:'/api/user'})
      // console.log(res);
    this.setState({user:res.data.data})
  }


    login=()=>{
        this.props.history.push('/login')
    }

  logout=()=>{
    //删除 本地 token
    window.localStorage.removeItem('user')

    this.props.history.push('/login')
  };
  render(){
    let {user}=this.state
    // console.log(user)

    return (
        <div className={styles.content}>
            {
                !user.icon&&<div>
                    <div className={styles.usernav}>
                    </div>
                    <div className={styles.header}>
                        <h2><img src={baseUrl+'/upload/moren.png'} alt="" /></h2>
                        <p style={{color:"red"}} onClick={this.login}>点击登录</p>
                    </div>
                </div>
            }
            {
                user.icon&&<div>
                    <div className={styles.usernav}>
                        {/*<img src={alert} style={{width:'0.5rem',lineHeight:"1rem"}} alt=""/>*/}
                        <button style={{fontSize:"0.3rem",border:"none"}} onClick={this.logout}>注销</button>
                    </div>
                    <div className={styles.header}>
                        <h2><img src={baseUrl+user.icon} alt="" /></h2>
                        <p>{user.nikename}</p>
                    </div>
                </div>
            }
          <ul className={styles.listbox}>
            <li>
              <span>{user.follow}</span>
              <p>关注</p>
            </li>
            <li>
              <span>{user.fans}</span>
              <p className={styles.end}>粉丝</p>
            </li>
            <li>
              <span>{user.follow}</span>
              <p className={styles.end}>收藏</p>
            </li>
            <li>
              <span>{user.fans}</span>
              <p className={styles.end}>代金券</p>
            </li>
          </ul>
      <div className={styles.docList}>
          <div className={styles.tit}>
              <h3>我的订单</h3><p>查看全部订单<i></i></p>
          </div>
          <ul className={styles.list1}>
              <li>
              <i><img src={enotion} alt=""/></i>
              <p>待付款</p>
              </li>
              <li>
                  <i><img src={enotion} alt=""/></i>
                <p className={styles.end}>待发货</p>
              </li>
              <li>
                  <i><img src={enotion} alt=""/></i>
                  <p className={styles.end}>待收货</p>
              </li>
              <li>
                  <i><img src={enotion} alt=""/></i>
                <p className={styles.end}>评价</p>
              </li>
              <li>
                  <i><img src={enotion} alt=""/></i>
                <p className={styles.end}>售后</p>
              </li>
          </ul>
      </div>
      <div className={styles.docList}>
        <div className={styles.tit}>
          <h3>必备工具</h3>
          <p>查看全部工具<i></i></p>
        </div>

          <ul className={styles.list1+' '+styles.list2}>
            <li>
                <i><img src={qq} alt=""/></i>
                <p>每日返现</p>
            </li>
            <li>
                <i><img src={qq} alt=""/></i>
                <p className={styles.end}>领券中心</p>
            </li>
            <li>
                <i><img src={qq} alt=""/></i>
                <p className={styles.end}>闲置换钱</p>
            </li>
            <li>
                <i><img src={qq} alt=""/></i>
                <p className={styles.end}>客服小蜜</p>
            </li>
              <li>
                  <i><img src={qq} alt=""/></i>
                  <p>每日返现</p>
              </li>
              <li>
                  <i><img src={qq} alt=""/></i>
                  <p className={styles.end}>领券中心</p>
              </li>
              <li>
                  <i><img src={qq} alt=""/></i>
                  <p className={styles.end}>闲置换钱</p>
              </li>
              <li>
                  <i><img src={qq} alt=""/></i>
                  <p className={styles.end}>客服小蜜</p>
              </li>
          </ul>
      </div>
  </div>

    )
  }
}