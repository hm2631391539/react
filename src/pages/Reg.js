import React,{Component} from 'react';
import styles from '../assets/css/reg.module.css'
import UcNav from "../components/uc-nav/UcNav";
import UcButton from "../components/uc-button";

import {Link} from 'react-router-dom'
import UcInput from "../components/uc-input";
import qs from 'qs';
export default class Reg extends Component{

    state={
        username:'',
        password:'',
        nikename:'',
        errorMess:''
    };
    changeIpt=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    };
    reg=async ()=>{

        // let params = new URLSearchParams();
        let fromData = new FormData();// js类型
        fromData.append("username",this.state.username);
        fromData.append("password",this.state.password);
        fromData.append("nikename",this.state.nikename);
        // let file = document.getElementById('file');
        // params.append('icon',file.files[0])
        if (this.file.files.length>0){
            fromData.append('icon',this.file.files[0])
        }
        let res = await this.axios({
            url:'/api/reg',
            method:'post',
            data:fromData
        });

        // if (res.data.err===0){
        //    console.log('注册成功')
        //     //跳转到之前
        //     this.props.history.push({
        //         pathname:qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path
        //     })
        // } else {
        //     this.setState({errorMess:res.data.msg})
        // }

        if (res.data.err===0){
            console.log('注册成功')
            this.props.history.push('/login')
        } else {
            this.setState({errorMess:res.data.msg})
        }
    };


    // upload=()=> {
    //     let file = document.getElementById('file');
    //     file.click()
    // }
    render(){
        let {username,password,errorMess,nikename} = this.state;
        return (
            <div className={styles.content}>
                <UcNav arrow="gray" borderWidth={0} bgColor="transparent" />
                {/*<h1 id="h1" onClick={this.upload}>点击上传</h1>*/}
                {/*<input type="file" id="file" style={{display:'none'}}/>*/}
                <h1 onClick={()=>this.file.click()}>点击上传</h1>
                <input type="file" ref={el=>this.file=el} style={{visibility: "hidden"}}/>
                <h2>亲，欢迎注册阿雷账号</h2>
                <div className={styles['login-box']}>
                    若有阿雷账户？
                    <Link to="/login">立即登录</Link>
                </div>
                <div className={styles.inputox}>
                    <UcInput
                        style={{textIndent: '0.2rem'}}
                        label="昵称" model={{name:'nikename',value:nikename,onChange:this.changeIpt}}/>
                    <UcInput
                        style={{textIndent: '0.2rem'}}
                        label="用户" model={{name:'username',value:username,onChange:this.changeIpt}}/>
                    <UcInput
                        label="密码"
                        style={{textIndent: '0.2rem',}}
                        type="password"
                        model={{name:'password',value:password,onChange:this.changeIpt}}
                    />
                </div>
                <div className={styles.footbox}>
                    <br/>
                    <p className={styles.errcol}>{errorMess}</p>
                    <UcButton
                        style={{marginTop:'0.3rem',marginBottom:'0.2rem',background:'indianred',border:'none'}}
                        clickHandler={this.reg}>
                        注册
                    </UcButton>
                </div>
            </div>
        )
    }
 }
