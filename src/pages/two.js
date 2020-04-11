import React,{Component} from 'react';

import {NavLink,Route,Switch,Redirect,Link} from 'react-router-dom';

import BaoJi from "./BaoJi";
import XiAn from "./xian";

export default class Two extends Component{
    constructor(props) {
        super(props);
    }
  state={
  };

  render(){

    let {location,match}=this.props;
    console.log(this.props)
    return (

      <div>
        <div className={'nav'}>
          {/*<Link to='/goods/2?a=3&b=4'>商品2</Link>*/}
          {/*<Link to={`${match.url}/1?a=1&b=2`}>商品1</Link>*/}
          {/*<Link to={{pathname:match.url+'/2',search:'a=11&b=22'}}>商品2</Link>*/}
          {/*<Link to={{pathname:match.url+'/3',search:qs.stringify({a:111,b:222})}}>商品3</Link>*/}
          <NavLink activeClassName='home__nav--active' to={`/home`}>西安</NavLink>
          <NavLink activeClassName='home__nav--active' to={`/home/xian`}>宝鸡</NavLink>
          {/*<NavLink activeClassName='dhome__nav--active' to={`${match.url}/soso`}>北京</NavLink>*/}
          {/*<NavLink activeClassName='home__nav--active' to={`${match.url}/shanghai`}>上海</NavLink>*/}
          {/*<NavLink activeClassName='home__nav--active' to={`${match.url}/sanya`}>三亚</NavLink>*/}
          {/*<NavLink activeClassName='home__nav--active' to={`${match.url}/zhengzhou`}>郑州</NavLink>*/}
          {/*<NavLink activeClassName='home__nav--active' to={`${match.url}/shenzheng`}>深圳</NavLink>*/}
          {/*<NavLink activeClassName='home__nav--active' to={`${match.url}/guangzhou`}>广州</NavLink>*/}
          {/*<NavLink activeClassName='home__nav--active' to={`${match.url}/sanya`}>三亚</NavLink>*/}
          {/*<NavLink activeClassName='home__nav--active' to={`${match.url}/zhengzhou`}>郑州</NavLink>*/}
          {/*<NavLink activeClassName='home__nav--active' to={`${match.url}/shenzheng`}>深圳</NavLink>*/}
          {/*<NavLink activeClassName='home__nav--active' to={`${match.url}/guangzhou`}>广州</NavLink>*/}

        </div>
        {/*<Route path={`${match.path}/:id`} component={BaoJi} />*/}
        {/*<Route path={`/home/baoji`} component={BaoJi} />*/}
        {/*<Route path={`/home/shanghai`} component={BaoJi} />*/}
          <Route path={'/home'} component={XiAn}/>
          <Route path={'/home/xian'} component={XiAn}/>
      </div>
    )
  }
}