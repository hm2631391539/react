import  React from 'react'
import styles from './loading.module.css'
export default class Loading extends React.Component{
    render() {
        return (
            <div className={styles.loading}></div>
        );
    }
}