import React,{Component} from "react";


export default class NoPage extends Component{
    render() {
        return (
            <div className={'NoPage'}>
                <h1
                    style={{display: 'flex',
                    justifyContent:'center',
                    alignItems: 'center'}}
                >404</h1>
            </div>
        );
    }
}