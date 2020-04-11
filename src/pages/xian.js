import React,{Component} from "react";
import '../assets/css/home.css'
import UcList from "../components/uc-list";

export default class XiAn extends Component{
    state={
        home:null
    }
    componentDidMount(){
        //读取数据
        React.axios.all([
            React.axios({url:'/api/goods/hom',params:{_page:1,_limit:12}})
        ]).then(React.axios.spread(home=>{
            this.setState({
                home:home.data.data
            })
        }))
    }
    render() {
        let {home}=this.state;
        return (
            <div>
                <p style={{color:"red",fontSize:".3rem",padding:"0.1rem 0.5rem"}}>
                {
                    Math.random()*10
                }
                变化</p>
            	{home&&home.map((item,index)=>(
        			<UcList
        				key={item._id}
        				index={index}
        				data={item}
        				style={{height:'2.8rem'}}
        				to={{pathname:'/detail',apiname:'home'}}
        			/>
        			))
        	    }
            </div>
        )
    }
}