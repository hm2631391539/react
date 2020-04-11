import React,{Component} from 'react';


import UcFind from "../components/uc-find";
import styles from '../assets/css/strategy.module.css'
import UcList from "../components/uc-list";

export default class Strategy extends Component{
	state={
	  column : []
	};
	
	async componentDidMount(){
	  let res =  await React.axios({url:'/api/goods/find',params:{_page:1,_limit:8}})
	  this.setState({column:res.data.data})

	}
	// get({apiname:'find',params:{_page:1,_limit:9}}).then(
	// 	result=>commit('FIND',result)
	// )
  render(){
	  let {column}=this.state;
	  // console.log(trip)
	  // console.log(this.props.match.url, this.props.match.path)
    return (

		  <div className={styles.Find}>
			  <div className={styles.header}>
					  推荐观看
			  </div>
			  <div  className={styles.ofind}>
				  {
					  column.map(item=>(
						  <UcFind
							  key={item._id}
							  data={item}
							  style={{background:''}}
							  to={{pathname:'/detail',apiname:'find'}}
						  />
					  ))
				  }

			  </div>
		  </div>



    )
  }
}