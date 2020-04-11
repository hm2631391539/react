import React, {Component} from 'react';
import styles from './uc-find.module.css'
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import r2 from './img/r2.png'
import r3 from './img/r3.png'
import r4 from './img/r4.png'

/*
* index     number    1
* data      {_id,title,des}
* to        {pathname:'',apiname:''}
* */

class UcFind extends Component {

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
                {/*style="width: 100%; height: 100%; object-fit: fill"*/}
                <video controls poster={data.img} style={{width:'100%',objectFit: 'fill'}}   className={styles.vid}>
                    <source src={data.video} type="video/mp4" />
                    您的浏览器版本太低，请升级浏览器！
                </video>
                <div className={styles.banner2}>
                    <a className={styles.mei}>
                        <img src={r2} style={{width:'.5rem'}}/>
                        <span>{data.title}</span>
                    </a>
                    <a className={styles.guan}><span>+关注</span></a>
                    <a><img src={r3} style={{width:'.5rem'}}/></a>
                    <a><img src={r4} style={{width:'.5rem'}}/></a>
                    <a><span>···</span></a>
                </div>

            </div>
        )
    }
}

export default withRouter(UcFind)