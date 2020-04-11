import React,{Component} from 'react';



import {withRouter} from 'react-router-dom';

class SoSo extends Component{
  render(){
    return (
      <div className="SoSo">
          <input type="text" style={{display:'inline-block',width:"70%",margin:"0.3rem 0.5rem",height:"0.5rem",value:"",border:'1px solid red',borderRadius:'0.2rem',textIndent:'0.3rem', background:"#ffffff"}}/>
          <button style={{padding:'.05rem',borderRadius:'.2rem'}} onClick={()=>this.props.history.go(-1)}>取消</button>
      </div>
    )
  }
}

export default withRouter(SoSo)