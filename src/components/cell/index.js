import React, {Component} from 'react';
import styles from './style.module.css'
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

/*
* index     number    1
* data      {_id,title,des}
* to        {pathname:'',apiname:''}
* */

class Cell extends Component {

  static defaultProps = {
    index: undefined,
    to: null,
	style:{}
  };

  static propTypes = {
    index: propTypes.number,
	style: propTypes.object,
    data: propTypes.shape({
      _id: propTypes.string,
      title: propTypes.string,
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
      <div 
		  className={styles["uc-cell"]} 
		  style={style}
		  onClick={()=>this.to(data._id)}
		 >
        {
          children
        }
        <h2>
          {index + 1 ? <span>{index + 1 + '. '}</span> : null}
          {data.title}
        </h2>
        <p>{data.des}</p>

      </div>
    )
  }
}

export default withRouter(Cell)