import React,{Component} from 'react';
import styles from '../assets/css/login.module.css'
import UcNav from "../components/uc-nav/UcNav";
import UcButton from "../components/uc-button";

import {Link} from 'react-router-dom'
import UcInput from "../components/uc-input";

import qs from 'qs';
export default class Login extends Component{

    state={
        username:'',
        password:'',
        errorMess:''
    };

    login=async ()=>{

        let params = new URLSearchParams();
        params.append("username",this.state.username);
        params.append("password",this.state.password);

        let res = await this.axios({
            url:'/api/login',
            method:'post',
            data:params
        });

        if (res.data.err===0){
            //更新同步localStrage
            // window.localStorage.setItem("user",qs.stringify(res.data));
            // console.log('login 页面-- 登录成功')
            // //跳转到之前
            // this.props.history.push({
            //     pathname:qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path
            // })

            //更新同步localStrage
            window.localStorage.setItem("user",qs.stringify(res.data));
            //跳转到之前
            let path = qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path;

            if (path && !path.includes('/login')){
                this.props.history.push({
                    pathname:qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path
                })
            } else {
                this.props.history.push('/user')
            }
        } else {
            this.setState({errorMess:res.data.msg})
        }
    };

    changeIpt=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    };

    render(){
        let {username,password,errorMess} = this.state;
        return (
            <div className={styles.content}>
                <UcNav arrow="gray" borderWidth={0} bgColor="transparent" />
                <h1>亲，欢迎登陆</h1>
                <div className={styles['login-box']}>
                    没有可使用的账户？
                    <Link to="/reg">立即注册</Link>
                </div>
                <div className={styles.inputox}>
                    <UcInput
                        // style={{textIndent: '0.2rem'}}
                        label="用户" model={{name:'username',value:username,onChange:this.changeIpt}}/>
                    <UcInput
                        label="密码"
                        // style={{textIndent: '0.2rem',}}
                        type="password"
                        model={{name:'password',value:password,onChange:this.changeIpt}}
                    />
                </div>
                <div className={styles.footbox}>
                    <br/><br/>
                    <p className={styles.errcol}>{errorMess}</p>
                    <UcButton style={{marginTop:'0.64rem',marginBottom:'0.3rem',background:'indianred',border:'none'}} clickHandler={this.login}>登录</UcButton>
                    {/*<UcButton clickHandler={this.show.bind(null,1,2,3)}>登录录</UcButton>*/}
                    {/*<UcButton clickHandler={(ev)=>this.show(1,2,3,ev)}>登录录</UcButton>*/}
                    <br/>
                    <a className="tishi">忘记密码？</a>
                </div>
            </div>
        )
    }
 }
