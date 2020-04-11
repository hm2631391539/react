import React,{Component} from 'react';

import styles from './header.module.css'
import {NavLink} from 'react-router-dom'

export default class Header extends Component{
  render(){
    return (
      <div className={styles.nav}>
        <ul>
          <li><NavLink to="/goods/index" activeClassName={styles.active}>首页</NavLink></li>
          <li><NavLink to="/goods/follow" activeClassName={styles.active}>关注</NavLink></li>
          {/*<li><NavLink to="/goods/trip" activeClassName={styles.active}>栏目</NavLink></li>*/}
        </ul>
      </div>
    )
  }
}