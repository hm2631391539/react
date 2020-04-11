import React,{Component} from 'react';
import UcList2 from "../components/uc-list2";



export default class trip extends Component{
	state={
	  column : []
	};
	
	async componentDidMount(){
	  let res =  await React.axios({url:'/api/goods/follow',params:{_page:1,_limit:10}})
	  this.setState({column:res.data.data})
	}
  render(){
	  let {column}=this.state;
	  // console.log(this.props.match.url, this.props.match.path)
    return (
      <div className="">
		  {
			  column.map((item,index)=>(
				  <UcList2
					  key={item._id}
					  index={index}
					  data={item}
					  style={{background:''}}
					  to={{pathname:'/detail',apiname:'home'}}

				  />
			  ))
		  }


      </div>
    )
  }
}