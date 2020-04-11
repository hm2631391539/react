import React, {Component} from 'react';
import styles from './uc-list.module.css'
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

/*
* index     number    1
* data      {_id,title,des}
* to        {pathname:'',apiname:''}
* */

class UcList2 extends Component {

  static defaultProps = {
    index: undefined,
    to: null,
    style:{}
  };

  static propTypes = {
    index: propTypes.number,
    data: propTypes.shape({
      _id: propTypes.string,
      title: propTypes.string,
      img:propTypes.string,
      des: propTypes.string,
    }).isRequired,
    to: propTypes.shape({
      pathname: propTypes.string,
      apiname: propTypes.string,
    })
  };

  to=(_id)=>{
    if (!this.props.to) return;
    let {history,to:{pathname,apiname}}=this.props;
    history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`})
  };
  render() {
    let {index,data,children,style} = this.props;
    return (
      <div className={styles.Olist}
           style={style}
           onClick={()=>this.to(data._id)}
      >
      	<img  src={data.img} alt=""/>
      	<p>
      		<span>{data.title}</span><br/>
      		<strong>{data.sub_title}</strong>
      	</p>
      </div>
    )
  }
}

export default withRouter(UcList2)